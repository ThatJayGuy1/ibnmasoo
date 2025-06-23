// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const year = new Date().getFullYear();
    document.getElementById('current-year').textContent = year;
    
    // Mobile menu toggle
    const menuToggle = document.createElement('div');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('header .container').appendChild(menuToggle);
    
    const nav = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.style.display = 'none';
            }
        });
    });
    
    // Responsive menu
    function handleResize() {
        if (window.innerWidth > 768) {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    }
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(form);
            const formName = form.getAttribute('name') || 'form';
            
            // Here you would typically send the data to your server
            // For this example, we'll just show an alert
            alert(`Thank you for submitting the ${formName}. We'll contact you soon!`);
            form.reset();
        });
    });
});