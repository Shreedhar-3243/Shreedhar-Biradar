// Simple interaction to highlight nav links on hover
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = 'orange';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = 'white';
    });
});
document.querySelector('.start-btn').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Let\'s start working together!');
});

document.querySelector('.email-btn').addEventListener('click', () => {
    window.location.href = 'mailto:shreedharbiradar7@gmail.com';
});
document.addEventListener("DOMContentLoaded", function() {
    var aboutContainer = document.querySelector('.about-container');
    if (aboutContainer) {
        aboutContainer.style.borderRadius = "18px";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var serviceBoxes = document.querySelectorAll('.service-box');
    serviceBoxes.forEach(function(box) {
        box.addEventListener('click', function() {
            alert('You clicked on: ' + box.querySelector('h2').textContent);
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var skillBoxes = document.querySelectorAll('.skill-box');
    skillBoxes.forEach(function(box) {
        box.addEventListener('click', function() {
            alert('Skill: ' + box.getAttribute('data-skill'));
        });
    });

    // Animate skill bars
    var skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(function(level) {
        var width = level.style.width;
        level.style.width = '0';
        setTimeout(function() {
            level.style.width = width;
        }, 200);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var name = document.getElementById('name')?.value.trim();
            var lastName = document.getElementById('last-name')?.value.trim();
            var phone = document.getElementById('phone')?.value.trim();
            var address = document.getElementById('address')?.value.trim();
            var email = document.getElementById('email')?.value.trim();
            var message = document.getElementById('message')?.value.trim();

            if (!name || !lastName || !phone || !address || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            // Simulate sending (no backend)
            alert('Thank you, ' + name + '! Your message has been sent.');
            form.reset();
        });
    }
});
