export function Contact() {
  return `
    <section id="contact" class="bg-gray-50 py-8 md:py-20">
      <div class="container-custom">
        <!-- Section Title -->
        <div class="text-center mb-6 md:mb-12">
          <span class="text-blue-600 font-bold uppercase tracking-wide text-xs md:text-sm">Get In Touch</span>
          <h2 class="text-xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-2 md:mb-4">Contact Us</h2>
          <p class="text-sm md:text-lg text-gray-500 max-w-2xl mx-auto">Ready to start your hyperbaric oxygen therapy journey? We're here to answer your questions and help you get started.</p>
        </div>

        <div class="max-w-6xl mx-auto">
          <!-- Contact Cards Grid -->
          <div class="grid grid-cols-2 gap-4 md:gap-6">
            <!-- Call Us -->
            <div class="bg-white rounded-2xl shadow-lg p-4 md:p-6 text-center">
              <div class="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13 1.13.37 2.22.72 3.26a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.04.35 2.13.59 3.26.72A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p class="text-gray-600 text-sm mb-3">Speak directly with our team</p>
              <a href="tel:8012100151" class="text-blue-600 font-bold text-lg hover:underline">801-210-0151</a>
            </div>

            <!-- Book Online -->
            <div class="bg-white rounded-2xl shadow-lg p-4 md:p-6 text-center">
              <div class="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-2">Book Online</h3>
              <p class="text-gray-600 text-sm mb-4">Schedule your session instantly</p>
              <a href="https://book.squareup.com/appointments/bgourqv8i2d4ot/location/LET2173VFX05E/services" target="_blank" rel="noopener noreferrer" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition text-sm">Book Now</a>
            </div>

            <!-- Visit Us -->
            <div class="bg-white rounded-2xl shadow-lg p-4 md:p-6 text-center">
              <div class="bg-purple-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p class="text-gray-600 text-sm mb-2">Come experience The Hyper Chamber</p>
              <p class="text-gray-500 text-xs">1051 S Valley Grove Way Suite 126,<br>Pleasant Grove, UT 84062</p>
            </div>

            <!-- Hours -->
            <div class="bg-white rounded-2xl shadow-lg p-4 md:p-6 text-center">
              <div class="bg-orange-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-2">Hours</h3>
              <div class="text-gray-600 text-xs space-y-1">
                <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                <p>Saturday: Closed</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}