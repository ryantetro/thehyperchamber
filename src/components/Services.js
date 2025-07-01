export function Services() {
  return `
    <section id="services" class="py-20 bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of advanced wellness and performance optimization services
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service Card 1 -->
          <div class="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Hyperbaric Therapy</h3>
            <p class="text-gray-600 mb-6">
              Experience the benefits of increased oxygen levels in a pressurized environment to accelerate healing and recovery.
            </p>
            <button class="btn-primary w-full">Book Session</button>
          </div>
          
          <!-- Service Card 2 -->
          <div class="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Red Light Therapy</h3>
            <p class="text-gray-600 mb-6">
              Harness the power of specific light wavelengths to promote cellular regeneration and reduce inflammation.
            </p>
            <button class="btn-primary w-full">Book Session</button>
          </div>
          
          <!-- Service Card 3 -->
          <div class="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Cryotherapy</h3>
            <p class="text-gray-600 mb-6">
              Experience extreme cold therapy to reduce muscle soreness, inflammation, and accelerate recovery.
            </p>
            <button class="btn-primary w-full">Book Session</button>
          </div>
        </div>
      </div>
    </section>
  `
} 