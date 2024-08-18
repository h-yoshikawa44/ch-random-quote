const copyButton = document.getElementById('copy-button');
const quoteText = document.getElementById('quote-text');

document.addEventListener('DOMContentLoaded', () => {
  const copyQuote = async () => {
    const extractQuoteText = quoteText.innerText
      .replace(/“/i, '')
      .replace(/”/i, '');

    if (!quoteText) return;

    await navigator.clipboard.writeText(extractQuoteText);
    alert('quote copied!');
  };

  copyButton.addEventListener('click', copyQuote);
});
