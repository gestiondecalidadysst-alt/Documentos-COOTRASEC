// Dark mode toggle
const darkBtn = document.getElementById('darkModeBtn');
if(darkBtn){
  darkBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    // save preference
    try{ localStorage.setItem('cootrasec_dark', document.body.classList.contains('dark')? '1' : '0'); }catch(e){}
  });
  // on load restore
  try{
    if(localStorage.getItem('cootrasec_dark') === '1') document.body.classList.add('dark');
  }catch(e){}
}

// Simple search
const searchInput = document.getElementById('searchInput');
if(searchInput){
  searchInput.addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const items = document.querySelectorAll('.doc-list li');
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(filter) ? 'block' : 'none';
    });
  });
}

console.log('COOTRASEC — Sitio cargado');