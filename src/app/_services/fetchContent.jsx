export async function contentFetch() {
  const API_URL = process.env.API_URL;
  const response = await fetch(API_URL, { cache: 'no-store' }); // Disable caching for fresh data
  if (!response.ok) throw new Error('Failed to fetch data');
  const data = await response.json();
  return data;
};
