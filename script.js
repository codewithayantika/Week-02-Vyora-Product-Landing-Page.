const cartCount = document.getElementById('cartCount');
const toast = document.getElementById('toast');
let count = 0;
let toastTimer;
function showToast(message){
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>toast.classList.remove('show'), 2400);
}
document.querySelectorAll('[data-add]').forEach(button=>{
  button.addEventListener('click',()=>{
    count += 1;
    cartCount.textContent = count;
    showToast(`${button.dataset.add} added to your demo cart!`);
  });
});
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click',()=>{
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
mainNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded','false');
}));
document.getElementById('newsletterForm').addEventListener('submit',event=>{
  event.preventDefault();
  const email = event.currentTarget.querySelector('input').value.trim();
  document.getElementById('newsletterMessage').textContent = email ? 'Thanks for joining the VYORA list! (Demo only)' : '';
  event.currentTarget.reset();
});
