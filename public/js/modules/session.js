import { apiFetch } from "./apiClient.js";

const KEY = "save_token_v1";

export async function ensureOwnerId() {
  let token = localStorage.getItem(KEY);
  if (token) return token;

  const data = await fetch("/api/session/new", { method: "POST" }).then((r) => r.json());
  if (!data?.ok || !data?.token) throw new Error("Failed to create session token");

  token = data.token;
  localStorage.setItem(KEY, token);
  return token;
}

export function getOwnerId() {
  return localStorage.getItem(KEY);
}

export function setOwnerId(token) {
  localStorage.setItem(KEY, token);
}