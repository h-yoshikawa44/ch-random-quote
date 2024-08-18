import { getRandomQuote } from './quoteApi.js';

const authorName = document.getElementById('author-name');
const tagList = document.getElementById('tag-list');
const quoteText = document.getElementById('quote-text');
const quoteChangeButton = document.getElementById('quote-change-button');

document.addEventListener('DOMContentLoaded', async () => {
  const createTagElementList = (tagList) => {
    return tagList.map((tag) => {
      const tagElement = document.createElement('span');
      tagElement.classList.add('quote-card__tag');
      tagElement.textContent = tag;
      return tagElement;
    });
  };

  const setRandomQuote = async () => {
    const quoteInfo = await getRandomQuote();

    authorName.textContent = quoteInfo.author;
    tagList.innerHTML = '';
    tagList.append(...createTagElementList(quoteInfo.tags));
    // 疑似要素で前後に引用符をつけるとスペースが空くので、テキストに直接付与している
    quoteText.textContent = `“${quoteInfo.content}”`;
  };

  setRandomQuote();
  quoteChangeButton.addEventListener('click', setRandomQuote);
});
