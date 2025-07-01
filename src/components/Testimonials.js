export function Testimonials() {
  return `
    <section id="testimonials" class="bg-gradient-to-br from-blue-600 to-blue-400 py-12 md:py-20">
      <div class="container-custom">
        <!-- Section Title -->
        <div class="text-center mb-8 md:mb-12">
          <span class="text-blue-100 font-bold uppercase tracking-wide text-xs md:text-sm">Client Stories</span>
          <h2 class="text-2xl md:text-4xl font-extrabold text-white mt-2 mb-2 md:mb-4">What Our Clients Say</h2>
          <p class="text-base md:text-lg text-blue-100 max-w-2xl mx-auto">Hear from people who have experienced the transformative benefits of hyperbaric oxygen therapy in our Hyper Chamber.</p>
        </div>
        <!-- 3D Carousel -->
        <div class="relative flex items-center justify-center max-w-4xl mx-auto h-80">
          <!-- Carousel Controls -->
          <button id="testimonial-prev" class="absolute left-1 md:left-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur border border-gray-200 rounded-full shadow-lg p-1.5 md:p-2 hover:bg-white transition z-30 min-w-[32px] min-h-[32px] md:min-w-[36px] md:min-h-[36px] flex items-center justify-center">
            <svg class="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          
          <div id="testimonial-carousel-3d" class="relative w-full max-w-md h-full px-10 md:px-12">
            <!-- Testimonial 1 -->
            <div class="testimonial-slide-3d absolute inset-0 w-full transition-all duration-500 ease-out" data-index="0" style="transform-origin: center; opacity: 1; transform: translateX(0) scale(1); z-index: 10;">
              <div class="flex flex-col items-center bg-white rounded-2xl shadow-2xl px-6 py-6 mx-4 h-full relative overflow-hidden justify-center text-center">
                <div class="flex items-center justify-center mb-4">
                  <span class="flex text-yellow-400 text-base">★★★★★</span>
                </div>
                <p class="text-gray-700 mb-6 text-center text-base leading-relaxed">"As a professional athlete, recovery is crucial. The hyperbaric oxygen therapy has cut my recovery time in half and allowed me to train harder than ever before."</p>
                <div class="flex flex-col items-center">
                  <div class="font-bold text-gray-900 text-base">Michael Johnson</div>
                  <div class="text-gray-500 text-sm">Professional Athlete</div>
                </div>
              </div>
            </div>
            
            <!-- Testimonial 2 -->
            <div class="testimonial-slide-3d absolute inset-0 w-full transition-all duration-500 ease-out" data-index="1" style="transform-origin: center; opacity: 0.5; transform: translateX(60%) scale(0.85); z-index: 5;">
              <div class="flex flex-col items-center bg-white rounded-2xl shadow-2xl px-6 py-6 mx-4 h-full relative overflow-hidden justify-center text-center">
                <div class="flex items-center justify-center mb-4">
                  <span class="flex text-yellow-400 text-base">★★★★★</span>
                </div>
                <p class="text-gray-700 mb-6 text-center text-base leading-relaxed">"I've struggled with chronic inflammation for years. After just 5 sessions, I noticed a dramatic reduction in pain and swelling."</p>
                <div class="flex flex-col items-center">
                  <div class="font-bold text-gray-900 text-base">Sarah Rodriguez</div>
                  <div class="text-gray-500 text-sm">Chronic Pain Patient</div>
                </div>
              </div>
            </div>
            
            <!-- Testimonial 3 -->
            <div class="testimonial-slide-3d absolute inset-0 w-full transition-all duration-500 ease-out" data-index="2" style="transform-origin: center; opacity: 0.5; transform: translateX(-60%) scale(0.85); z-index: 5;">
              <div class="flex flex-col items-center bg-white rounded-2xl shadow-2xl px-6 py-6 mx-4 h-full relative overflow-hidden justify-center text-center">
                <div class="flex items-center justify-center mb-4">
                  <span class="flex text-yellow-400 text-base">★★★★★</span>
                </div>
                <p class="text-gray-700 mb-6 text-center text-base leading-relaxed">"Hyperbaric oxygen therapy has become my secret weapon for maintaining peak mental clarity and energy levels."</p>
                <div class="flex flex-col items-center">
                  <div class="font-bold text-gray-900 text-base">David Thompson</div>
                  <div class="text-gray-500 text-sm">CEO, Tech Innovations</div>
                </div>
              </div>
            </div>
          </div>
          
          <button id="testimonial-next" class="absolute right-1 md:right-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur border border-gray-200 rounded-full shadow-lg p-1.5 md:p-2 hover:bg-white transition z-30 min-w-[32px] min-h-[32px] md:min-w-[36px] md:min-h-[36px] flex items-center justify-center">
            <svg class="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
        
        <!-- Dots -->
        <div class="flex justify-center mt-6 gap-2">
          <button class="testimonial-dot w-3 h-3 rounded-full bg-white transition-colors" data-index="0"></button>
          <button class="testimonial-dot w-3 h-3 rounded-full bg-white/50 transition-colors" data-index="1"></button>
          <button class="testimonial-dot w-3 h-3 rounded-full bg-white/50 transition-colors" data-index="2"></button>
        </div>
        
        <!-- CTA Button -->
        <div class="flex justify-center mt-6">
          <a href="https://book.squareup.com/appointments/bgourqv8i2d4ot/location/LET2173VFX05E/services" target="_blank" rel="noopener noreferrer" class="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg shadow-lg text-lg transition">Join Our Success Stories</a>
        </div>
      </div>
    </section>
  `;
} 