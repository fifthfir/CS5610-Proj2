import { ensureOwnerId } from "./modules/session.js";
import { renderStory } from "./modules/ui/storyUI.js";

import { loadNotes, createNote, updateNote, deleteNote, renderNotes } from "./modules/ui/notesUI.js";
import {
  loadInventory,
  addInventoryItem,
  updateInventoryItem,
  deleteInventoryItem,
  renderInventory,
} from "./modules/ui/inventoryUI.js";

let ownerId = "";
let notes = [];
let inventory = [];

const els = {
  token: document.getElementById("saveToken"),
  copyBtn: document.getElementById("copyTokenBtn"),
  story: document.getElementById("storyText"),
  notesList: document.getElementById("notesList"),
  invList: document.getElementById("inventoryList"),
  noteForm: document.getElementById("newNoteForm"),
  noteInput: document.getElementById("newNoteInput"),
};

async function refreshUI() {
  renderNotes(els.notesList, notes, {
    onEdit: async (id, text) => {
      await updateNote(ownerId, id, text);
      notes = await loadNotes(ownerId);
      refreshUI();
    },
    onDelete: async (id) => {
      await deleteNote(ownerId, id);
      notes = await loadNotes(ownerId);
      refreshUI();
    },
  });

  renderInventory(els.invList, inventory, {
    // 1. Toggle Pin Logic
    onTogglePin: async (id, pinned) => {
      try {
        await updateInventoryItem(ownerId, id, { pinned }); // Update DB
        inventory = await loadInventory(ownerId);          // Fetch fresh data
        refreshUI();                                       // Re-draw the screen
      } catch (err) {
        console.error("Pin failed:", err);
      }
    },

    // 2. Toggle Inspect Logic
    onToggleInspect: async (id, inspected) => {
      try {
        await updateInventoryItem(ownerId, id, { inspected });
        inventory = await loadInventory(ownerId);
        refreshUI();
      } catch (err) {
        console.error("Inspect failed:", err);
      }
    },

    // 3. Delete Logic
    onDelete: async (id) => {
      if (!confirm("Are you sure?")) return;
      try {
        await deleteInventoryItem(ownerId, id);
        inventory = await loadInventory(ownerId);
        refreshUI();
      } catch (err) {
        console.error("Delete failed:", err);
      }
    }
  });
}

async function boot() {
    console.log("Booting up...");
  ownerId = await ensureOwnerId();
  els.token.textContent = ownerId;

  els.copyBtn.addEventListener("click", async () => {
    await navigator.clipboard.writeText(ownerId);
    els.copyBtn.textContent = "Copied!";
    setTimeout(() => (els.copyBtn.textContent = "Copy"), 800);
  });

  els.noteForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const text = els.noteInput.value.trim();
    if (!text) return;
    try {
        await createNote(ownerId, text, "manual");
        
        els.noteInput.value = ""; 

        notes = await loadNotes(ownerId);

        refreshUI();
    } catch (err) {
        console.error("Failed to add note:", err);
    }
  });

  renderStory(els.story, {
    onAddNote: async (word) => {
      try {await createNote(ownerId, word, "story");
      notes = await loadNotes(ownerId);
      refreshUI();
      } catch(e) {
        console.error("Add notes failed:", e);
      }
    },
    onAddInventory: async (word) => {
      try{await addInventoryItem(ownerId, word, "story");
      inventory = await loadInventory(ownerId);
      refreshUI();
      } catch(e) {
        console.error("Add items failed:", e);
      }
    },
  });

  notes = await loadNotes(ownerId);
  inventory = await loadInventory(ownerId);
  await refreshUI();
}

boot().catch((e) => {
  console.error(e);
  alert(e.message);
});