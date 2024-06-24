let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let scrollPosition = window.scrollY;

    sections.forEach(section => {
        let sectionTop = section.offsetTop - 50; 
        let sectionHeight = section.offsetHeight;
        let sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(sectionId)) {
                    link.classList.add('active');
                }
            });
        }
    });
    let footer = document.getElementById('footer');
    if (scrollPosition + window.innerHeight >= footer.offsetTop) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector('header nav a[href="#contact"]').classList.add('active');
    }
};