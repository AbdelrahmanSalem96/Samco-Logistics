// Toggle Language Button Text & Reload Page
function toggleLanguage() {
  const langBtn = document.getElementById("langToggle");
  const currentLang = document.documentElement.lang;

  if (currentLang === "ar") {
    document.documentElement.lang = "en";
    localStorage.setItem("lang", "en");
    langBtn.textContent = "عربي";
    document.documentElement.classList.remove("rtl"); // Remove RTL class
  } else {
    document.documentElement.lang = "ar";
    localStorage.setItem("lang", "ar");
    langBtn.textContent = "EN";
    document.documentElement.classList.add("rtl"); // Add RTL class
  }

  location.reload(); // Reload to apply changes
}

// Apply Saved Language on Page Load
document.addEventListener("DOMContentLoaded", function () {
  const savedLang = localStorage.getItem("lang") || "en";
  document.documentElement.lang = savedLang;

  const langBtn = document.getElementById("langToggle");
  langBtn.textContent = savedLang === "en" ? "عربي" : "EN";

  if (savedLang === "ar") {
    document.documentElement.classList.add("rtl"); // Apply RTL on Arabic
  } else {
    document.documentElement.classList.remove("rtl"); // Remove RTL on English
  }

  updateTextContent(savedLang);
});


// toggle read
function toggleReadMore() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("readMoreBtn");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    dots.style.display = "none";
    btnText.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    dots.style.display = "inline";
    btnText.textContent = "Read More";
  }
}

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
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      }, // Desktop: 3 slides
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      }, // Tablet: 2 slides
      480: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      0: {
        slidesPerView: 1,
      }, // Mobile: 1 slide
    },
  });
});

// testimonial slider

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".testimonial-slider", {
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
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      }, // Desktop: 3 slides
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      }, // Tablet: 2 slides
      480: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      0: {
        slidesPerView: 1,
      }, // Mobile: 1 slide
    },
  });
});

//  portfolio-slider ---------------------
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
      1024: {
        slidesPerView: 3,
      }, // Desktop: 3 slides
      768: {
        slidesPerView: 2,
      }, // Tablet: 2 slides
      480: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      }, // Mobile: 1 slide
    },
  });
});

// team slider
//  slider animation ---------------------
// document.addEventListener("DOMContentLoaded", function () {
//   new Swiper(".team-swiper", {
//     slidesPerView: 4, // Show 3 slides at a time
//     spaceBetween: 45, // Space between slides
//     loop: true, // Enable infinite loop
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     autoplay: {
//       delay: 40000000, // Auto-slide every 3 seconds
//       disableOnInteraction: false,
//     },
//     breakpoints: {
//       1024: { slidesPerView: 4 }, // Desktop: 3 slides
//       768: { slidesPerView: 2 }, // Tablet: 2 slides
//       480: { slidesPerView: 1 }, // Mobile: 1 slide
//     },
//   });
// });

// Tap Menu -------------------------

// document.addEventListener("DOMContentLoaded", function () {
//   const tabButtons = document.querySelectorAll(".tab-btn");
//   const tabPanels = document.querySelectorAll(".tab-panel");

//   tabButtons.forEach((button) => {
//     button.addEventListener("click", function () {
//       // Remove "active" class from all buttons
//       tabButtons.forEach((btn) => btn.classList.remove("active"));
//       this.classList.add("active");

//       // Hide all tab panels and show the selected one
//       tabPanels.forEach((panel) => panel.classList.remove("active"));
//       document.getElementById(this.dataset.tab).classList.add("active");
//     });
//   });

//   document.querySelector(".tab-btn .active")?.click();
// });

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
      delay: 4000, // Auto-slide every 3 seconds
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: { slidesPerView: 3 }, // Desktop: 3 slides
      768: { slidesPerView: 2 }, // Tablet: 2 slides
      480: { slidesPerView: 1 },
      0: { slidesPerView: 1 },// Mobile: 1 slide
    },
  });
});
