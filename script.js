document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        nav.classList.toggle('nav-scroll', window.scrollY > 0);
    });
});
