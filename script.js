// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      // close mobile menu
      ul.classList.remove('open');
    }
  });
});

// Mobile menu toggle
const btn = document.getElementById('menuBtn');
const ul = document.querySelector('nav ul');
btn?.addEventListener('click', () => ul.classList.toggle('open'));

// Lightbox with navigation
const gallery = document.querySelectorAll('.tile img');
let currentIndex = 0;

gallery.forEach((img, i) => {
  img.addEventListener('click', () => openLightbox(i));
});

function openLightbox(index) {
  currentIndex = index;

  // overlay container
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.style.cssText = `
    position:fixed;inset:0;background:rgba(0,0,0,.9);
    display:flex;align-items:center;justify-content:center;
    z-index:1000;
  `;

  // image
  const big = document.createElement('img');
  big.src = gallery[currentIndex].src;
  big.style.cssText = 'max-width:90vw;max-height:84vh;box-shadow:0 10px 30px rgba(0,0,0,.6);border-radius:12px';
  overlay.appendChild(big);

  // close button
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&times;';
  closeBtn.style.cssText = `
    position:absolute;top:20px;right:30px;
    font-size:2rem;color:white;background:none;border:none;cursor:pointer;
  `;
  closeBtn.addEventListener('click', () => overlay.remove());
  overlay.appendChild(closeBtn);

  // prev button
  const prevBtn = document.createElement('button');
  prevBtn.innerHTML = '&#10094;';
  prevBtn.style.cssText = `
    position:absolute;left:5%;top:50%;transform:translateY(-50%);
    font-size:2rem;color:white;background:none;border:none;cursor:pointer;
  `;
  prevBtn.addEventListener('click', e => {
    e.stopPropagation();
    showImage(--currentIndex, big);
  });
  overlay.appendChild(prevBtn);

  // next button
  const nextBtn = document.createElement('button');
  nextBtn.innerHTML = '&#10095;';
  nextBtn.style.cssText = `
    position:absolute;right:5%;top:50%;transform:translateY(-50%);
    font-size:2rem;color:white;background:none;border:none;cursor:pointer;
  `;
  nextBtn.addEventListener('click', e => {
    e.stopPropagation();
    showImage(++currentIndex, big);
  });
  overlay.appendChild(nextBtn);

  // close if background clicked
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.remove();
  });

  // keyboard navigation
  function keyHandler(e) {
    if (!document.body.contains(overlay)) {
      document.removeEventListener('keydown', keyHandler);
      return;
    }
    if (e.key === 'Escape') overlay.remove();
    if (e.key === 'ArrowRight') showImage(++currentIndex, big);
    if (e.key === 'ArrowLeft') showImage(--currentIndex, big);
  }
  document.addEventListener('keydown', keyHandler);

  document.body.appendChild(overlay);
}

function showImage(index, imgElement) {
  if (index < 0) index = gallery.length - 1;
  if (index >= gallery.length) index = 0;
  currentIndex = index;
  imgElement.src = gallery[currentIndex].src;
}
