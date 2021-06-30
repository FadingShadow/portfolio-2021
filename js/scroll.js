gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".right",
  {
    x: 500,
  },
  {
    scrollTrigger: {
      trigger: "#about",
      toggleActions: "restart reverse none none",
    },
    x: 0,
    duration: 1,
  }
);

gsap.fromTo(
  ".left",
  {
    x: -500,
  },
  {
    scrollTrigger: {
      trigger: "#about",
      toggleActions: "restart reverse none reverse",
    },
    x: 0,
    duration: 1,
  }
);

gsap.fromTo(
  ".left-container > *",
  {
    x: -1000,
  },
  {
    scrollTrigger: {
      trigger: "#skills",
      toggleActions: "restart reverse restart restart",
    },
    x: 0,
    stagger: 0.3,
    duration: 1,
  }
);

gsap.fromTo(
  ".right-container > *",
  {
    x: 1000,
  },
  {
    scrollTrigger: {
      trigger: "#skills",
      toggleActions: "restart reverse restart restart",
    },
    x: 0,
    stagger: 0.3,
    duration: 1,
  }
);
