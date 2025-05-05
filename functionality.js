window.onload = function() {
    const hero = document.querySelector('.hero-section');
    if (hero) {
        hero.scrollIntoView({ behavior: 'smooth' });
    }
};

const drawer = document.getElementById('side-drawer');
const button = document.getElementById('drawer-toggle');
const hero = document.querySelector('.hero-section'); // moved here for reuse

if (button && drawer) {
    button.onclick = () => drawer.classList.toggle('open');
}

if (hero) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Move background up as user scrolls down
        const bgPositionY = Math.min(scrollY / 3, hero.offsetHeight);

        hero.style.backgroundPosition = `center -${bgPositionY}px`;
    });
}

