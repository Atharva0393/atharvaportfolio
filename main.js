import './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ scrollTrigger: { markers: false } });

const reportError = (name, e) => {
  if (document.getElementById('error-overlay')) return;
  const errDiv = document.createElement('div');
  errDiv.id = 'error-overlay';
  errDiv.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:red;color:white;z-index:999999;padding:2rem;font-size:2rem;overflow:auto;';
  errDiv.innerHTML = `<strong>Error in ${name}</strong><br><pre>${e.stack}</pre>`;
  document.body.appendChild(errDiv);
};

try {
  // 1. Lenis (Highly Responsive Premium Paper)
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    smooth: true,
    mouseMultiplier: 1.2,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => { lenis.raf(time * 1000); });
  gsap.ticker.lagSmoothing(0, 0);

  // 2. Lens of Intention
  const lens = document.getElementById('lens');
  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  let lensX = mouseX, lensY = mouseY;
  window.addEventListener('mousemove', (e) => { 
    mouseX = e.clientX; mouseY = e.clientY; 
    
    // Luxury Parallax
    const px = (mouseX / window.innerWidth) - 0.5;
    const py = (mouseY / window.innerHeight) - 0.5;
    
    // Background moves slightly opposite
    document.documentElement.style.setProperty('--bg-x', `${px * -15}px`);
    document.documentElement.style.setProperty('--bg-y', `${py * -15}px`);
    
    // Headline moves slightly with the mouse
    document.documentElement.style.setProperty('--hl-x', `${px * 20}px`);
    document.documentElement.style.setProperty('--hl-y', `${py * 20}px`);
  });
  gsap.ticker.add(() => {
    lensX += (mouseX - lensX) * 0.25;
    lensY += (mouseY - lensY) * 0.25;
    lens.style.transform = `translate(calc(${lensX}px - 50%), calc(${lensY}px - 50%))`;
  });
  const focusSelectors = 'h1, h2, h3, h4, img, .return-email, .placeholder-block, .human-fragment, a';
  document.querySelectorAll(focusSelectors).forEach(el => {
    el.addEventListener('mouseenter', () => lens.classList.add('active'));
    el.addEventListener('mouseleave', () => lens.classList.remove('active'));
  });

  // 3. Cinematic Orchestration
  window.addEventListener('DOMContentLoaded', () => {
    try {
      // VANILLA JS SEQUENCE TO BYPASS GSAP BUG
      setTimeout(() => {
        const veil = document.getElementById('loader-veil');
        veil.style.transition = 'opacity 2s ease-in-out';
        veil.style.opacity = '0';
        setTimeout(() => { veil.style.display = 'none'; }, 2000);

        const bg = document.querySelector('.hero-bg');
        const headlines = document.querySelectorAll('.seq-headline');
        const subtitle = document.querySelector('.seq-subtitle');
        const metadata = document.querySelectorAll('.seq-metadata');

        // Initial states
        headlines.forEach(el => el.style.transform = 'translateY(15px)');
        if (subtitle) subtitle.style.transform = 'translateY(10px)';
        metadata.forEach(el => el.style.transform = 'translateY(10px)');

        // 1. Background naturally reveals (0-2000ms)
        if (bg) {
          bg.style.transition = 'opacity 2.5s ease-out';
          bg.style.opacity = '1';
        }

        // 2. Headline reveals smoothly (at 1000ms)
        setTimeout(() => {
          headlines.forEach((el, i) => {
            setTimeout(() => {
              el.style.transition = 'opacity 2.5s cubic-bezier(0.16, 1, 0.3, 1), transform 2.5s cubic-bezier(0.16, 1, 0.3, 1)';
              el.style.opacity = '1';
              el.style.transform = 'translateY(0px)';
            }, i * 300); // slight stagger between greeting and main title
          });
        }, 1000);

        // 3. Subtitle (at 1600ms)
        setTimeout(() => {
          if (subtitle) {
            subtitle.style.transition = 'opacity 2s ease-out, transform 2s ease-out';
            subtitle.style.opacity = '1';
            subtitle.style.transform = 'translateY(0px)';
          }
        }, 1600);

        // 4. Metadata quietly fades in (at 2200ms)
        setTimeout(() => {
          metadata.forEach((el, i) => {
            setTimeout(() => {
              el.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out';
              el.style.opacity = '1';
              el.style.transform = 'translateY(0px)';
            }, i * 150);
          });
        }, 2200);
      }, 500);

      // Micro Interaction: Subtle physical parallax
      const heroSection = document.querySelector('.ch-gallery');
      const heroBg = document.querySelector('.hero-bg');
      const heroHeadlineArea = document.querySelector('.hero-headline-area');
      let mouseX = 0; let mouseY = 0;
      let currX = 0; let currY = 0;
      
      if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
          mouseX = (e.clientX / window.innerWidth) - 0.5; // -0.5 to 0.5
          mouseY = (e.clientY / window.innerHeight) - 0.5;
        });
        
        const renderParallax = () => {
          currX += (mouseX - currX) * 0.05;
          currY += (mouseY - currY) * 0.05;
          if (heroBg) {
            heroBg.style.setProperty('--bg-x', `${currX * 10}px`); 
            heroBg.style.setProperty('--bg-y', `${currY * 10}px`);
          }
          if (heroHeadlineArea) {
            heroHeadlineArea.style.setProperty('--hl-x', `${-currX * 4}px`);
            heroHeadlineArea.style.setProperty('--hl-y', `${-currY * 4}px`);
          }
          requestAnimationFrame(renderParallax);
        };
        renderParallax();
      }

      // 14. Scroll Transition: Entering the film (VANILLA JS BYPASS)
      ScrollTrigger.create({
        trigger: '.ch-gallery',
        start: 'top top',
        end: 'bottom top',
        onUpdate: (self) => {
          const p = self.progress;
          
          const bg = document.querySelector('.hero-bg');
          if (bg) bg.style.transform = `scale(${1.0 + (p * 0.10)}) translateZ(0)`;
          
          const bloom = document.querySelector('.hero-bloom');
          if (bloom) {
            bloom.style.opacity = `${0.15 + (p * 0.65)}`;
            bloom.style.transform = `scale(${1 + (p * 0.2)})`;
          }
          
          const hl = document.querySelector('.hero-headline-area');
          if (hl) {
            const hlP = Math.max(0, (p - 0.1) / 0.9);
            hl.style.transform = `translate(var(--hl-x, 0px), var(--hl-y, 0px)) translateY(${hlP * 40}%)`;
            hl.style.opacity = `${1 - hlP}`;
          }
          
          const metas = document.querySelectorAll('.seq-metadata');
          metas.forEach(m => {
            m.style.transform = `translateY(${-p * 50}%)`;
            m.style.opacity = `${1 - p}`;
          });
        }
      });
      
    } catch(e) { reportError("loadTl Native", e); }

    // Selected Work Animations
    try {
      gsap.utils.toArray('.sw-anim').forEach((el, i) => {
        gsap.fromTo(el, 
          { opacity: 0, y: 40 }, 
          { scrollTrigger: { trigger: el, start: 'top 85%' }, opacity: 1, y: 0, duration: 1.2, ease: 'power2.out', delay: i * 0.1 }
        );
      });
    } catch(e) { reportError("Selected Work GSAP", e); }

    // Final Reflection Animation
    try {
      gsap.utils.toArray('.final-anim').forEach(el => {
        gsap.fromTo(el, 
          { opacity: 0, scale: 0.95 }, 
          { scrollTrigger: { trigger: el, start: 'top 80%' }, opacity: 1, scale: 1, duration: 2, ease: 'power2.out' }
        );
      });
    } catch(e) { reportError("Final Reflection GSAP", e); }
  });

  window.addEventListener('load', () => {
    ScrollTrigger.refresh();

    // Smooth scroll for anchor links using Lenis
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target && lenis) {
          lenis.scrollTo(target, { offset: 0, duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        }
      });
    });
  });
} catch(e) {
  reportError("Global GSAP Setup", e);
}
