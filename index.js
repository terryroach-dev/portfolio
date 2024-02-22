const hambuger = document.querySelector('.hamburger');
const navToggle = document.querySelector('.nav-toggle')
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener("click", () => {
    navList.classList.toggle('nav-open');
    navToggle.classList.toggle('nav-open');
    hambuger.classList.toggle('nav-open');
});
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('nav-open');
        navToggle.classList.toggle('nav-open');
        hambuger.classList.toggle('nav-open');
    });
});

(function () {
    const classes = document.body.classList;
    let timer = null;
    window.addEventListener('resize', function () {
      if (timer){
        clearTimeout(timer);
        timer = null;
      } else {
        classes.add('stop-transition');
      }
      timer = setTimeout(() => {
        classes.remove('stop-transition');
        timer = null;
      }, 100);
    });
  })();