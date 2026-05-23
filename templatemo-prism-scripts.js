// JavaScript Document

/*

TemplateMo 600 Prism Flux

https://templatemo.com/tm-600-prism-flux

*/

// Portfolio data for carousel

const portfolioData = [
  {
    id: 1,
    title: "Chery Arrizo 5 (2025)",
    description:
      "Highlights: Sleek design, modern infotainment, strong value for money.",
    image: "images/Chery Arrizo 5 (2025).webp",
    tech: ["Engine: 1.5L", "Transmission: CVT", "Power: 114 hp"],
  },
  {
    id: 2,
    title: "Nissan Sunny (2025)",
    description: "Reliable, low maintenance, very popular in Egypt.",
    image: "images/Nissan Sunny (2025).webp",
    tech: ["Engine: 1.5L", "Transmission: Automatic", "Power: 108 hp"],
  },
  {
    id: 3,
    title: "Renault Taliant (2025)",
    description:
      "Modern interior, great fuel efficiency, stylish European feel.",
    image: "images/Renault Taliant (2025).jpg",
    tech: ["Engine: 1.0L Turbo", "Transmission: CVT", "Power: 100 hp"],
  },
  {
    id: 4,
    title: "Fiat Tipo (2025)",
    description: "Elegant look, comfortable ride, practical family car.",
    image: "images/Fiat Tipo (2025).webp",
    tech: ["Engine: 1.4L", "Transmission: Automatic", "Power: 95 hp"],
  },
  {
    id: 5,
    title: "Hyundai Accent RB (2025)",
    description: "Proven performance, trusted brand, great resale value.",
    image: "images/Hyundai Accent RB (2025).webp",
    tech: ["Engine: 1.6L", "Transmission: Automatic", "Power: 123 hp"],
  },
  {
    id: 6,
    title: "BAIC U5 Plus (2025)",
    description: "Tech-loaded cabin, bold design, ideal for city driving.",
    image: "images/BAIC U5 Plus (2025).webp",
    tech: ["Engine: 1.5L", "Transmission: CVT", "Power: 113 hp"],
  },
  {
    id: 7,
    title: "Suzuki Ciaz (2024)",
    description:
      "Spacious interior, economical, great comfort for long drives.",
    image: "images/Suzuki Ciaz (2024).webp",
    tech: ["Engine: 1.5L", "Transmission: Automatic", "Power: 104 hp"],
  },
  {
    id: 8,
    title: "MG ZS (2026)",
    description: "Premium design, strong tech features, modern LED lighting.",
    image: "images/MG ZS (2026).webp",
    tech: ["Engine: 1.5L Turbo", "Transmission: Automatic", "Power: 160 hp"],
  },
  {
    id: 9,
    title: "Hyundai Elantra CN7 (2025)",
    description: "Sporty design, digital cockpit, premium comfort.",
    image: "images/Hyundai Elantra CN7 (2025).webp",
    tech: ["Engine: 1.6L", "Transmission: Automatic", "Power: 126 hp"],
  },
  {
    id: 10,
    title: "Toyota Corolla (2026)",
    description: "Legendary reliability, hybrid option, refined interior.",
    image: "images/Toyota Corolla (2026).webp",
    tech: ["Engine: 1.6L", "Transmission: CVT", "Power: 120 hp"],
  },
];

// motors data
const motorsdata = [
  {
    name: "Toyota Corolla 2025",
    category: "A",
    price_egp: `1450000 $`,
    image: "images/Toyota Corolla (2026).webp",
  },
  {
    name: "BMW 3 Series 2025",
    category: "A",
    price_egp: `4100000 $`,
    image: "images/BMW-3-Series-Exterior-2501.webp",
  },
  {
    name: "Mercedes-Benz C-Class 2025",
    category: "A",
    price_egp: `4600000 $`,
    image: "images/24-Mercedes-Benz-C-Class-akron.jpg",
  },
  {
    name: "Hyundai Elantra 2025",
    category: "B",
    price_egp: ` 1150000 $ `,
    image: "images/Hyundai Elantra CN7 (2025).webp",
  },
  {
    name: "Nissan Sunny 2025",
    category: "B",
    price_egp: `1150000 $`,
    image: "images/Nissan Sunny (2025).webp",
  },
  {
    name: "Kia K5 2025",
    category: "B",
    price_egp: `1100000 $`,
    image: "images/2025-kia-k5-103-65c52244650c2.jpg",
  },
  {
    name: "Chery Arrizo 5 2025",
    category: "C",
    price_egp: ` 950000 $`,
    image: "images/Chery Arrizo 5 (2025).webp",
  },
  {
    name: "Fiat Tipo 2025",
    category: "C",
    price_egp: `4200000 $`,
    image: "images/Fiat Tipo (2025).webp",
  },
  {
    name: "Volkswagen Tiguan 2025",
    category: "C",
    price_egp: `2000000 $`,
    image:
      "images/aCx9aSdWJ-7kSWE-_VolkswagenTiguan2025exteriorfrontviewdrivinghero.jpg",
  },
  {
    name: "Ford Mustang 2025",
    category: "C",
    price_egp: `3500000 $`,
    image: "images/Ford Mustang 2025.jpg",
  },
  {
    name: "Renault Taliant 2025",
    category: "D",
    price_egp: `850000 $`,
    image: "images/Renault Taliant (2025).jpg",
  },
];

// Scroll to section function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  const header = document.getElementById("header");
  if (section) {
    const headerHeight = header.offsetHeight;
    const targetPosition = section.offsetTop - headerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}

// Initialize particles for philosophy section
function initParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 15;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    // Random horizontal position
    particle.style.left = Math.random() * 100 + "%";

    // Start particles at random vertical positions throughout the section
    particle.style.top = Math.random() * 100 + "%";

    // Random animation delay for natural movement
    particle.style.animationDelay = Math.random() * 20 + "s";

    // Random animation duration for variety
    particle.style.animationDuration = 18 + Math.random() * 8 + "s";

    particlesContainer.appendChild(particle);
  }
}

// Initialize carousel
let currentIndex = 0;
const carousel = document.getElementById("carousel");
const indicatorsContainer = document.getElementById("indicators");

function createCarouselItem(data, index) {
  const item = document.createElement("div");
  item.className = "carousel-item";
  item.dataset.index = index;

  const techBadges = data.tech
    .map((tech) => `<span class="tech-badge">${tech}</span>`)
    .join("");

  item.innerHTML = `
                <div class="card">
                    <div class="card-number">0${data.id}</div>
                    <div class="card-image">
                        <img src="${data.image}" alt="${data.title}">
                    </div>
                    <h3 class="card-title">${data.title}</h3>
                    <p class="card-description">${data.description}</p>
                    <div class="card-tech">${techBadges}</div>
                    <button class="card-cta" onclick="scrollToSection('about')">Explore</button>
                </div>
            `;

  return item;
}

function initCarousel() {
  // Create carousel items
  portfolioData.forEach((data, index) => {
    const item = createCarouselItem(data, index);
    carousel.appendChild(item);

    // Create indicator
    const indicator = document.createElement("div");
    indicator.className = "indicator";
    if (index === 0) indicator.classList.add("active");
    indicator.dataset.index = index;
    indicator.addEventListener("click", () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
  });

  updateCarousel();
}

function updateCarousel() {
  const items = document.querySelectorAll(".carousel-item");
  const indicators = document.querySelectorAll(".indicator");
  const totalItems = items.length;
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 1024;

  items.forEach((item, index) => {
    // Calculate relative position
    let offset = index - currentIndex;

    // Wrap around for continuous rotation
    if (offset > totalItems / 2) {
      offset -= totalItems;
    } else if (offset < -totalItems / 2) {
      offset += totalItems;
    }

    const absOffset = Math.abs(offset);
    const sign = offset < 0 ? -1 : 1;

    // Reset transform
    item.style.transform = "";
    item.style.opacity = "";
    item.style.zIndex = "";
    item.style.transition = "all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)";

    // Adjust spacing based on screen size
    let spacing1 = 400;
    let spacing2 = 600;
    let spacing3 = 750;

    if (isMobile) {
      spacing1 = 280; // Was 400, now 100px closer
      spacing2 = 420; // Was 600, now 180px closer
      spacing3 = 550; // Was 750, now 200px closer
    } else if (isTablet) {
      spacing1 = 340;
      spacing2 = 520;
      spacing3 = 650;
    }

    if (absOffset === 0) {
      // Center item
      item.style.transform = "translate(-50%, -50%) translateZ(0) scale(1)";
      item.style.opacity = "1";
      item.style.zIndex = "10";
    } else if (absOffset === 1) {
      // Side items
      const translateX = sign * spacing1;
      const rotation = isMobile ? 25 : 30;
      const scale = isMobile ? 0.88 : 0.85;
      item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-200px) rotateY(${
        -sign * rotation
      }deg) scale(${scale})`;
      item.style.opacity = "0.8";
      item.style.zIndex = "5";
    } else if (absOffset === 2) {
      // Further side items
      const translateX = sign * spacing2;
      const rotation = isMobile ? 35 : 40;
      const scale = isMobile ? 0.75 : 0.7;
      item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-350px) rotateY(${
        -sign * rotation
      }deg) scale(${scale})`;
      item.style.opacity = "0.5";
      item.style.zIndex = "3";
    } else if (absOffset === 3) {
      // Even further items
      const translateX = sign * spacing3;
      const rotation = isMobile ? 40 : 45;
      const scale = isMobile ? 0.65 : 0.6;
      item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-450px) rotateY(${
        -sign * rotation
      }deg) scale(${scale})`;
      item.style.opacity = "0.3";
      item.style.zIndex = "2";
    } else {
      // Hidden items (behind)
      item.style.transform =
        "translate(-50%, -50%) translateZ(-500px) scale(0.5)";
      item.style.opacity = "0";
      item.style.zIndex = "1";
    }
  });

  // Update indicators
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % portfolioData.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex =
    (currentIndex - 1 + portfolioData.length) % portfolioData.length;
  updateCarousel();
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

// Initialize hexagonal motors grid
function initmotorsGrid() {
  const motorsGrid = document.getElementById("motorsGrid");
  const categoryTabs = document.querySelectorAll(".category-tab");

  function displaymotors(category = "all") {
    motorsGrid.innerHTML = "";

    const filteredmotors =
      category === "all"
        ? motorsdata
        : motorsdata.filter((motors) => motors.category === category);

    filteredmotors.forEach((motors, index) => {
      const hexagon = document.createElement("div");
      hexagon.className = "motors-hexagon";
      hexagon.style.animationDelay = `${index * 0.1}s`;

      hexagon.innerHTML = `
                        <div class="hexagon-inner">
                            <div class="hexagon-content">
                                <div class="motors-image-hex"><img src="${motors.image}" alt="${motors.name}"></div>
                                <div class="motors-name-hex">${motors.name}</div>
                                <div class="motors-price-hex">${motors.price_egp}</div>
                            </div>
                        </div>
                    `;

      motorsGrid.appendChild(hexagon);
    });
  }

  categoryTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      categoryTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      displaymotors(tab.dataset.category);
    });
  });

  displaymotors();
}

// Event listeners
document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);

// Auto-rotate carousel
setInterval(nextSlide, 5000);

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});

// Update carousel on window resize
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    updateCarousel();
  }, 250);
});

// Initialize on load
initCarousel();
initmotorsGrid();
initParticles();

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// Header scroll effect
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Smooth scrolling and active navigation
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const headerHeight = header.offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Close mobile menu if open
      navMenu.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });
});

// Update active navigation on scroll
function updateActiveNav() {
  const scrollPosition = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        const href = link.getAttribute("href").substring(1);
        if (href === sectionId) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", updateActiveNav);

// Animated counter for stats
function animateCounter(element) {
  const target = parseInt(element.dataset.target);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const counter = setInterval(() => {
    current += step;
    if (current >= target) {
      element.textContent = target;
      clearInterval(counter);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Intersection Observer for stats animation
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const statNumbers = entry.target.querySelectorAll(".stat-number");
      statNumbers.forEach((number) => {
        if (!number.classList.contains("animated")) {
          number.classList.add("animated");
          animateCounter(number);
        }
      });
    }
  });
}, observerOptions);

const statsSection = document.querySelector(".stats-section");
if (statsSection) {
  observer.observe(statsSection);
}

// Form submission
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);

  // Show success message
  alert(
    `Thank you ${data.name}! Your message has been transmitted successfully. We'll respond within 24 hours.`
  );

  // Reset form
  contactForm.reset();
});

// Loading screen
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
  }, 1500);
});

// Add parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".hero");
  if (parallax) {
    parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});
