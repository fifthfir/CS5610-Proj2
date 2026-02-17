import { ensureOwnerId } from "./modules/session.js";
import { renderStory, setInitialProgress } from "./modules/ui/storyUI.js";
import { STORY_DATA } from "./data/content.js";

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
  token: document.getElementById("displayToken"),
  copyBtn: document.getElementById("copyTokenBtn"),
  story: document.getElementById("storyText"),
  notesList: document.getElementById("notesList"),
  invList: document.getElementById("inventoryList"),
  noteForm: document.getElementById("newNoteForm"),
  noteInput: document.getElementById("newNoteInput"),
};

async function refreshUI() {

  console.log("Current Owner:", ownerId);
  if (!ownerId) {
      console.error("Token missing! Cannot load data.");
      return;
  }

  if (els.notesList) {
    renderNotes(els.notesList, notes, {
      onEdit: async (id, text) => {
        console.log("Updating Note:", id, "with Text:", text, "for Owner:", ownerId);
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
  }

  if (els.invList) {
    renderInventory(els.invList, inventory, {
      onTogglePin: async (id, pinned) => {
        await updateInventoryItem(ownerId, id, { pinned });
        inventory = await loadInventory(ownerId);
        refreshUI();
      },
      onToggleInspect: async (id, inspected) => {
        await updateInventoryItem(ownerId, id, { inspected });
        inventory = await loadInventory(ownerId);
        refreshUI();
      },
      onDelete: async (id) => {
        if (!confirm("Are you sure?")) return;
        await deleteInventoryItem(ownerId, id);
        inventory = await loadInventory(ownerId);
        refreshUI();
      }
    });
  }
}

async function boot() {
  console.log("System initializing...");
  
  ownerId = await ensureOwnerId(); 
  if (!ownerId) return;

  localStorage.setItem("game_owner_id", ownerId);
  
  try {
    const progressRes = await fetch(`/api/session/get-progress?ownerId=${ownerId}`);
    const progressData = await progressRes.json();
    if (progressData.ok) {
        setInitialProgress(progressData.currentSection);
    }
  } catch (err) {
    console.warn("Failed to load progress, defaulting to cell_1");
  }

  const tokenDisplay = document.getElementById("displayToken"); 
  const copyCheck = document.getElementById("copyCheck");

  if (tokenDisplay) {
      tokenDisplay.textContent = ownerId;

      tokenDisplay.addEventListener("click", async () => {
          try {
              await navigator.clipboard.writeText(ownerId);
              
              copyCheck.style.opacity = "1";
              
              tokenDisplay.style.color = "#fff";
              
              setTimeout(() => {
                  copyCheck.style.opacity = "0";
                  tokenDisplay.style.color = "#4db8ff";
              }, 800);
              
          } catch (err) {
              console.error("Copy failed", err);
          }
      });
  }

  notes = await loadNotes(ownerId);
  inventory = await loadInventory(ownerId);

  if (els.token) {
    els.token.textContent = ownerId;
  }

  if (els.copyBtn) {
    els.copyBtn.addEventListener("click", async () => {
      await navigator.clipboard.writeText(ownerId);
      const originalText = els.copyBtn.textContent;
      els.copyBtn.textContent = "Copied!";
      setTimeout(() => (els.copyBtn.textContent = originalText), 800);
    });
  }

  if (els.noteForm) {
    els.noteForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const text = els.noteInput.value.trim();
      if (!text) return;
      await createNote(ownerId, text, "manual");
      els.noteInput.value = ""; 
      notes = await loadNotes(ownerId);
      refreshUI();
    });
  }

  if (els.story) {
        renderStory(els.story, {
            notes,    
            inventory,
            onAddNote: async (word) => {
                await createNote(ownerId, word, "story");
                notes = await loadNotes(ownerId);
                refreshUI();
            },
            onAddInventory: async (word) => {
                await addInventoryItem(ownerId, word, "story");
                inventory = await loadInventory(ownerId);
                refreshUI();
            }
        });
    }

  try {
    notes = await loadNotes(ownerId);
    inventory = await loadInventory(ownerId);
    await refreshUI();
  } catch (err) {
    console.warn("Initial data load failed. Checking connection...");
  }
}

boot().catch((e) => {
  console.error("Critical boot failure:", e);
});