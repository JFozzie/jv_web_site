// Alternar entre dos imágenes de fondo con transición suave
let isBg1Visible = true;
setInterval(() => {
  const bg1 = document.getElementById('header-bg-1');
  const bg2 = document.getElementById('header-bg-2');
  if (isBg1Visible) {
    bg1.classList.remove('opacity-100');
    bg1.classList.add('opacity-0');
    bg2.classList.remove('opacity-0');
    bg2.classList.add('opacity-100');
  } else {
    bg1.classList.remove('opacity-0');
    bg1.classList.add('opacity-100');
    bg2.classList.remove('opacity-100');
    bg2.classList.add('opacity-0');
  }
  isBg1Visible = !isBg1Visible;
}, 5000); // Cambia cada 10 segundos