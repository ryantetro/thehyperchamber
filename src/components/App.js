import { Header } from './Header.js'
import { Hero } from './Hero.js'
import { Benefits } from './Benefits.js'
import { HowItWorks } from './HowItWorks.js'
import { ProvenResults } from './ProvenResults.js'
import { Testimonials } from './Testimonials.js'
import { Pricing } from './Pricing.js'
import { Footer } from './Footer.js'

export function App() {
  return `
    <style>
      button, .btn-primary, .btn-secondary, .btn, a[href], a.bg-blue-500, a.bg-white, a.border-2, a.rounded-lg, a.rounded-xl, a.shadow, a.shadow-lg, a.shadow-2xl, a.text-blue-600, a.text-white, a.font-bold, a.hover\:bg-blue-600, a.hover\:bg-blue-100, a.hover\:bg-white, a.hover\:text-blue-600, a.hover\:text-blue-700, a.hover\:underline {
        cursor: pointer !important;
      }
    </style>
    <div class="min-h-screen flex flex-col">
      ${Header()}
      <main class="flex-grow">
        ${Hero()}
        ${Benefits()}
        ${HowItWorks()}
        ${ProvenResults()}
        ${Testimonials()}
        ${Pricing()}
      </main>
      ${Footer()}
    </div>
  `
} 