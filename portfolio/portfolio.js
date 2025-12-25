
console.log("Portfolio of Ensar Gashi loaded successfully!");

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
// ===== TYPING EFFECT =====
const typedText = document.getElementById("typed-text");
const words = ["Web Developer", "Web Designer", "Programmer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typedText.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  } else {
    typedText.textContent = currentWord.substring(0, charIndex++);
    if (charIndex === currentWord.length + 2) {
      isDeleting = true;
    }
  }
  setTimeout(typeEffect, isDeleting ? 70 : 120);
}

typeEffect();
// Typing Effect eg
const typedWordsEg = ["Web Developer", "Programmer", "Tech Enthusiast"];
let wordIndexEg = 0;
let charIndexEg = 0;
const typedElementEg = document.getElementById("typed-eg");

// ===== COUNTER ANIMATION =====
const counters = document.querySelectorAll('.counter');
let counterStarted = false;

function startCounter() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const increment = target / 80;

    const updateCounter = () => {
      count += increment;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

window.addEventListener('scroll', () => {
  const statsSection = document.getElementById('statistics');
  const sectionTop = statsSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 100 && !counterStarted) {
    startCounter();
    counterStarted = true;
  }
});
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if(window.scrollY > 300){ // shfaqet kur scroll > 300px
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
// ===== SKILLS PROGRESS ANIMATION =====
const progressBars = document.querySelectorAll('.progress-bar');
let skillsAnimated = false;

function animateProgress() {
  if (skillsAnimated) return; // vetëm një herë
  progressBars.forEach(bar => {
    const value = parseInt(bar.getAttribute('data-progress'));
    bar.style.width = value + '%';
    let counter = 0;
    const interval = setInterval(() => {
      if (counter >= value) {
        clearInterval(interval);
      } else {
        bar.textContent = `${counter}%`;
        counter++;
      }
    }, 15);
  });
  skillsAnimated = true;
}

// Run animation kur faqja scroll tek skills
window.addEventListener('scroll', () => {
  const skillsSection = document.getElementById('skills-progress');
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;
  if(sectionPos < screenPos){
    animateProgress();
  }
});

/* ===== PARTICLES EFFECT ===== */
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 50,
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#38bdf8" },
    "shape": { "type": "circle" },
    "opacity": {
      "value": 0.5,
      "random": true
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 120,
      "color": "#38bdf8",
      "opacity": 0.3,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});
/* ===== PARTICLES ===== */
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#38bdf8" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5, "random": true },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": true, "distance": 120, "color": "#38bdf8", "opacity": 0.3, "width": 1 },
    "move": { "enable": true, "speed": 1.5, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
  },
  "interactivity": {
    "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } },
    "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } }, "push": { "particles_nb": 4 } }
  },
  "retina_detect": true
});

// Renderer
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

// Light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 7);
scene.add(light);

const ambient = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambient);



// Mouse movement
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (event) => {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Animate
function animate() {
  requestAnimationFrame(animate);

 
  renderer.render(scene, camera);
}

animate();

// Resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
camera.position.set(0, 1.2, 3);
