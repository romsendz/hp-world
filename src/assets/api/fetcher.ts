const BASE_URL = `https://potterapi-fedeperin.vercel.app`;

const fetcher = async (url: string, options?: RequestInit) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }
  return response.json();
};

export default fetcher;
