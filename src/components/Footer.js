export function Footer() {
  return `
    <footer class="bg-gray-900 text-white py-6 md:py-12">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          <!-- Company Info -->
          <div class="md:col-span-2 text-center md:text-left">
            <h3 class="text-lg md:text-2xl font-bold mb-2 md:mb-4">The Hyper Chamber</h3>
            <p class="text-gray-300 mb-3 md:mb-6 max-w-md mx-auto md:mx-0 text-sm md:text-base">
              Your premier destination for advanced wellness and performance optimization. 
              Experience cutting-edge therapies designed to enhance your mind, body, and spirit.
            </p>
            <div class="flex justify-center md:justify-start space-x-4">
              <a href="https://www.instagram.com/thehyperchamber?utm_source=ig_web_button_share_sheet&igsh=MWM5NjF4NjBrajA5Mg==" target="_blank" rel="noopener" class="text-gray-300 hover:text-white transition-colors duration-200">
                <!-- Instagram SVG Icon -->
                <svg class="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
              </a>
            </div>
          </div>
          <!-- Quick Links -->
          <div class="text-center md:text-left">
            <h4 class="text-base md:text-lg font-semibold mb-2 md:mb-4">Quick Links</h4>
            <div class="flex flex-wrap justify-center md:justify-start gap-x-3 gap-y-1 md:hidden">
              <a href="#benefits" class="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Benefits</a>
              <a href="#how" class="text-gray-300 hover:text-white transition-colors duration-200 text-sm">How It Works</a>
              <a href="#testimonials" class="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Testimonials</a>
              <a href="#pricing" class="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Pricing</a>
              <a href="#contact" class="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Contact</a>
            </div>
            <ul class="hidden md:block space-y-2">
              <li><a href="#benefits" class="text-gray-300 hover:text-white transition-colors duration-200 text-base">Benefits</a></li>
              <li><a href="#how" class="text-gray-300 hover:text-white transition-colors duration-200 text-base">How It Works</a></li>
              <li><a href="#testimonials" class="text-gray-300 hover:text-white transition-colors duration-200 text-base">Testimonials</a></li>
              <li><a href="#pricing" class="text-gray-300 hover:text-white transition-colors duration-200 text-base">Pricing</a></li>
              <li><a href="#contact" class="text-gray-300 hover:text-white transition-colors duration-200 text-base">Contact</a></li>
            </ul>
          </div>
          <!-- Contact Info - Minimal Modern -->
          <div class="flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <h4 class="text-base md:text-lg font-semibold mb-2">Contact</h4>
            <div class="text-gray-300 text-xs md:text-sm">
              <div class="mb-2">
                <span class="font-semibold">Address:</span><br>
                1051 S Valley Grove Way Suite 126,<br>Pleasant Grove, UT 84062
              </div>
              <div class="mb-3 md:mb-4">
                <span class="font-semibold">Phone:</span> <a href="tel:8012100151" class="text-blue-400 hover:underline">(801) 210-0151</a>
              </div>
              <a href="https://book.squareup.com/appointments/bgourqv8i2d4ot/location/LET2173VFX05E/services" target="_blank" rel="noopener noreferrer" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-1.5 md:py-2 px-4 md:px-6 rounded-lg shadow text-sm md:text-base transition">Book Now</a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-4 md:mt-8 pt-4 md:pt-8 text-center text-gray-300">
          <p class="text-xs md:text-base">&copy; 2025 The Hyper Chamber. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
} 