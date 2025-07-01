export function Hero() {
  return `
    <section class="relative bg-gradient-to-br from-blue-600 to-blue-400 text-white overflow-hidden">
      <div class="container-custom flex flex-col md:flex-row items-center justify-between pt-6 pb-4 md:py-28">
        <!-- Left: Text and CTA (stacked on mobile) -->
        <div class="max-w-2xl z-10 text-center md:text-left flex flex-col items-center md:items-start w-full">
          <h1 class="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-3 md:mb-8 drop-shadow-lg">
            Advanced <span class="text-blue-200">Hyperbaric Oxygen<br>Therapy</span>
          </h1>
          <p class="text-base sm:text-lg md:text-2xl text-blue-100 mb-5 md:mb-10 font-medium drop-shadow">
            Experience the revolutionary Hyperbaric Oxygen Therapy in our Hyper Chamber – a cutting-edge treatment that enhances recovery, reduces inflammation, and boosts your overall wellness through increased oxygen delivery to your tissues.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center md:justify-start mb-4 md:mb-0">
            <a href="https://book.squareup.com/appointments/bgourqv8i2d4ot/location/LET2173VFX05E/services" target="_blank" rel="noopener noreferrer" class="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-blue-100 hover:text-blue-700 text-lg transition-all duration-200 border-2 border-white focus:outline-none focus:ring-2 focus:ring-blue-300">Book Your Session</a>
            <a href="#learn" class="border-2 border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white hover:text-blue-600 text-lg transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300">Learn More</a>
          </div>
        </div>
        <!-- Right: Stat Card (below on mobile, right on desktop) -->
        <div class="relative mt-4 md:mt-0 md:ml-16 flex-shrink-0 z-10 w-full max-w-xs mx-auto md:mx-0 order-2 md:order-none">
          <div class="bg-white bg-opacity-95 rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col items-center w-full border border-blue-100">
            <div class="text-3xl md:text-5xl font-extrabold text-blue-600 mb-1 md:mb-2">93%</div>
            <div class="text-base md:text-xl font-semibold text-gray-700 mb-2 md:mb-4">Recovery Rate</div>
            <div class="mt-1 md:mt-2 bg-cyan-400 text-white font-bold px-4 md:px-5 py-1.5 md:py-2 rounded-full shadow-lg text-xs md:text-base border-2 border-white">Trusted by 5,000+ clients</div>
          </div>
        </div>
      </div>
      <!-- Modern Curve at bottom -->
      <svg class="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#f9fafb" fill-opacity="1" d="M0,80 C360,120 1080,40 1440,80 L1440,120 L0,120 Z"></path></svg>
    </section>
  `;
} 