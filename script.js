// simple text marquee effect
window.addEventListener('DOMContentLoaded', () => {
  const marquee = document.querySelector('.marquee');
  if (marquee) {
    const text = marquee.innerText;
    marquee.innerHTML = `<span>${text}</span>`;
    const span = marquee.querySelector('span');
    span.style.paddingLeft = '100%';
    span.style.display = 'inline-block';
    span.animate([
      { transform: 'translateX(0)' },
      { transform: 'translateX(-100%)' }
    ], {
      duration: 15000,
      iterations: Infinity
    });
  }
});
