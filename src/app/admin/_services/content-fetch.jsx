export const contentFetch = async () => {
  const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(NEXT_PUBLIC_API_URL, { cache: 'no-store' }); // Disable caching for fresh data
  if (!response.ok) throw new Error('Failed to fetch data');
  const { data } = await response.json();
  return data;
};
