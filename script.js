document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconBars = document.getElementById('icon-bars');
  const iconClose = document.getElementById('icon-close');
  const navLinks = document.querySelectorAll('.nav-link');

  // 1. Fungsi Klik Hamburger Menu
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
      iconBars.classList.toggle('hidden');
      iconClose.classList.toggle('hidden');
    });
  }

  // 2. Fungsi Tanda Page Aktif
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Hilangkan tanda aktif dari semua link
      navLinks.forEach(nav => {
        nav.classList.remove('border-maroon');
        nav.classList.add('border-transparent');
      });

      // Beri tanda garis bawah pada link yang baru diklik (Khusus Mobile)
      this.classList.remove('border-transparent');
      this.classList.add('border-maroon');

      // Tutup menu otomatis jika dibuka di HP
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        iconBars.classList.remove('hidden');
        iconClose.classList.add('hidden');
      }
    });
  });
});