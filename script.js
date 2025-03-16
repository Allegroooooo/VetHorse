// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Services data
const services = [
    {
        title: "Диагностика",
        description: "Комплексное обследование и современные методы диагностики"
    },
    {
        title: "Лечение",
        description: "Терапевтическое и хирургическое лечение различных заболеваний"
    },
    {
        title: "Профилактика",
        description: "Вакцинация и профилактические осмотры"
    },
    {
        title: "Стоматология",
        description: "Уход за зубами и лечение стоматологических заболеваний"
    },
    {
        title: "Ортопедия",
        description: "Лечение заболеваний опорно-двигательного аппарата"
    },
    {
        title: "Консультации",
        description: "Профессиональные консультации по уходу и содержанию"
    }
];

// Populate services
const servicesGrid = document.getElementById('servicesGrid');
services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.className = 'service-card';
    serviceCard.innerHTML = `
        <h3>${service.title}</h3>
        <p>${service.description}</p>
    `;
    servicesGrid.appendChild(serviceCard);
});

// Form submission
const appointmentForm = document.getElementById('appointmentForm');
appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(appointmentForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    appointmentForm.reset();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".scroll-down").addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector("#services").scrollIntoView({ behavior: "smooth", block: "start" });
    });
});
