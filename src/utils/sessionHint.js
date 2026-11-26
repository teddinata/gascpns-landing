// Reads the display-only marker app.gascpns.id writes on .gascpns.id; the token itself never leaves the app.
export function readSessionHint(cookie = typeof document === "undefined" ? "" : document.cookie) {
  const raw = cookie.split("; ").find((c) => c.startsWith("gascpns_hint="));
  if (!raw) return null;
  try {
    const data = JSON.parse(decodeURIComponent(raw.slice("gascpns_hint=".length)));
    const name = typeof data?.n === "string" ? data.n.trim() : "";
    if (!name) return null;
    return { name, role: data.r === "admin" ? "admin" : "user" };
  } catch {
    return null;
  }
}

export const dashboardUrl = (hint) =>
  `https://app.gascpns.id/${hint?.role === "admin" ? "admin" : "member"}/dashboard`;
