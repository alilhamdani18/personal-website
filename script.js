const switchToggle = document.getElementById('switchToggle');
const check = document.getElementById('check')
const hero = document.querySelector('.hero')

check.addEventListener('click', function() {
  document.body.classList.toggle('dark')
})

switchToggle.addEventListener('click', function() {
  hero.classList.toggle('dark');
})