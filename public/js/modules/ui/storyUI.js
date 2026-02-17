// storyUI.js
import { STORY_DATA } from "../../data/content.js";

let currentLineIndex = 0;

export function renderStory(container, { onAddNote, onAddInventory, notes = [], inventory = [] }) {
    currentLineIndex = 0;
    container.innerHTML = `<div id="story-lines-wrapper" class="story-wrapper"></div>`;
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

    const showNextLine = () => {
        if (currentLineIndex >= STORY_DATA.length) return;

        const lineEl = document.createElement("p");
        lineEl.className = "story-line-item active";
        lineEl.innerHTML = parseLine(STORY_DATA[currentLineIndex]);

        wrapper.appendChild(lineEl);
        currentLineIndex++;
        container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    };

    showNextLine();

    container.onclick = (e) => {
        const selection = window.getSelection();
        if (selection.toString().length > 0) {
            return;
        }

        const target = e.target;
        if (target.classList.contains("word-note") || target.classList.contains("word-inv")) {
            if (target.classList.contains("added")) return;

            if (target.classList.contains("word-note")) onAddNote(target.textContent);
            else onAddInventory(target.textContent);
            
            target.classList.add("added");
            return;
        }
        showNextLine();
    };
}