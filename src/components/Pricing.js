export function Pricing() {
  return `
    <section id="pricing" class="bg-gray-50 py-12 md:py-20">
      <div class="container-custom">
        <!-- Section Title -->
        <div class="text-center mb-6 md:mb-14">
          <span class="text-blue-600 font-bold uppercase tracking-wide text-xs md:text-sm">Pricing Options</span>
          <h2 class="text-xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-2 md:mb-4">Simple, Transparent Pricing</h2>
          <p class="text-sm md:text-lg text-gray-500 max-w-2xl mx-auto">Choose the package that's right for you and start experiencing the benefits of hyperbaric oxygen therapy.</p>
        </div>
        <!-- Pricing Cards -->
        <div class="grid grid-cols-3 gap-2 md:gap-8 mb-6 md:mb-10 max-w-sm md:max-w-none mx-auto">
          <!-- Card 1 -->
          <div class="bg-white rounded-lg md:rounded-2xl shadow-lg p-2.5 md:p-8 flex flex-col border border-gray-100">
            <h3 class="font-bold text-xs md:text-xl text-gray-900 mb-1">Intro Session</h3>
            <div class="text-gray-500 mb-2 md:mb-4 text-xs md:text-base">First-time experience</div>
            <div class="text-base md:text-4xl font-extrabold text-gray-900 mb-1">$29<span class="text-xs md:text-lg font-normal text-gray-400">/session</span></div>
            <ul class="mt-2 md:mt-4 mb-3 md:mb-8 space-y-1 md:space-y-2">
              <li class="flex items-start text-green-600 font-medium text-xs md:text-base"><svg class="w-3 h-3 md:w-5 md:h-5 mr-1 md:mr-2 mt-0.5 md:mt-0 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>60-minute session</li>
              <li class="flex items-start text-green-600 font-medium text-xs md:text-base"><svg class="w-3 h-3 md:w-5 md:h-5 mr-1 md:mr-2 mt-0.5 md:mt-0 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Personalized settings</li>
              <li class="flex items-start text-green-600 font-medium text-xs md:text-base"><svg class="w-3 h-3 md:w-5 md:h-5 mr-1 md:mr-2 mt-0.5 md:mt-0 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Health assessment</li>
              <li class="flex items-start text-green-600 font-medium text-xs md:text-base"><svg class="w-3 h-3 md:w-5 md:h-5 mr-1 md:mr-2 mt-0.5 md:mt-0 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Post-session consultation</li>
            </ul>
            <a href="https://book.squareup.com/appointments/bgourqv8i2d4ot/location/LET2173VFX05E/services" target="_blank" rel="noopener noreferrer" class="mt-auto border-2 border-blue-500 text-blue-600 font-bold py-1 md:py-3 px-1 md:px-8 rounded md:rounded-lg shadow-sm text-xs md:text-lg text-center transition hover:bg-blue-50">Book Now</a>
          </div>
          <!-- Card 2 (Most Popular) -->
          <div class="bg-white rounded-lg md:rounded-2xl shadow-2xl p-2.5 md:p-8 flex flex-col border-2 border-blue-500 relative z-10 md:scale-105">
            <div class="absolute -top-3 md:-top-6 left-1/2 -translate-x-1/2 bg-blue-500 text-white font-bold px-1.5 md:px-6 py-0.5 md:py-2 rounded-t md:rounded-t-xl shadow text-xs md:text-sm tracking-wide">Most Popular</div>
            <h3 class="font-bold text-xs md:text-xl text-gray-900 mb-1 mt-3 md:mt-6">5-Pack</h3>
            <div class="text-gray-500 mb-2 md:mb-4 text-xs md:text-base">Best value for regular users</div>
            <div class="text-base md:text-4xl font-extrabold text-gray-900 mb-1">$200<span class="text-xs md:text-lg font-normal text-gray-400"> ($40/session)</span></div>
            <ul class="mt-2 md:mt-4 mb-3 md:mb-8 space-y-1 md:space-y-2">
              <li class="flex items-start text-green-600 font-medium text-xs md:text-base"><svg class="w-3 h-3 md:w-5 md:h-5 mr-1 md:mr-2 mt-0.5 md:mt-0 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>5 sixty-minute sessions</li>
              <li class="flex items-start text-green-600 font-medium text-xs md:text-base"><svg class="w-3 h-3 md:w-5 md:h-5 mr-1 md:mr-2 mt-0.5 md:mt-0 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Personalized settings</li>
              <li class="flex items-start text-green-600 font-medium text-xs md:text-base"><svg class="w-3 h-3 md:w-5 md:h-5 mr-1 md:mr-2 mt-0.5 md:mt-0 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Comprehensive health assessment</li>
              <li class="flex items-start text-green-600 font-medium text-xs md:text-base"><svg class="w-3 h-3 md:w-5 md:h-5 mr-1 md:mr-2 mt-0.5 md:mt-0 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Progress tracking</li>
              <li class="flex items-start text-green-600 font-medium text-xs md:text-base"><svg class="w-3 h-3 md:w-5 md:h-5 mr-1 md:mr-2 mt-0.5 md:mt-0 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Priority booking</li>
            </ul>
            <a href="https://book.squareup.com/appointments/bgourqv8i2d4ot/location/LET2173VFX05E/services" target="_blank" rel="noopener noreferrer" class="mt-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 md:py-3 px-1 md:px-8 rounded md:rounded-lg shadow text-xs md:text-lg text-center transition">Book Now</a>
          </div>
          <!-- Card 3 -->
          <div class="bg-white rounded-lg md:rounded-2xl shadow-lg p-2.5 md:p-8 flex flex-col border border-gray-100">
            <h3 class="font-bold text-xs md:text-xl text-gray-900 mb-1">Single Session</h3>
            <div class="text-gray-500 mb-2 md:mb-4 text-xs md:text-base">Regular session</div>
            <div class="text-base md:text-4xl font-extrabold text-gray-900 mb-1">$49<span class="text-xs md:text-lg font-normal text-gray-400">/session</span></div>
            <ul class="mt-2 md:mt-4 mb-3 md:mb-8 space-y-1 md:space-y-2">
              <li class="flex items-start text-green-600 font-medium text-xs md:text-base"><svg class="w-3 h-3 md:w-5 md:h-5 mr-1 md:mr-2 mt-0.5 md:mt-0 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>60-minute session</li>
              <li class="flex items-start text-green-600 font-medium text-xs md:text-base"><svg class="w-3 h-3 md:w-5 md:h-5 mr-1 md:mr-2 mt-0.5 md:mt-0 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Personalized settings</li>
              <li class="flex items-start text-green-600 font-medium text-xs md:text-base"><svg class="w-3 h-3 md:w-5 md:h-5 mr-1 md:mr-2 mt-0.5 md:mt-0 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Health assessment</li>
              <li class="flex items-start text-green-600 font-medium text-xs md:text-base"><svg class="w-3 h-3 md:w-5 md:h-5 mr-1 md:mr-2 mt-0.5 md:mt-0 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Post-session consultation</li>
            </ul>
            <a href="https://book.squareup.com/appointments/bgourqv8i2d4ot/location/LET2173VFX05E/services" target="_blank" rel="noopener noreferrer" class="mt-auto border-2 border-blue-500 text-blue-600 font-bold py-1 md:py-3 px-1 md:px-8 rounded md:rounded-lg shadow-sm text-xs md:text-lg text-center transition hover:bg-blue-50">Book Now</a>
          </div>
        </div>
        <!-- Footer Note -->
        <div class="text-center text-gray-500 text-xs md:text-lg">
          Need a custom package for your team or organization?<br>
          <a href="tel:8012100151" class="text-blue-600 font-bold hover:underline">Call us at 801-210-0151 for special group rates</a>
        </div>
      </div>
    </section>
  `;
} 