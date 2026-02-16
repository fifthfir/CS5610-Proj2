import { apiFetch } from "/js/modules/apiClient.js";

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
  if (!items.length) {
    listEl.innerHTML = `<div class="empty">No items yet.</div>`;
    return;
  }

  items.forEach((it) => {
    const row = document.createElement("div");
    row.className = "row";

    const name = document.createElement("div");
    name.className = "inv-name";
    name.textContent = it.name;

    const inspectBtn = document.createElement("button");
    inspectBtn.type = "button";
    inspectBtn.textContent = it.inspected ? "Inspected ✓" : "Inspect";
    inspectBtn.addEventListener("click", () => onToggleInspect(it._id, !it.inspected));

    const pinBtn = document.createElement("button");
    pinBtn.type = "button";
    pinBtn.textContent = it.pinned ? "Pinned ★" : "Pin";
    pinBtn.addEventListener("click", () => onTogglePin(it._id, !it.pinned));

    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.textContent = "Discard";
    delBtn.addEventListener("click", () => onDelete(it._id));

    row.appendChild(name);
    row.appendChild(inspectBtn);
    row.appendChild(pinBtn);
    row.appendChild(delBtn);

    listEl.appendChild(row);
  });


}

