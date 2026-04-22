import { api } from "./instance.api";

export const getProducts = async () => {
  const res = await fetch(api, {
    next: { revalidate: 300 }
  });
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
};

export const getSearchProducts = async (query: string) => {
  const res = await fetch(`${api}/search?query=${query}`, {
    cache: 'no-store' // Издөө натыйжалары дайыма жаңы болушу керек
  });
  if (!res.ok) throw new Error('Search failed');
  return res.json();
};