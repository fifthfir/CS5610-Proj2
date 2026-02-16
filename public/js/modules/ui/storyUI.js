// storyUI.js

const storyLines = [
  "The investigation begins here.",
  "You notice a [faint scratch]{note} on the floor.",
  "On the desk, there is a [Brass Key]{item}.",
  "On the desk, there is another [Brass Key]{item}.",
  "You notice a [faint scratch2]{note} on the floor.",
];

let currentLineIndex = 0;

/**
 * 增加 notes 和 inventory 参数，用于初始化比对
 */
export function renderStory(container, { onAddNote, onAddInventory, notes = [], inventory = [] }) {
    container.innerHTML = `<div id="story-lines-wrapper" class="story-wrapper"></div>`;
    const wrapper = document.getElementById("story-lines-wrapper");

    const isAlreadyCollected = (text, type) => {
        if (type === 'note') {
            return notes.some(n => n.text === text);
        } else {
            return inventory.some(i => i.name === text);
        }
    };

    const parseLine = (text) => {
        // 使用回调函数动态判断是否增加 "added" 类名
        return text
            .replace(/\[(.*?)\]\{note\}/gi, (match, p1) => {
                const addedClass = isAlreadyCollected(p1, 'note') ? "added" : "";
                return `<span class="word-note ${addedClass}">${p1}</span>`;
            })
            .replace(/\[(.*?)\]\{item\}/gi, (match, p1) => {
                const addedClass = isAlreadyCollected(p1, 'item') ? "added" : "";
                return `<span class="word-inv ${addedClass}">${p1}</span>`;
            });
    };

    const showNextLine = () => {
        if (currentLineIndex >= storyLines.length) return;
        const lineEl = document.createElement("p");
        lineEl.className = "story-line-item active";
        lineEl.innerHTML = parseLine(storyLines[currentLineIndex]);
        wrapper.appendChild(lineEl);
        currentLineIndex++;
        container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    };

    // 初始化显示
    showNextLine();

    container.onclick = (e) => {
        const target = e.target;
        if (target.classList.contains("word-note") || target.classList.contains("word-inv")) {
            // 如果已经带了 added 类，直接拦截，不触发后端请求
            if (target.classList.contains("added")) return;

            if (target.classList.contains("word-note")) onAddNote(target.textContent);
            else onAddInventory(target.textContent);
            
            target.classList.add("added");
            return;
        }
        showNextLine();
    };
}