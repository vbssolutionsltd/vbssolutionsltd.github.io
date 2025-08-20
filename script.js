
// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
      // close mobile menu
      ul.classList.remove('open');
    }
  });
});

// Mobile menu toggle
const btn = document.getElementById('menuBtn');
const ul = document.querySelector('nav ul');
btn?.addEventListener('click', () => ul.classList.toggle('open'));

// Simple lightbox for gallery
document.querySelectorAll('.tile img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.9);display:grid;place-items:center;z-index:1000;';
    const big = document.createElement('img');
    big.src = img.src;
    big.style.cssText = 'max-width:90vw;max-height:84vh;box-shadow:0 10px 30px rgba(0,0,0,.6);border-radius:12px';
    overlay.appendChild(big);
    overlay.addEventListener('click', () => overlay.remove());
    document.body.appendChild(overlay);
  });
});
