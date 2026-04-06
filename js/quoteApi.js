const API_URL = 'https://quote-slate-theta.vercel.app/api';

export const getRandomQuote = async () => {
  try {
    const response = await fetch(`${API_URL}/quotes/random`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
};
