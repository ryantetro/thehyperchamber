export function HowItWorks() {
  return `
    <section id="how" class="bg-white py-12 md:py-20">
      <div class="container-custom">
        <!-- Section Title -->
        <div class="text-center mb-10 md:mb-16">
          <span class="text-blue-600 font-bold uppercase tracking-wide text-xs md:text-sm">The Process</span>
          <h2 class="text-2xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-2 md:mb-4">How Hyperbaric Oxygen Therapy Works</h2>
          <p class="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">Our advanced technology is simple to use yet delivers powerful results for your health and wellness.</p>
        </div>
        <!-- Step 1 -->
        <div class="flex flex-col md:flex-row items-center mb-10 md:mb-24">
          <div class="md:w-1/2 md:pr-12 mb-6 md:mb-0">
            <span class="text-blue-600 font-bold uppercase text-xs md:text-sm">Step 1</span>
            <h3 class="text-lg md:text-3xl font-extrabold text-gray-900 mt-2 mb-2 md:mb-3">Book Your Session</h3>
            <p class="text-gray-600 mb-4 md:mb-5 text-sm md:text-base">Schedule your Hyper Chamber session at a time that works for you. Our online booking system makes it easy to find the perfect slot.</p>
            <ul class="space-y-2">
              <li class="flex items-center text-green-600 font-medium text-sm md:text-base"><svg class="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Choose from multiple session lengths</li>
              <li class="flex items-center text-green-600 font-medium text-sm md:text-base"><svg class="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Select your preferred date and time</li>
              <li class="flex items-center text-green-600 font-medium text-sm md:text-base"><svg class="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Receive instant confirmation</li>
            </ul>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <div class="relative bg-gray-100 rounded-2xl shadow-lg p-5 md:p-8 w-full max-w-md flex flex-col items-center">
              <span class="absolute top-3 md:top-4 right-3 md:right-4 bg-blue-500 text-white font-bold rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-base md:text-lg">1</span>
              <div class="w-full h-24 md:h-32 bg-blue-50 rounded-lg border-2 border-blue-200 flex flex-col justify-center items-center">
                <div class="w-3/4 h-3 md:h-4 bg-blue-100 rounded mb-1 md:mb-2"></div>
                <div class="w-2/3 h-3 md:h-4 bg-blue-100 rounded mb-1 md:mb-2"></div>
                <div class="w-1/2 h-3 md:h-4 bg-blue-100 rounded"></div>
                <button class="mt-3 md:mt-4 bg-blue-500 text-white font-bold py-2 px-4 md:px-6 rounded-lg shadow hover:bg-blue-600 transition text-sm md:text-base">Book Now</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Step 2 -->
        <div class="flex flex-col md:flex-row-reverse items-center mb-10 md:mb-24">
          <div class="md:w-1/2 md:pl-12 mb-6 md:mb-0">
            <span class="text-blue-600 font-bold uppercase text-xs md:text-sm">Step 2</span>
            <h3 class="text-lg md:text-3xl font-extrabold text-gray-900 mt-2 mb-2 md:mb-3">Prepare for Your Session</h3>
            <p class="text-gray-600 mb-4 md:mb-5 text-sm md:text-base">Arrive 10 minutes before your scheduled time. Our staff will guide you through a brief orientation and answer any questions.</p>
            <ul class="space-y-2">
              <li class="flex items-center text-green-600 font-medium text-sm md:text-base"><svg class="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Wear comfortable clothing</li>
              <li class="flex items-center text-green-600 font-medium text-sm md:text-base"><svg class="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Complete a brief health questionnaire</li>
              <li class="flex items-center text-green-600 font-medium text-sm md:text-base"><svg class="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Receive personalized settings recommendation</li>
            </ul>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <div class="relative bg-gray-100 rounded-2xl shadow-lg p-5 md:p-8 w-full max-w-md flex flex-col items-center">
              <span class="absolute top-3 md:top-4 right-3 md:right-4 bg-blue-500 text-white font-bold rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-base md:text-lg">2</span>
              <!-- Clipboard with checkmark icon for preparation -->
              <svg class="w-32 h-24 md:w-40 md:h-32" fill="none" viewBox="0 0 160 100">
                <!-- Clipboard background -->
                <rect x="50" y="15" width="60" height="70" rx="6" fill="#f8fafc" stroke="#3B82F6" stroke-width="2"/>
                <!-- Clipboard clip -->
                <rect x="70" y="10" width="20" height="8" rx="2" fill="#3B82F6"/>
                <!-- Form lines -->
                <line x1="60" y1="30" x2="100" y2="30" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="60" y1="40" x2="95" y2="40" stroke="#cbd5e1" stroke-width="2"/>
                <line x1="60" y1="50" x2="90" y2="50" stroke="#cbd5e1" stroke-width="2"/>
                <!-- Checkmark -->
                <circle cx="130" cy="35" r="12" fill="#10b981"/>
                <path d="M125 35l3 3 6-6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <!-- Step 3 -->
        <div class="flex flex-col md:flex-row items-center mb-6 md:mb-8">
          <div class="md:w-1/2 md:pr-12 mb-6 md:mb-0">
            <span class="text-blue-600 font-bold uppercase text-xs md:text-sm">Step 3</span>
            <h3 class="text-lg md:text-3xl font-extrabold text-gray-900 mt-2 mb-2 md:mb-3">Experience The Chamber</h3>
            <p class="text-gray-600 mb-4 md:mb-5 text-sm md:text-base">Relax in our state-of-the-art Hyper Chamber while the hyperbaric oxygen therapy works its magic. Most sessions last between 30-60 minutes.</p>
            <ul class="space-y-2">
              <li class="flex items-center text-green-600 font-medium text-sm md:text-base"><svg class="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Comfortable, spacious environment</li>
              <li class="flex items-center text-green-600 font-medium text-sm md:text-base"><svg class="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Adjustable settings for optimal results</li>
              <li class="flex items-center text-green-600 font-medium text-sm md:text-base"><svg class="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Immediate benefits after first session</li>
            </ul>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <div class="relative bg-gray-100 rounded-2xl shadow-lg p-5 md:p-8 w-full max-w-md flex flex-col items-center">
              <span class="absolute top-3 md:top-4 right-3 md:right-4 bg-blue-500 text-white font-bold rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-base md:text-lg">3</span>
              <!-- Person meditating/relaxing in chamber -->
              <svg class="w-32 h-24 md:w-40 md:h-32" fill="none" viewBox="0 0 160 100">
                <!-- Chamber outline -->
                <ellipse cx="80" cy="55" rx="65" ry="25" stroke="#3B82F6" stroke-width="2" fill="#e0f2fe"/>
                <!-- Person silhouette -->
                <circle cx="80" cy="45" r="8" fill="#64748b"/>
                <ellipse cx="80" cy="65" rx="12" ry="6" fill="#64748b"/>
                <!-- Relaxation/meditation lines -->
                <path d="M50 35 Q55 30 60 35" stroke="#06b6d4" stroke-width="1.5" fill="none"/>
                <path d="M100 35 Q105 30 110 35" stroke="#06b6d4" stroke-width="1.5" fill="none"/>
                <path d="M45 50 Q50 45 55 50" stroke="#06b6d4" stroke-width="1.5" fill="none"/>
                <path d="M105 50 Q110 45 115 50" stroke="#06b6d4" stroke-width="1.5" fill="none"/>
                <!-- Peace/zen symbol -->
                <circle cx="130" cy="25" r="8" fill="#10b981"/>
                <path d="M126 25h8M130 21v8" stroke="white" stroke-width="1.5"/>
              </svg>
            </div>
          </div>
        </div>
        <!-- CTA Button -->
        <div class="flex justify-center mt-6 md:mt-8">
          <a href="https://book.squareup.com/appointments/bgourqv8i2d4ot/location/LET2173VFX05E/services" target="_blank" rel="noopener noreferrer" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg shadow text-base md:text-lg transition">Book Your First Session</a>
        </div>
      </div>
    </section>
  `;
} 