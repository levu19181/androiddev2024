window.addEventListener("scroll", function() {
    const aboutText = document.querySelector('.about-text');
    const sectionPos = aboutText.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos) {
        aboutText.classList.add('visible');
    }
});