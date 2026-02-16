import { getStoredToken } from "./session.js";

export async function apiFetch(url, options = {}) {
    const token = getStoredToken();
    
    const defaultHeaders = {
        "Content-Type": "application/json",
        "X-Owner-Id": token
    };

    const config = {
        ...options,
        headers: { ...defaultHeaders, ...options.headers }
    };

    if (config.body && typeof config.body === "object") {
        config.body = JSON.stringify(config.body);
    }

    const resp = await fetch(url, config);
    const json = await resp.json();

    if (resp.status >= 400) {
        throw new Error(json.message || json.error || `Server error: ${resp.status}`);
    }
    
    return json;
}