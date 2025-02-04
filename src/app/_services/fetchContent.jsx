export async function contentFetch() {
  const API_URL = process.env.API_URL;
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};
