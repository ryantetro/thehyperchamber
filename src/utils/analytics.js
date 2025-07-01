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

// Analytics tracking (placeholder for future implementation)
export function trackEvent(eventName, eventData = {}) {
  // This is where you would integrate with Google Analytics, Mixpanel, etc.
  console.log('Event tracked:', eventName, eventData);
}

// Optional: Track booking button clicks for analytics without interrupting the flow
export function initializeBookingTracking() {
  // Get all Square booking links
  const bookingLinks = document.querySelectorAll('a[href*="book.squareup.com"]');
  
  bookingLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Track the event for analytics but don't prevent the default action
      trackEvent('booking_button_clicked', {
        button_text: this.textContent,
        location: this.closest('section')?.id || 'unknown',
        href: this.href
      });
      // Link proceeds normally to Square booking page
    });
  });
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
  initializeBookingTracking(); // Changed from initializeBookingButtons

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
        e.preventDefault();
        console.log('Previous button clicked');
        update3DCarousel((current - 1 + slides.length) % slides.length);
        stopAuto();
      });
      
      next.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Next button clicked');
        update3DCarousel((current + 1) % slides.length);
        stopAuto();
      });
      
      dots.forEach((dot, i) => {
        dot.addEventListener('click', function(e) {
          e.preventDefault();
          console.log('Dot clicked:', i);
          update3DCarousel(i);
          stopAuto();
        });
      });
      
      // Initialize with first slide
      console.log('Initializing carousel...');
      update3DCarousel(0);
      timer = setInterval(nextSlide, 5000);
    } else {
      console.error('Carousel setup failed - missing elements');
    }
  }, 100);
}); 