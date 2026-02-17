// storyUI.js
import { STORY_DATA } from "../../data/content.js";

let currentSection = "cell_1";
let currentLineIndex = 0;
let isTyping = false;
let skipTyping = false;

export function loadSection(sectionName, container) {
    if (!STORY_DATA[sectionName]) return;
    
    const wrapper = document.getElementById("story-lines-wrapper");
    if (wrapper) wrapper.innerHTML = ""; 
    
    currentSection = sectionName;
    currentLineIndex = 0;
    container.scrollTo({ top: 0, behavior: 'smooth' });
}

export function renderStory(container, { onAddNote, onAddInventory, notes = [], inventory = [] }) {
    if (!document.getElementById("story-lines-wrapper")) {
        container.innerHTML = `<div id="story-lines-wrapper" class="story-wrapper"></div>`;
    }
    
    const wrapper = document.getElementById("story-lines-wrapper");

    const parseLine = (text, lineIdx) => {
        return text
            .replace(/\[([^\]]+?)\]\{note\}/gi, (match, p1) => {
                const isAdded = notes.some(n => n.source === `story-line-${lineIdx}` && n.text === p1);
                return `<span class="word-note ${isAdded ? 'added' : ''}" data-line="${lineIdx}">${p1}</span>`;
            })
            .replace(/\[([^\]]+?)\]\{item\}/gi, (match, p1) => {
                const isAdded = inventory.some(i => i.source === `story-line-${lineIdx}` && i.name === p1);
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
        
        choiceEl.onclick = (e) => {
            e.stopPropagation();
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
            if (target.classList.contains("added")) return;
            if (target.classList.contains("word-note")) onAddNote(target.textContent);
            else onAddInventory(target.textContent);
            
            target.classList.add("added");
            return;
        }
        showNextLine();
    };
}