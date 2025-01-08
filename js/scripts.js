document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('scrollToTopBtn').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    window.addEventListener('scroll', () => {
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');    
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
});