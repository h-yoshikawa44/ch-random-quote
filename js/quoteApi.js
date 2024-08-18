const API_URL = 'https://api.quotable.io';

export const getRandomQuote = async () => {
  try {
    const response = await fetch(`${API_URL}/random`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
};
