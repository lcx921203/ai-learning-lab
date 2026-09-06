(() => {
  const tabs = document.querySelectorAll('.mode-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(item => item.classList.remove('is-active'));
      tab.classList.add('is-active');
    });
  });

  document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', e => e.preventDefault());
  });

  const aiButton = document.querySelector('.nav-ai');
  const aiCard = document.querySelector('.ai-card');
  if (aiButton && aiCard) {
    aiButton.addEventListener('click', () => {
      aiCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
})();
