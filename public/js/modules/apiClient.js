export async function apiFetch(path, { method = "GET", ownerId, body } = {}) {
  const headers = {};
  if (ownerId) headers["X-Owner-Id"] = ownerId;
  if (body) headers["Content-Type"] = "application/json";

  const res = await fetch(path, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.ok === false) {
    throw new Error(data.error || `Request failed: ${res.status}`);
  }
  return data;
}