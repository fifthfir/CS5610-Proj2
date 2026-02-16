import { apiFetch } from "/js/modules/apiClient.js";

export async function loadNotes(ownerId) {
  const resp = await apiFetch("/api/notes", { ownerId });
  return resp.data;
}

export async function createNote(ownerId, text, source = "story") {
  const resp = await apiFetch("/api/notes", { method: "POST", ownerId, body: { text, source } });
  return resp.data;
}

export async function updateNote(ownerId, id, text) {
  const resp = await apiFetch(`/api/notes/${id}`, { method: "PUT", ownerId, body: { text } });
  return resp.data;
}

export async function deleteNote(ownerId, id) {
  await apiFetch(`/api/notes/${id}`, { method: "DELETE", ownerId });
}

export function renderNotes(listEl, notes, { onEdit, onDelete }) {
  listEl.innerHTML = "";
  if (!notes.length) {
    listEl.innerHTML = `<div class="empty">No notes yet.</div>`;
    return;
  }

  notes.forEach((n) => {
    const row = document.createElement("div");
    row.className = "row"; 
    const input = document.createElement("input");
    input.value = n.text;
    input.className = "row-input";

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.className = "btn-save";
    saveBtn.onclick = () => onEdit(n._id, input.value);

    const delBtn = document.createElement("button");
    delBtn.textContent = "Del"; 
    delBtn.className = "btn-del";
    delBtn.onclick = () => onDelete(n._id);

    row.append(input, saveBtn, delBtn); 
    listEl.appendChild(row);
  });
}