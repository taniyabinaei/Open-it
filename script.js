const envelope = document.getElementById('envelope');
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
const screen3 = document.getElementById('screen3');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

function goToScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

envelope.addEventListener('click', () => {
    goToScreen(screen2);
});

function moveNoButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 40;
    const maxY = window.innerHeight - noBtn.offsetHeight - 40;

    noBtn.style.position = 'fixed';
    noBtn.style.left = (Math.random() * maxX) + 'px';
    noBtn.style.top = (Math.random() * maxY) + 'px';
    noBtn.style.transform = 'rotate(' + (Math.random() * 40 - 20) + 'deg)';
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

yesBtn.addEventListener('click', () => {
    noBtn.style.position = 'relative';
    noBtn.style.left = 'auto';
    noBtn.style.top = 'auto';
    noBtn.style.transform = 'none';

    goToScreen(screen3);
});
