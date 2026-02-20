// public/js/modules/ui/craftUI.js
// Da crafting Panel

import { apiFetch } from "../apiClient.js";
import { RECIPES } from "../../data/recipes.js";

let craftSlots = [null, null];

export function addItemToCraftSlot(item) {
  if (!craftSlots[0]) {
    craftSlots[0] = item;
    return true;
  } else if (!craftSlots[1]) {
    if (craftSlots[0]._id === item._id) return false; // Prevent duplicating same instance
    craftSlots[1] = item;
    return true;
  }
  return false; // Both slots full
}

export function clearCraftSlots() {
  craftSlots = [null, null];
}

export async function attemptCraft(ownerId, onCraftSuccess) {
  if (!craftSlots[0] || !craftSlots[1]) return false;

  const i1 = craftSlots[0];
  const i2 = craftSlots[1];

  // Validate against recipes (order-independent)
  const recipe = RECIPES.find(r =>
    (r.input.includes(i1.name.toLowerCase()) && r.input.includes(i2.name.toLowerCase()))
  );

  const resultName = recipe ? recipe.result : null;
  const success = !!recipe;

  // Log to database
  await apiFetch("/api/crafts", {
    method: "POST",
    ownerId,
    body: { item1: i1.name, item2: i2.name, result: resultName, success }
  });

  if (success) {
    await onCraftSuccess(i1._id, i2._id, resultName, recipe.message);
    clearCraftSlots();
    return true;
  } else {
    alert("Crafting attempt failed: try thinking back to the collegia"); // Maybe change up text
    clearCraftSlots();
    return false;
  }
}

export function renderCraftInterface(container, { onStateChange }) {
  container.innerHTML = `
    <div style="display: flex; gap: 8px; margin-bottom: 12px;">
      <div style="border: 1px dashed var(--border); padding: 8px; flex: 1; min-height: 35px; display: flex; align-items: center; justify-content: space-between;">
        <span style="font-size: 0.8rem;">${craftSlots[0] ? craftSlots[0].name : "Slot 1"}</span>
        ${craftSlots[0] ? `<button class="btn-remove" data-index="0" style="padding: 2px 6px; background: transparent; color: red; border: 1px solid red; cursor: pointer;">X</button>` : ""}
      </div>
      <div style="border: 1px dashed var(--border); padding: 8px; flex: 1; min-height: 35px; display: flex; align-items: center; justify-content: space-between;">
        <span style="font-size: 0.8rem;">${craftSlots[1] ? craftSlots[1].name : "Slot 2"}</span>
        ${craftSlots[1] ? `<button class="btn-remove" data-index="1" style="padding: 2px 6px; background: transparent; color: red; border: 1px solid red; cursor: pointer;">X</button>` : ""}
      </div>
    </div>
    <button id="btn-combine" style="width: 100%; padding: 8px; background: #000; color: #4db8ff; border: 1px solid #4db8ff; cursor: pointer;" ${craftSlots[0] && craftSlots[1] ? "" : "disabled"}>
      COMBINE
    </button>
  `;

  // Handle removing items from slots
  container.querySelectorAll(".btn-remove").forEach(btn => {
    btn.onclick = () => {
      const idx = btn.getAttribute("data-index");
      craftSlots[idx] = null;
      onStateChange();
    };
  });
}