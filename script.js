const themeToggle = document.getElementById('themeToggle');
const body = document.body;
if(localStorage.getItem('theme') === 'dark') {
    body.setAttribute('data-theme','dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}
themeToggle.addEventListener('click', () => {
    if(body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme','light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

const sections = document.querySelectorAll('.section');
const skillBars = document.querySelectorAll('.skill-progress');
window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100) {
            sec.classList.add('visible');
        }
    });
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if(rect.top < window.innerHeight - 50 && bar.style.width === '') {
            bar.style.width = bar.getAttribute('data-width');
        }
    });
});
