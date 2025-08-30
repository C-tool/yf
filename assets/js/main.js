
(function(){
  const toggle = document.querySelector('#modeToggle');
  if(toggle){
    toggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('light');
    });
  }
  const search = document.querySelector('input[type="search"]');
  if(search){
    search.addEventListener('input', () => {
      const q = search.value.toLowerCase();
      for(const card of document.querySelectorAll('.post-card')){
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(q) ? '' : 'none';
      }
    });
  }
})();
