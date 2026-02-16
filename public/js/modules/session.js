import { apiFetch } from "./apiClient.js";

const KEY = "save_token_v1";

export function generateToken() {
    const segment = () => Math.random().toString(36).substring(2, 6).toUpperCase();
    return `CRYO-${segment()}-${segment()}`;
}

export function getStoredToken() {
    return localStorage.getItem('playerToken');
}

export function saveToken(token) {
    localStorage.setItem('playerToken', token);
}

// export function ensureToken() {
//     let token = getStoredToken();
//     if (!token) {
//         token = generateToken();
//         saveToken(token);
//     }
//     return token;
// }

export async function ensureOwnerId() {
    const token = getStoredToken();
    if (!token) {
        window.location.href = 'index.html';
        return null;
    }
    return token;
}

export function getOwnerId() {
  return localStorage.getItem(KEY);
}

export function setOwnerId(token) {
  localStorage.setItem(KEY, token);
}