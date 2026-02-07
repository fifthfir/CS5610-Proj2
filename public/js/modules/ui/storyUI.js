const storyLines = [
  // note words
  // Should use json for the whole story
  { type: "text", value: "cold" },
  { type: "note", value: "wind" },
  { type: "text", value: "in" },
  { type: "text", value: "the" },
  { type: "inv", value: "forest" },
  { type: "text", value: "." },

  { type: "text", value: "You" },
  { type: "text", value: "see" },
  { type: "inv", value: "rope" },
  { type: "text", value: "and" },
  { type: "inv", value: "match" },
  { type: "text", value: "near" },
  { type: "note", value: "scratches" },
  { type: "text", value: "on" },
  { type: "text", value: "a" },
  { type: "inv", value: "door" },
  { type: "text", value: "." },
];

export function renderStory(container, { onAddNote, onAddInventory }) {
  container.innerHTML = "";

  storyLines.forEach((w, index) => {
    const isPunctuation = /^[.,!?;:]/.test(w.value);

    if (isPunctuation && container.lastChild && container.lastChild.nodeType === Node.TEXT_NODE) {
      container.removeChild(container.lastChild);
    }

    const el = w.type === "text" 
      ? document.createElement("span") 
      : document.createElement("button");

    el.textContent = w.value;
    
    if (w.type !== "text") {
      el.style.color = w.type === "note" ? "green" : "orange";
      el.style.cursor = "pointer";
      el.style.border = "none";
      el.style.background = "none";
      el.style.padding = "0";
      el.style.font = "inherit";
      el.style.textDecoration = "underline";

      el.addEventListener("click", () => {
        if (w.type === "note") onAddNote(w.value);
        if (w.type === "inv") onAddInventory(w.value);
      });
    }

    container.appendChild(el);

    container.appendChild(document.createTextNode(" "));
  });
}