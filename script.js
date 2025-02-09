document.querySelectorAll(".menu-item").forEach((item) => {
  let description = item.querySelector(".item-description");

  item.addEventListener("mouseenter", () => {
      gsap.to(description, {
          opacity: 1,
          y: -20,  
          duration: 0.5,
          ease: "power2.out"
      });
  });

  item.addEventListener("mouseleave", () => {
      gsap.to(description, {
          opacity: 0,
          y: 20,  
          duration: 0.5,
          ease: "power2.in"
      });
  });
});

gsap.from(".about-text", {
  scrollTrigger: {
      trigger: ".about-us",
      start: "top 80%",
      end: "top 50%",
      scrub: true
  },
  opacity: 0,
  y: 50,
  duration: 1
});

gsap.from(".about-image", {
  scrollTrigger: {
      trigger: ".about-us",
      start: "top 80%",
      end: "top 50%",
      scrub: true
  },
  opacity: 0,
  x: 50,
  duration: 1
});

gsap.from(".service-box", {
  scrollTrigger: {
      trigger: ".services",
      start: "top 80%",
      end: "top 40%",
      scrub: true,
  },
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1,
});

gsap.from("footer", {
  scrollTrigger: {
      trigger: "footer",
      start: "top 90%",
      end: "top 70%",
      scrub: true,
  },
  opacity: 0,
  y: 50,
  duration: 1.5,
});

gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
      scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "top 60%",
          scrub: true,
      },
      opacity: 0,
      y: 50,
      duration: 1.5,
  });
});

document.addEventListener("DOMContentLoaded", function () {

  gsap.from("nav", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power3.out"
  });

  gsap.from(".m1 h1", {
    duration: 1.2,
    x: -100,
    opacity: 0,
    ease: "power3.out",
  });

  gsap.from(".m1 h2", {
    duration: 1.2,
    x: 100,
    opacity: 0,
    ease: "power3.out",
    delay: 0.3,
  });

  gsap.from(".m2 img", {
    duration: 1.2,
    scale: 0.8,
    opacity: 0,
    ease: "power3.out",
    delay: 0.5,
  });

  gsap.from(".bestsellers h1", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
  });

  gsap.from(".menu-item", {
    duration: 1.2,
    y: 100,
    opacity: 0,
    ease: "power3.out",
    stagger: 0.2,
  });

  gsap.from(".about-text", {
    duration: 1.2,
    x: -100,
    opacity: 0,
    ease: "power3.out",
  });

  gsap.from(".about-image", {
    duration: 1.2,
    x: 100,
    opacity: 0,
    ease: "power3.out",
    delay: 0.3,
  });

  gsap.from(".services h1", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
  });

  gsap.from(".service-box", {
    duration: 1.2,
    scale: 0.8,
    opacity: 0,
    ease: "power3.out",
    stagger: 0.2,
  });

  gsap.from(".footer-container", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: "power3.out",
  });
});
