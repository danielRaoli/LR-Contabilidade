const intersectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("animate", entry.isIntersecting)
    })
});

const elements = document.querySelectorAll('[data-anime]')

elements.forEach(el => intersectObserver.observe(el))