const baseUrl = "https://dummyjson.com";

export const GET = async (endpoint) => {
  const res = await fetch(`${baseUrl}${endpoint}`);
  const data = await res.json();

  return data;
};
