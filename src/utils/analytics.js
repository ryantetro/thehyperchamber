import { track } from '@vercel/analytics'

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMobileMenu = document.getElementById('close-mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  if (closeMobileMenu && mobileMenu) {
    closeMobileMenu.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
    });
  }
  
  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu?.querySelectorAll('a');
  mobileLinks?.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
    });
  });
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Analytics tracking with Vercel Analytics integration
export function trackEvent(eventName, eventData = {}) {
  // Track with Vercel Analytics
  track(eventName, eventData)
  
  // Also log for debugging (can be removed in production)
  console.log('Event tracked:', eventName, eventData)
}

// Optional: Track booking button clicks for analytics without interrupting the flow
export function initializeBookingTracking() {
  // Get all Square booking links
  const bookingLinks = document.querySelectorAll('a[href*="book.squareup.com"]')
  
  bookingLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Track the event for analytics but don't prevent the default action
      trackEvent('booking_clicked', {
        button_text: this.textContent.trim(),
        section: this.closest('section')?.id || 'unknown',
        page_location: window.location.pathname
      })
      // Link proceeds normally to Square booking page
    })
  })
}

// Track phone number clicks
export function initializePhoneTracking() {
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]')
  
  phoneLinks.forEach(link => {
    link.addEventListener('click', function() {
      trackEvent('phone_clicked', {
        phone_number: this.href.replace('tel:', ''),
        section: this.closest('section')?.id || 'unknown',
        page_location: window.location.pathname
      })
    })
  })
}

// Track section visibility for engagement insights
export function initializeSectionTracking() {
  const sections = document.querySelectorAll('section[id]')
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        trackEvent('section_viewed', {
          section_id: entry.target.id,
          section_name: entry.target.querySelector('h2')?.textContent?.trim() || entry.target.id,
          page_location: window.location.pathname
        })
      }
    })
  }, { threshold: 0.5 })
  
  sections.forEach(section => observer.observe(section))
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
  initializeBookingTracking()
  initializePhoneTracking()
  initializeSectionTracking()

  // Small delay to ensure all elements are loaded
  setTimeout(() => {
    // 3D Testimonials Carousel Logic
    const slides = document.querySelectorAll('.testimonial-slide-3d');
    const dots = document.querySelectorAll('.testimonial-dot');
    const prev = document.getElementById('testimonial-prev');
    const next = document.getElementById('testimonial-next');
    
    console.log('Carousel elements found:', {
      slides: slides.length,
      dots: dots.length,
      prev: !!prev,
      next: !!next
    });
    
    let current = 0;
    let timer = null;
    
    function update3DCarousel(idx) {
      console.log('Updating carousel to index:', idx);
      slides.forEach((slide, i) => {
        if (i === idx) {
          // Center card - fully visible and scaled up
          slide.style.opacity = '1';
          slide.style.transform = 'translateX(0) scale(1)';
          slide.style.zIndex = '10';
          slide.style.pointerEvents = 'auto';
        } else if (i === (idx + 1) % slides.length) {
          // Next card - to the right
          slide.style.opacity = '0.5';
          slide.style.transform = 'translateX(60%) scale(0.85)';
          slide.style.zIndex = '5';
          slide.style.pointerEvents = 'none';
        } else if (i === (idx - 1 + slides.length) % slides.length) {
          // Previous card - to the left
          slide.style.opacity = '0.5';
          slide.style.transform = 'translateX(-60%) scale(0.85)';
          slide.style.zIndex = '5';
          slide.style.pointerEvents = 'none';
        } else {
          // Hidden cards
          slide.style.opacity = '0';
          slide.style.transform = 'translateX(0) scale(0.8)';
          slide.style.zIndex = '0';
          slide.style.pointerEvents = 'none';
        }
      });
      
      // Update dots
      dots.forEach((dot, i) => {
        if (i === idx) {
          dot.classList.remove('bg-white/50');
          dot.classList.add('bg-white');
        } else {
          dot.classList.remove('bg-white');
          dot.classList.add('bg-white/50');
        }
      });
      
      current = idx;
    }
    
    function nextSlide() {
      update3DCarousel((current + 1) % slides.length);
    }
    
    function stopAuto() {
      if (timer) clearInterval(timer);
      timer = null;
    }
    
    if (slides.length && prev && next && dots.length) {
      console.log('Setting up event listeners...');
      
      prev.addEventListener('click', function(e) {
        e.preventDefault()
        console.log('Previous button clicked')
        update3DCarousel((current - 1 + slides.length) % slides.length)
        trackEvent('testimonial_carousel_prev', { current_slide: current })
        stopAuto()
      })
      
      next.addEventListener('click', function(e) {
        e.preventDefault()
        console.log('Next button clicked')
        update3DCarousel((current + 1) % slides.length)
        trackEvent('testimonial_carousel_next', { current_slide: current })
        stopAuto()
      })
      
      dots.forEach((dot, i) => {
        dot.addEventListener('click', function(e) {
          e.preventDefault()
          console.log('Dot clicked:', i)
          update3DCarousel(i)
          trackEvent('testimonial_carousel_dot', { target_slide: i, current_slide: current })
          stopAuto()
        })
      })
      
      // Initialize with first slide
      console.log('Initializing carousel...');
      update3DCarousel(0);
      timer = setInterval(nextSlide, 5000);
    } else {
      console.error('Carousel setup failed - missing elements');
    }
  }, 100);
}); 