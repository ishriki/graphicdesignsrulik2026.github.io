const filters = document.querySelector('.filters');
const buttons = [...filters.querySelectorAll('button')];
const pieces = [...document.querySelectorAll('[data-category]')];
const resultCount = document.querySelector('#result-count');

filters.hidden = false;
resultCount.textContent = `${pieces.length} pieces`;

filters.addEventListener('click', (event) => {
  const selected = event.target.closest('button[data-filter]');
  if (!selected) return;

  for (const button of buttons) {
    button.setAttribute('aria-pressed', String(button === selected));
  }

  let count = 0;
  for (const piece of pieces) {
    piece.hidden = selected.dataset.filter !== 'all' && piece.dataset.category !== selected.dataset.filter;
    if (piece.hidden) {
      piece.querySelector('video')?.pause();
    } else {
      count++;
    }
  }

  resultCount.textContent = `${count} ${count === 1 ? 'piece' : 'pieces'}`;
});
