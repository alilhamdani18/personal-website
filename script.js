const check = document.querySelector('.checkbox');
const navbar = document.getElementById('navbar')
const footer = document.querySelector('footer');
const descHero = document.querySelectorAll('.desc h6');
const cardText = document.querySelectorAll('.card-text');

check.addEventListener('click', function () {
  document.body.classList.toggle('dark');
  navbar.classList.toggle('dark')
  descHero.forEach(element => {
    element.classList.toggle('dark-text')
  });
  cardText.forEach(element => {
    element.classList.toggle('dark-text')
  });
  footer.classList.toggle('dark-secondary');
});
