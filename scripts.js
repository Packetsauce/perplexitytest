document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const settingsBtn = document.getElementById('settingsBtn');
    const loginModal = document.getElementById('loginModal');
    const settingsModal = document.getElementById('settingsModal');
    const closeBtns = document.getElementsByClassName('close');
    const themeToggle = document.getElementById('themeToggle');

    // Login modal
    loginBtn.onclick = function() {
        loginModal.style.display = "block";
    }

    // Settings modal
    settingsBtn.onclick = function() {
        settingsModal.style.display = "block";
    }

    // Close modals
    for (let closeBtn of closeBtns) {
        closeBtn.onclick = function() {
            loginModal.style.display = "none";
            settingsModal.style.display = "none";
        }
    }

    // Close modals when clicking outside
    window.onclick = function(event) {
        if (event.target == loginModal || event.target == settingsModal) {
            loginModal.style.display = "none";
            settingsModal.style.display = "none";
        }
    }

    // Theme toggle
    themeToggle.onchange = function() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', themeToggle.checked);
    }

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // Login form handling
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Login functionality would be implemented here.');
        loginForm.reset();
        loginModal.style.display = "none";
    });
});
