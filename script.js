// Smooth scrolling untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Alert sederhana saat klik menu (opsional)
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        alert('Pesan menu ini sekarang!');
    });
});