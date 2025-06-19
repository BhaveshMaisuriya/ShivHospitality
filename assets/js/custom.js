// header page active class 
// * Mobile nav toggle
$(document).ready(function () {
const mobileNavToggleBtn = document.querySelector('.navbar-toggler');
function mobileNavToogle() {
document.querySelector('body').classList.toggle('mobile-nav-active');
document.querySelector('.navbar-mega').classList.toggle('active');
document.querySelector('header').classList.toggle('active');
mobileNavToggleBtn.classList.toggle('li-list');
mobileNavToggleBtn.classList.toggle('nav-on');
}
mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
document.querySelectorAll('ul.navbar-nav li a').forEach(navmenu => {
navmenu.addEventListener('click', function (e) {
if (document.querySelector('.mobile-nav-active')) {
// e.preventDefault();
this.parentNode.classList.toggle('active');
// this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
e.stopImmediatePropagation();
}
});
});
});
$(window).scroll(function(){
if ($(this).scrollTop() > 50) {
$('.defult-home').addClass('newClass');
} else {
$('.defult-home').removeClass('newClass');
}
});