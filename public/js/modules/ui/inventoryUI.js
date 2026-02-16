import { apiFetch } from "../apiClient.js"; 

export async function loadInventory(ownerId) {
  const resp = await apiFetch("/api/inventory", { ownerId });
  return resp.data;
}

export async function addInventoryItem(ownerId, name, source = "story") {
  const resp = await apiFetch("/api/inventory", { method: "POST", ownerId, body: { name, source } });
  return resp.data;
}

export async function updateInventoryItem(ownerId, id, patch) {
  const resp = await apiFetch(`/api/inventory/${id}`, { method: "PUT", ownerId, body: patch });
  return resp.data;
}

export async function deleteInventoryItem(ownerId, id) {
  await apiFetch(`/api/inventory/${id}`, { method: "DELETE", ownerId });
}

export function renderInventory(listEl, items, { onToggleInspect, onTogglePin, onDelete }) {
  listEl.innerHTML = "";
  if (!items || !items.length) {
    listEl.innerHTML = `<div class="empty">No items yet.</div>`;
    return;
  }

  items.forEach((it) => {
    const row = document.createElement("div");
    row.className = "row";

    const name = document.createElement("div");
    name.className = "inv-name";
    name.textContent = it.name;

    // Pin Button
    const pinBtn = document.createElement("button");
    pinBtn.type = "button";
    pinBtn.textContent = it.pinned ? "Pinned ★" : "Pin";
    pinBtn.style.color = it.pinned ? "#f1c40f" : "inherit";
    // This calls the logic in main.js
    pinBtn.onclick = () => onTogglePin(it._id, !it.pinned);

    // Discard Button
    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.textContent = "Discard";
    delBtn.onclick = () => onDelete(it._id);

    // ... append others ...
    row.append(name, pinBtn, delBtn); 
    listEl.appendChild(row);
  });
}