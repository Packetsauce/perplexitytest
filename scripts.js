document.addEventListener('DOMContentLoaded', function() {
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
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! In a real-world scenario, this form would submit data to a server.');
        form.reset();
    });

    // Accordion functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        item.querySelector('h3').addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Scroll animation for feature items
    const featureItems = document.querySelectorAll('.feature-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });

    featureItems.forEach(item => {
        observer.observe(item);
    });

    // Chart.js implementation
    const ctx = document.getElementById('trendChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'AI and Machine Learning',
                data: [65, 70, 80, 85, 90, 95],
                borderColor: '#007BFF',
                tension: 0.1
            }, {
                label: 'Cybersecurity',
                data: [70, 75, 82, 88, 92, 96],
                borderColor: '#1E90FF',
                tension: 0.1
            }, {
                label: 'Cloud Computing',
                data: [60, 68, 78, 85, 90, 94],
                borderColor: '#0056B3',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
});
