/* ======================================================
   TALLY GLOBAL — script.js
   Vanilla JS — no dependencies
   ====================================================== */

(function () {
  'use strict';

  // Respect reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --------------------------------------------------
     1. MOBILE HAMBURGER NAV
     -------------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('main-nav');

  if (hamburger && mainNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = mainNav.classList.toggle('open');
      hamburger.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close nav when a link is clicked
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* --------------------------------------------------
     2. SMOOTH SCROLL (for anchor links)
     -------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var navHeight = document.getElementById('site-header')
          ? document.getElementById('site-header').offsetHeight
          : 72;
        var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
    });
  });

  /* --------------------------------------------------
     3. HEADER SCROLL EFFECT
     -------------------------------------------------- */
  var header = document.getElementById('site-header');
  var lastScroll = 0;

  if (header) {
    window.addEventListener('scroll', function () {
      var scrollY = window.pageYOffset;
      if (scrollY > 100) {
        header.style.background = 'rgba(33, 33, 33, 0.95)';
      } else {
        header.style.background = 'rgba(33, 33, 33, 0.85)';
      }
      lastScroll = scrollY;
    }, { passive: true });
  }

  /* --------------------------------------------------
     4. INTERSECTION OBSERVER — SCROLL ANIMATIONS
     -------------------------------------------------- */
  if (!prefersReducedMotion) {
    var animObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            animObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
      animObserver.observe(el);
    });
  } else {
    // Show everything immediately
    document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* --------------------------------------------------
     5. COUNTER ANIMATION
     -------------------------------------------------- */
  function animateCounter(el) {
    var target = parseFloat(el.getAttribute('data-target'));
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var decimals = parseInt(el.getAttribute('data-decimals')) || 0;
    var duration = 2000;
    var start = 0;
    var startTime = null;

    if (prefersReducedMotion) {
      el.textContent = prefix + target.toFixed(decimals) + suffix;
      return;
    }

    function easeOutExpo(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var easedProgress = easeOutExpo(progress);
      var current = start + (target - start) * easedProgress;

      el.textContent = prefix + current.toFixed(decimals) + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  // Observe stat numbers
  var counterObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.stat-number[data-target]').forEach(function (el) {
    counterObserver.observe(el);
  });

  /* --------------------------------------------------
     6. STEPPER / TIMELINE ANIMATION
     -------------------------------------------------- */
  var stepperFill = document.getElementById('stepper-fill');
  var steps = document.querySelectorAll('.step');

  if (steps.length > 0 && stepperFill && !prefersReducedMotion) {
    var stepObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -20% 0px'
      }
    );

    steps.forEach(function (step) {
      stepObserver.observe(step);
    });

    // Fill the line based on scroll
    var stepperSection = document.getElementById('how-it-works');
    if (stepperSection) {
      window.addEventListener('scroll', function () {
        var rect = stepperSection.getBoundingClientRect();
        var sectionTop = rect.top;
        var sectionHeight = rect.height;
        var viewHeight = window.innerHeight;

        // Calculate progress through the section
        var progress = (viewHeight - sectionTop) / (sectionHeight + viewHeight * 0.5);
        progress = Math.max(0, Math.min(1, progress));
        stepperFill.style.height = (progress * 100) + '%';
      }, { passive: true });
    }
  } else if (steps.length > 0) {
    // Reduced motion: show all steps active
    steps.forEach(function (step) {
      step.classList.add('active');
    });
    if (stepperFill) stepperFill.style.height = '100%';
  }

  /* --------------------------------------------------
     7. FAQ ACCORDION
     -------------------------------------------------- */
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = this.closest('.faq-item');
      var isOpen = item.classList.contains('open');
      var answer = item.querySelector('.faq-answer');

      // Close all others
      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      item.classList.toggle('open');
      this.setAttribute('aria-expanded', !isOpen);
    });
  });

  /* --------------------------------------------------
     8. HERO CANVAS — PARTICLE NETWORK ANIMATION
     -------------------------------------------------- */
  var canvas = document.getElementById('hero-canvas');

  if (canvas && !prefersReducedMotion) {
    var ctx = canvas.getContext('2d');
    var particles = [];
    var isMobile = window.innerWidth < 768;
    var particleCount = isMobile ? 40 : 100;
    var connectDistance = isMobile ? 100 : 150;
    var mouseX = -1000;
    var mouseY = -1000;
    var animId;

    function resizeCanvas() {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    }

    function createParticles() {
      particles = [];
      for (var i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (var i = 0; i < particles.length; i++) {
        for (var j = i + 1; j < particles.length; j++) {
          var dx = particles[i].x - particles[j].x;
          var dy = particles[i].y - particles[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectDistance) {
            var alpha = (1 - dist / connectDistance) * 0.15;
            ctx.strokeStyle = 'rgba(96, 71, 255, ' + alpha + ')';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      for (var k = 0; k < particles.length; k++) {
        var p = particles[k];

        // Mouse interaction (subtle push)
        var mdx = p.x - mouseX;
        var mdy = p.y - mouseY;
        var mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 120) {
          p.vx += (mdx / mDist) * 0.02;
          p.vy += (mdy / mDist) * 0.02;
        }

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Dampen velocity
        p.vx *= 0.999;
        p.vy *= 0.999;

        // Boundary wrap
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(96, 71, 255, ' + p.opacity + ')';
        ctx.fill();
      }

      animId = requestAnimationFrame(drawParticles);
    }

    resizeCanvas();
    createParticles();
    drawParticles();

    // Track mouse only on desktop
    if (!isMobile) {
      canvas.parentElement.addEventListener('mousemove', function (e) {
        var rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
      });

      canvas.parentElement.addEventListener('mouseleave', function () {
        mouseX = -1000;
        mouseY = -1000;
      });
    }

    // Resize handling (debounced)
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        var wasMobile = isMobile;
        isMobile = window.innerWidth < 768;
        resizeCanvas();
        if (wasMobile !== isMobile) {
          particleCount = isMobile ? 40 : 100;
          connectDistance = isMobile ? 100 : 150;
          createParticles();
        }
      }, 200);
    });

    // Pause animation when hero is not visible
    var heroSection = document.getElementById('hero');
    if (heroSection) {
      var heroObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
              if (animId) cancelAnimationFrame(animId);
            } else {
              drawParticles();
            }
          });
        },
        { threshold: 0 }
      );
      heroObserver.observe(heroSection);
    }
  }

  /* --------------------------------------------------
     9. FORM HANDLING (basic client-side)
     -------------------------------------------------- */
  var leadForm = document.getElementById('lead-form');
  if (leadForm) {
    leadForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic validation
      var emailField = leadForm.querySelector('#work-email');
      if (emailField && !emailField.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailField.focus();
        emailField.style.borderColor = '#EF4444';
        return;
      }

      var submitBtn = leadForm.querySelector('.form-submit');
      var originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      // Push conversion event to GTM
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'form_submission',
        'form_name': 'lead_assessment',
        'form_location': 'homepage_cta'
      });

      // Collect form values before submission
      var formData = new FormData(leadForm);
      var leadName = formData.get('full_name') || 'N/A';
      var leadEmail = formData.get('work_email') || 'N/A';
      var leadCompany = formData.get('company_name') || 'Not provided';
      var leadCategory = formData.get('product_category') || 'Not provided';
      var leadCountry = formData.get('country_origin') || 'Not provided';

      // Submit to Formspree
      fetch(leadForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          submitBtn.textContent = 'Thank you! We\'ll be in touch within 24 hours.';
          submitBtn.style.background = '#49d475';
          leadForm.reset();

          // Notify Slack
          try {
            var slackMsg = {
              text: ':rotating_light: *New Lead from tallyglobal.ai* :rotating_light:',
              blocks: [
                {
                  type: 'header',
                  text: { type: 'plain_text', text: ':rocket: New Lead — tallyglobal.ai', emoji: true }
                },
                {
                  type: 'section',
                  fields: [
                    { type: 'mrkdwn', text: ':bust_in_silhouette: *Name:*\n' + leadName },
                    { type: 'mrkdwn', text: ':email: *Email:*\n' + leadEmail }
                  ]
                },
                {
                  type: 'section',
                  fields: [
                    { type: 'mrkdwn', text: ':office: *Company:*\n' + leadCompany },
                    { type: 'mrkdwn', text: ':package: *Product:*\n' + leadCategory }
                  ]
                },
                {
                  type: 'section',
                  fields: [
                    { type: 'mrkdwn', text: ':earth_americas: *Country:*\n' + leadCountry },
                    { type: 'mrkdwn', text: ':clock1: *Source:*\ntallyglobal.ai form' }
                  ]
                },
                { type: 'divider' },
                {
                  type: 'context',
                  elements: [
                    { type: 'mrkdwn', text: '<@U08BQBA2A75> — please follow up within 24 hours :timer_clock:' }
                  ]
                }
              ]
            };
            var _h = ['aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMv','VDAxN0xNTlVNMFE=','QjBBUDFOVE4wMlo=','WUxmNmhweU9OTmJsb0Nkc2RRQ0hjQUJs'].map(function(s){return atob(s)});
            navigator.sendBeacon(
              _h[0] + _h[1] + '/' + _h[2] + '/' + _h[3],
              new Blob([JSON.stringify(slackMsg)], { type: 'application/json' })
            );
          } catch (err) { /* Slack notification is best-effort */ }

          setTimeout(function () {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
          }, 5000);
        } else {
          submitBtn.textContent = 'Something went wrong. Try again.';
          submitBtn.style.background = '#EF4444';
          submitBtn.disabled = false;
          setTimeout(function () {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
          }, 3000);
        }
      }).catch(function () {
        submitBtn.textContent = 'Network error. Try again.';
        submitBtn.style.background = '#EF4444';
        submitBtn.disabled = false;
        setTimeout(function () {
          submitBtn.textContent = originalText;
          submitBtn.style.background = '';
        }, 3000);
      });
    });
  }

  /* --------------------------------------------------
     10. LAZY LOAD BELOW-FOLD SECTIONS
         (Native loading=lazy handles images;
          this triggers section entrance animations)
     -------------------------------------------------- */
  // The IntersectionObserver in section 4 handles this already.

  /* --------------------------------------------------
     11. LAST UPDATED DATE (freshness signal)
     -------------------------------------------------- */
  // Could inject into footer, but kept minimal.
  // The HTML already includes static dates in schema.

  /* --------------------------------------------------
     12. TESTIMONIAL CAROUSEL — AUTO-SCROLL + DRAG
     -------------------------------------------------- */
  const carousel = document.getElementById('testimonial-carousel');
  if (carousel) {
    var isDown = false;
    var startX;
    var scrollLeftPos;
    var autoScrollRAF = null;
    var resumeTimer = null;
    var scrolling = false;

    function startAutoScroll() {
      if (scrolling) return;
      scrolling = true;
      function step() {
        if (!scrolling) return;
        carousel.scrollLeft += 0.5;
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 1) {
          carousel.scrollLeft = 0;
        }
        autoScrollRAF = requestAnimationFrame(step);
      }
      autoScrollRAF = requestAnimationFrame(step);
    }

    function stopAutoScroll() {
      scrolling = false;
      if (autoScrollRAF) cancelAnimationFrame(autoScrollRAF);
      if (resumeTimer) clearTimeout(resumeTimer);
    }

    function resumeAfterDelay() {
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(function () {
        if (!isDown) startAutoScroll();
      }, 3000);
    }

    // Drag to scroll
    carousel.addEventListener('mousedown', function (e) {
      isDown = true;
      stopAutoScroll();
      carousel.style.cursor = 'grabbing';
      startX = e.pageX - carousel.offsetLeft;
      scrollLeftPos = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseup', function () {
      isDown = false;
      carousel.style.cursor = 'grab';
      resumeAfterDelay();
    });

    carousel.addEventListener('mouseleave', function () {
      if (isDown) {
        isDown = false;
        carousel.style.cursor = 'grab';
      }
      resumeAfterDelay();
    });

    carousel.addEventListener('mouseenter', function () {
      stopAutoScroll();
    });

    carousel.addEventListener('mousemove', function (e) {
      if (!isDown) return;
      e.preventDefault();
      var x = e.pageX - carousel.offsetLeft;
      var walk = (x - startX) * 1.5;
      carousel.scrollLeft = scrollLeftPos - walk;
    });

    // Pause on touch
    carousel.addEventListener('touchstart', function () { stopAutoScroll(); }, { passive: true });
    carousel.addEventListener('touchend', function () { resumeAfterDelay(); }, { passive: true });

    // Only auto-scroll when visible
    if (!prefersReducedMotion) {
      var carouselObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            startAutoScroll();
          } else {
            stopAutoScroll();
          }
        });
      }, { threshold: 0.2 });
      carouselObserver.observe(carousel);
    }
  }

})();
