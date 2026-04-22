import { api } from "./instance.api";

export const getProducts = async () => {
  const res = await fetch(api, {
    next: { revalidate: 300 }
  });
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
};