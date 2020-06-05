document.addEventListener('DOMContentLoaded', () => {

   const menuBtn = document.querySelector('.js-menu');
   const menu = document.querySelector('.js-navigation-bar');

   menuBtn.addEventListener('click', () => menu.classList.toggle('active'));

})