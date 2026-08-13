import axios from "axios";

// Typed API client for TemplateApp.
export const api = axios.create({
  baseURL: "/api", // tpl:var api_base /api
});

export async function getJSON<T>(path: string): Promise<T> {
  const res = await api.get<T>(path);
  return res.data;
}

export async function postJSON<T, B>(path: string, body: B): Promise<T> {
  const res = await api.post<T>(path, body);
  return res.data;
}
