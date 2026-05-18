document.addEventListener('DOMContentLoaded', function() {
    createParticles();
});

// دالة تكرار وظهور القلوب والفراشات في الخلفية بشكل عشوائي
function createParticles() {
    const container = document.getElementById('particles');
    const particleEmojis = ['❤️', '💖', '✨', '🌸', '🦋'];
    
    for (let i = 0; i < 35; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.innerHTML = particleEmojis[Math.floor(Math.random() * particleEmojis.length)];
        
        // إحداثيات عشوائية على الشاشة
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // توقيت عشوائي للحركة لتبدو طبيعية
        particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(particle);
    }
}

// دالة الانتقال السلس عند الضغط على الزر
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// دالة زر الإعجاب (Like) للصور
function toggleLike(button) {
    button.classList.toggle('liked');
    const heartIcon = button.querySelector('.heart-icon');
    if (button.classList.contains('liked')) {
        heartIcon.style.transform = 'scale(1.3)';
        heartIcon.style.color = '#ff4757';
    } else {
        heartIcon.style.transform = 'scale(1)';
        heartIcon.style.color = 'white';
    }
}