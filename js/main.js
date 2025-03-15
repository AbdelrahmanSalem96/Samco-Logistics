// Toggle Language Button Text & Reload Page
function toggleLanguage() {
  const langBtn = document.getElementById("langToggle");
  const currentLang = document.documentElement.lang;
  // currentLang = "EN";
  if (currentLang === "ar") {
    document.documentElement.lang = "en";
    localStorage.setItem("lang", "en");
    langBtn.textContent = "عربي";
    document
      .getElementById("langToggle")
      .addEventListener("click", function () {
        updateNavigation("ar"); // Switch to Arabic
      });
  } else {
    document.documentElement.lang = "ar";
    localStorage.setItem("lang", "ar"); // Save preference
    langBtn.textContent = "عربي";
    document
      .getElementById("langToggle")
      .addEventListener("click", function () {
        updateNavigation("en"); // Switch to Arabic
      });
  }

  location.reload(); // Reload to apply changes
}

// Apply Saved Language on Page Load
document.addEventListener("DOMContentLoaded", function () {
  const savedLang = localStorage.getItem("lang") || "en";
  document.documentElement.lang = savedLang;

  const langBtn = document.getElementById("langToggle");
  langBtn.textContent = savedLang === "en" ? "عربي" : "EN";

  // updateNavigation(savedLang);
  updateTextContent(savedLang);
});

// toggle menu
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  toggleButton.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});

//  our service slider animation ---------------------
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
    slidesPerView: 3, // Show 3 slides at a time
    spaceBetween: 30, // Space between slides
    loop: true, // Enable infinite loop
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000, // Auto-slide every 3 seconds
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: { slidesPerView: 3 }, // Desktop: 3 slides
      768: { slidesPerView: 2 }, // Tablet: 2 slides
      480: { slidesPerView: 1 }, // Mobile: 1 slide
    },
  });
});

// testimonial slider

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".testimonial-slider", {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 400000000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 3 },
    },
  });
});

//  slider animation ---------------------
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".portfolio-slider", {
    slidesPerView: 3, // Show 3 slides at a time
    spaceBetween: 15, // Space between slides
    loop: true, // Enable infinite loop
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000, // Auto-slide every 3 seconds
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: { slidesPerView: 3 }, // Desktop: 3 slides
      768: { slidesPerView: 2 }, // Tablet: 2 slides
      480: { slidesPerView: 1 }, // Mobile: 1 slide
    },
  });
});

// team slider
//  slider animation ---------------------
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".team-swiper", {
    slidesPerView: 4, // Show 3 slides at a time
    spaceBetween: 45, // Space between slides
    loop: true, // Enable infinite loop
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 40000000, // Auto-slide every 3 seconds
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: { slidesPerView: 4 }, // Desktop: 3 slides
      768: { slidesPerView: 2 }, // Tablet: 2 slides
      480: { slidesPerView: 1 }, // Mobile: 1 slide
    },
  });
});

// Tap Menu -------------------------

document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove "active" class from all buttons
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Hide all tab panels and show the selected one
      tabPanels.forEach((panel) => panel.classList.remove("active"));
      document.getElementById(this.dataset.tab).classList.add("active");
    });
  });

  document.querySelector(".tab-btn .active")?.click();
});

//  blog section --------------------------

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".blog-swiper", {
    slidesPerView: 3, // Show 3 slides at a time
    spaceBetween: 30, // Space between slides
    loop: true, // Enable infinite loop
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 40000000, // Auto-slide every 3 seconds
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: { slidesPerView: 3 }, // Desktop: 3 slides
      768: { slidesPerView: 2 }, // Tablet: 2 slides
      480: { slidesPerView: 1 }, // Mobile: 1 slide
    },
  });
});
