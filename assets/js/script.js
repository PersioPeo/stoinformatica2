/*Menu-Humburguer*/
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelectorAll('.nav-bg');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});


/* Banner */

const banner = document.getElementsByClassName('banner')[0];
const blocks = document.getElementsByClassName('blocks');
for (var i = 1; i < 400; i++) {
    banner.innerHTML += "<div class='blocks'></div>";
    const duration = Math.random() * 3;
    blocks[i].style.animationDuration = 2 + duration + 's';
    blocks[i].style.animationDelay = duration + 's';
}


const section = document.querySelector('section');
setTimeout(() => {
    section.classList.add('active');
},14000) // add class active after 14s