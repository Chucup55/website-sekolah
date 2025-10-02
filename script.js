document.addEventListener('DOMContentLoaded', function() {
    // 1. Ambil elemen yang diperlukan dari DOM
    const menuToggleButton = document.querySelector('.menu-toggle'); 
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggleButton && mainNav) {
        // 2. Tambahkan event listener untuk klik tombol menu
        menuToggleButton.addEventListener('click', function() {
            // Toggle (tambah/hapus) kelas 'open' pada elemen navigasi
            mainNav.classList.toggle('open');
            
            // Atur atribut ARIA (Aksesibilitas)
            const isExpanded = menuToggleButton.getAttribute('aria-expanded') === 'true';
            menuToggleButton.setAttribute('aria-expanded', !isExpanded);
        });

        // 3. Opsional: Tutup menu saat link navigasi diklik (berguna di mobile)
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Hanya tutup jika menu sedang terbuka dan layarnya kecil (di bawah 992px)
                if (mainNav.classList.contains('open') && window.innerWidth <= 992) {
                    mainNav.classList.remove('open');
                    menuToggleButton.setAttribute('aria-expanded', 'false');
                }
            });
        });
    } else {
        console.error("Elemen 'menu-toggle' atau 'main-nav' tidak ditemukan di HTML.");
    }
});