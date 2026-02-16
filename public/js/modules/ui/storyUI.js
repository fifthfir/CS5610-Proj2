/**
 * storyUI.js
 * Narrative system with color-coded interactive elements.
 */

const storyData = {
  content: `
    The investigation begins here. You notice a [faint scratch]{note} on the floor 
    leading toward the bookshelf. On the desk, there is a [Brass Key]{item} 
    and a [Leather Journal]{item}. 
    
    A small note tucked inside reads: "[The password is 1234]{note}".
  `
};

export function renderStory(container, { onAddNote, onAddInventory }) {
  
  /**
   * Parser: Converts tags to spans with specific classes for styling
   * [text]{note} -> class="word-note"
   * [text]{item} -> class="word-inv"
   */
  const parseStoryText = (text) => {
    return text
      .replace(/\[(.*?)\]\{note\}/g, '<span class="word-note">$1</span>')
      .replace(/\[(.*?)\]\{item\}/g, '<span class="word-inv">$1</span>');
  };

  container.innerHTML = `
    <div class="story-content" style="white-space: pre-wrap;">
      ${parseStoryText(storyData.content)}
    </div>
  `;

  // Listener for interactions
  container.addEventListener("click", (e) => {
    const target = e.target;
    const value = target.textContent;

    if (target.classList.contains("word-note")) {
      onAddNote(value);
      handleFeedback(target);
    } 
    
    else if (target.classList.contains("word-inv")) {
      onAddInventory(value);
      handleFeedback(target);
    }
  });
}

/**
 * Visual feedback when clicked (optional animation)
 */
function handleFeedback(element) {
  element.classList.add("collected");
  // Brief flash effect
  element.animate([
    { opacity: 1, filter: 'brightness(1.5)' },
    { opacity: 0.5, filter: 'brightness(1)' }
  ], { duration: 300, fill: 'forwards' });
}