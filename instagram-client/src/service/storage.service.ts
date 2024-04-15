const TOKEN = "TOKEN";
const REFRESH_TOKEN = "REFRESH_TOKEN";

export function setToken(value: string) {
  if (typeof window === "undefined") return "";
  localStorage.setItem(TOKEN, JSON.stringify(value));
}

export function getToken() {
  if (typeof window === "undefined") return "";
  const token: string = localStorage.getItem(TOKEN) || "";
  if (!token || token === "undefined") return "";
  return JSON.parse(token);
}

export function removeToken() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(TOKEN);
}

export function setRefreshToken(value: any) {
  if (typeof window === "undefined") return "";
  localStorage.setItem(REFRESH_TOKEN, JSON.stringify(value));
}

export function getRefreshToken() {
  if (typeof window === "undefined") return "";
  const token: string = localStorage.getItem(REFRESH_TOKEN) || "";
  if (!token || token === "undefined") return "";
  return JSON.parse(token);
}

export function removeRefreshToken() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(REFRESH_TOKEN);
}

export function removeAllStorage() {
  if (typeof window === "undefined") return;
  localStorage.clear();
}
