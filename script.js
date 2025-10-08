// Custom cursor with hover effects
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Add hover effect on clickable elements
document.querySelectorAll('a, button, .project-card, .service-card').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// Resume toggle function
function showColumn(columnId) {
  const columns = document.querySelectorAll('.resume-column');
  columns.forEach(col => col.classList.add('hidden'));
  document.getElementById(columnId).classList.remove('hidden');
}

// Open project links in new tab
function openProject(url) {
  window.open(url, '_blank');
}

// GSAP Animations
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Hero section animations
  gsap.from('.hero-text h1', {opacity: 0, y: 50, duration: 1, delay: 0.2, ease: "power3.out"});
  gsap.from('.hero-text p', {opacity: 0, y: 50, duration: 1, delay: 0.4, ease: "power3.out"});
  gsap.from('.social-links a', {opacity: 0, y: 20, duration: 1, delay: 0.6, stagger: 0.2, ease: "power3.out"});
  gsap.from('.hero-image img', {opacity: 0, scale: 0.8, duration: 1, delay: 0.8, ease: "power3.out"});

  // Section animations
  gsap.utils.toArray('section').forEach(section => {
    gsap.from(section.children, {
      scrollTrigger: {trigger: section, start: "top 85%"},
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
  });

  // Services cards animation
  gsap.utils.toArray('.service-card').forEach(card => {
    gsap.from(card, {
      scrollTrigger: {trigger: card, start: "top 90%"},
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });
  });

  // Projects cards animation
  gsap.utils.toArray('.project-card').forEach(card => {
    gsap.from(card, {
      scrollTrigger: {trigger: card, start: "top 90%"},
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });
  });

  // Contact form animation
  gsap.from('#contact form', {
    scrollTrigger: {trigger: '#contact', start: "top 85%"},
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out"
  });

  // Floating shapes parallax animation
  gsap.utils.toArray('.floating-shape').forEach(shape => {
    gsap.to(shape, {
      y: "+=50",
      repeat: -1,
      yoyo: true,
      duration: gsap.utils.random(5, 12),
      ease: "sine.inOut"
    });
  });
});


gsap.utils.toArray('.cert-card').forEach(card => {
  gsap.from(card, {
    scrollTrigger: {trigger: card, start: "top 90%"},
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out"
  });
});


const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
  constructor(){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
  }
  update(){
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.x > canvas.width) this.x = 0;
    if(this.x < 0) this.x = canvas.width;
    if(this.y > canvas.height) this.y = 0;
    if(this.y < 0) this.y = canvas.height;
  }
  draw(){
    ctx.fillStyle = 'rgba(0,0,0,0.1)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    ctx.fill();
  }
}

function initParticles(){
  particlesArray = [];
  for(let i=0; i<100; i++){
    particlesArray.push(new Particle());
  }
}
initParticles();

function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particlesArray.forEach(particle => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});



const heroText = document.querySelector('.hero-text p');
const bio = "Aspiring Associate Software Engineering Intern | Passionate about creating clean, efficient, and interactive web solutions";
let i = 0;
function typeText(){
  if(i < bio.length){
    heroText.innerHTML += bio.charAt(i);
    i++;
    setTimeout(typeText, 50); // typing speed
  }
}
typeText();


gsap.to('.hero-image img', {
  y: 50,
  scrollTrigger: {
    trigger: 'header',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  }
});
