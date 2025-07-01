export function Header() {
  return `
    <header class="bg-white shadow-md sticky top-0 z-50">
      <nav class="container-custom flex items-center justify-between py-3 md:py-4">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <span class="text-lg md:text-2xl font-extrabold text-gray-900">The<span class="text-blue-500">Hyper</span>Chamber</span>
        </div>
        <!-- Desktop Nav -->
        <ul class="hidden md:flex items-center space-x-4 md:space-x-8 text-sm md:text-base font-medium">
          <li><a href="#benefits" class="hover:text-blue-500 transition">Benefits</a></li>
          <li><a href="#how" class="hover:text-blue-500 transition">How It Works</a></li>
          <li><a href="#testimonials" class="hover:text-blue-500 transition">Testimonials</a></li>
          <li><a href="#pricing" class="hover:text-blue-500 transition">Pricing</a></li>
          <li><a href="#contact" class="hover:text-blue-500 transition">Contact</a></li>
        </ul>
        <!-- Phone & Book Now -->
        <div class="hidden md:flex items-center gap-4 ml-6">
          <a href="tel:8012100151" class="flex items-center text-blue-500 font-semibold hover:underline text-xs md:text-base px-3 py-2 rounded-lg hover:bg-blue-50 transition">
            <svg class="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13 1.13.37 2.22.72 3.26a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.04.35 2.13.59 3.26.72A2 2 0 0 1 22 16.92z"/></svg>
            801-210-0151
          </a>
          <a href="https://book.squareup.com/appointments/bgourqv8i2d4ot/location/LET2173VFX05E/services" target="_blank" rel="noopener noreferrer" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-5 rounded-lg shadow transition text-xs md:text-base">Book Now</a>
        </div>
        <!-- Mobile menu button -->
        <button id="mobile-menu-button" class="md:hidden text-gray-700 hover:text-blue-500 focus:outline-none p-2 rounded-lg transition">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>
      <!-- Modern Mobile Nav Overlay -->
      <div id="mobile-menu" class="fixed inset-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm hidden flex-col justify-center items-center transition-all duration-300">
        <button id="close-mobile-menu" class="absolute top-6 right-6 text-gray-700 hover:text-blue-500 p-2 rounded-full focus:outline-none">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <ul class="flex flex-col space-y-6 text-2xl font-semibold text-center mt-12">
          <li><a href="#benefits" class="hover:text-blue-500 transition">Benefits</a></li>
          <li><a href="#how" class="hover:text-blue-500 transition">How It Works</a></li>
          <li><a href="#testimonials" class="hover:text-blue-500 transition">Testimonials</a></li>
          <li><a href="#pricing" class="hover:text-blue-500 transition">Pricing</a></li>
          <li><a href="#contact" class="hover:text-blue-500 transition">Contact</a></li>
          <li><a href="tel:8012100151" class="flex items-center justify-center text-blue-500 font-semibold hover:underline text-lg"><svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13 1.13.37 2.22.72 3.26a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.04.35 2.13.59 3.26.72A2 2 0 0 1 22 16.92z"/></svg>801-210-0151</a></li>
          <li><a href="https://book.squareup.com/appointments/bgourqv8i2d4ot/location/LET2173VFX05E/services" target="_blank" rel="noopener noreferrer" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl shadow transition text-lg">Book Now</a></li>
        </ul>
      </div>
      <script>
        // Attach event listeners immediately for mobile menu
        (function() {
          function closeMenu() {
            var menu = document.getElementById('mobile-menu');
            if (menu) menu.classList.add('hidden');
          }
          var menuBtn = document.getElementById('mobile-menu-button');
          var menu = document.getElementById('mobile-menu');
          var closeBtn = document.getElementById('close-mobile-menu');
          if (menuBtn && menu) {
            menuBtn.onclick = function() { menu.classList.remove('hidden'); };
          }
          if (closeBtn && menu) {
            closeBtn.onclick = closeMenu;
          }
          if (menu) {
            var links = menu.querySelectorAll('a');
            links.forEach(function(link) {
              link.onclick = closeMenu;
            });
          }
        })();
      </script>
    </header>
  `
} 