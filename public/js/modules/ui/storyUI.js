// storyUI.js
import { STORY_DATA } from "../../data/content.js";
import { loadInventory } from "./inventoryUI.js"; // <--- IMPORT ADDED HERE

let currentSection = "cell_1";
let currentLineIndex = 0;
let isTyping = false;
let skipTyping = false;

export function setInitialProgress(sectionName) {
    currentSection = sectionName;
    currentLineIndex = 0;
}

export function loadSection(sectionName, container) {
    if (!STORY_DATA[sectionName]) return;

    const wrapper = document.getElementById("story-lines-wrapper");
    if (wrapper) wrapper.innerHTML = "";

    currentSection = sectionName;
    currentLineIndex = 0;

    const savedOwnerId = localStorage.getItem("game_owner_id");
    if (savedOwnerId) {
        fetch("/api/session/save-progress", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Owner-Id": savedOwnerId
            },
            body: JSON.stringify({ currentSection: sectionName })
        }).catch(err => console.error("Save failed:", err));
    }

    container.scrollTo({ top: 0, behavior: 'auto' });
}

export function renderStory(container, { onAddNote, onAddInventory, notes = [], inventory = [] }) {
    if (!document.getElementById("story-lines-wrapper")) {
        container.innerHTML = `<div id="story-lines-wrapper" class="story-wrapper"></div>`;
    }

    const wrapper = document.getElementById("story-lines-wrapper");

    const parseLine = (text, lineIdx) => {
        return text
            .replace(/\[([^\]]+?)\]\{note\}/gi, (match, p1) => {
                const isAdded = notes.some(n => n.text === p1.trim());
                return `<span class="word-note ${isAdded ? 'added' : ''}" data-line="${lineIdx}">${p1}</span>`;
            })
            .replace(/\[([^\]]+?)\]\{item\}/gi, (match, p1) => {
                const isAdded = inventory.some(i => i.name === p1.trim());
                return `<span class="word-inv ${isAdded ? 'added' : ''}" data-line="${lineIdx}">${p1}</span>`;
            });
    };

    const showNextLine = async () => {
        if (isTyping) { skipTyping = true; return; }

        const lines = STORY_DATA[currentSection];
        if (!lines || currentLineIndex >= lines.length) return;

        const currentLine = lines[currentLineIndex];

        if (typeof currentLine === 'object' && currentLine.type === 'choices') {
            if (wrapper.querySelector(".story-choice-container")) return;

            renderTextChoices(currentLine.list);
            return;
        }

        isTyping = true;
        skipTyping = false;
        const lineEl = document.createElement("p");
        lineEl.className = "story-line-item typing";
        wrapper.appendChild(lineEl);

        const parsedHTML = parseLine(currentLine, currentLineIndex);
        await typeEffect(lineEl, parsedHTML, 30);

        lineEl.classList.remove("typing");

        currentLineIndex++;
        isTyping = false;
        container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    };

    function renderTextChoices(choices) {
        const choiceContainer = document.createElement("div");
        choiceContainer.className = "story-choice-container";

        choices.forEach(choice => {
            const choiceEl = document.createElement("p");
            choiceEl.className = "story-line-item story-choice-text";
            choiceEl.innerText = choice.text;

            // MADE THE ONCLICK ASYNC TO AWAIT THE DATABASE
            choiceEl.onclick = (e) => {
                e.stopPropagation();

                // --- START OF ITEM LOCK LOGIC --- //
                if (choice.requires) {

                    // Bypass browser cache entirely by reading the actual UI panel!
                    const inventoryPanel = document.getElementById("inventoryList");
                    const inventoryText = inventoryPanel ? inventoryPanel.innerText.toLowerCase() : "";
                    const reqItem = choice.requires.toLowerCase().trim();

                    // If the item name isn't physically in the inventory panel text, lock them out
                    // BE WARY OF NAMING ITEMS SIMILIARLY
                    if (!inventoryText.includes(reqItem)) {
                        alert(choice.requireMessage || `You need a ${choice.requires} to proceed.`);
                        return; // Aborts the click, trapping them in the room
                    }
                }
                // --- END OF ITEM LOCK LOGIC --- //

                loadSection(choice.target, document.getElementById("storyText"));
                showNextLine();
            };

            choiceContainer.appendChild(choiceEl);
        });

        wrapper.appendChild(choiceContainer);

        const container = document.getElementById("storyText");
        container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    }

    async function typeEffect(element, html, speed) {
        let i = 0;
        let isTag = false;
        let currentHTML = "";

        while (i < html.length) {
            if (skipTyping) {
                element.innerHTML = html;
                break;
            }

            let char = html[i];
            if (char === "<") isTag = true;
            if (char === ">") isTag = false;

            currentHTML += char;
            if (!isTag) {
                element.innerHTML = currentHTML;
                await new Promise(resolve => setTimeout(resolve, speed));
            }
            i++;
        }
    }

    showNextLine();

    container.onclick = (e) => {
        if (window.getSelection().toString().length > 0) return;
        const target = e.target;

        if (target.classList.contains("word-note") || target.classList.contains("word-inv")) {
            if (isTyping) { skipTyping = true; return; }

            if (target.classList.contains("added")) {
                console.log("This data already exists in your records.");
                return;
            }

            if (target.classList.contains("word-note")) {
                onAddNote(target.textContent);
            } else {
                onAddInventory(target.textContent);
            }

            target.classList.add("added");
            return;
        }
        showNextLine();
    };
}