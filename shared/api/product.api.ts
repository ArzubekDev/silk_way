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

// Сүрөт аркылуу издөө функциясы
export const getSearchByImage = async (file: File) => {
  const formData = new FormData();
  formData.append('image', file); // 'image' — backend күтүп жаткан ачкыч

  const res = await fetch(`${api}/search-by-image`, {
    method: 'POST',
    body: formData, // FormData жиберилгенде fetch 'Content-Type'ти өзү жөндөйт
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Image search failed');
  return res.json();
};