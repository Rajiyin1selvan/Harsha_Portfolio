// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // GSAP Animation for Title
    gsap.from(".cyber-title", {
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: "power2.out",
        delay: 0.2,
    });

    // Navigation Links Animation
    gsap.from(".nav-list li", {
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.2, // Adds delay between each link animation
        ease: "power2.out",
    });

    // Section Headings Animation
    gsap.from("h2", {
        scrollTrigger: {
            trigger: "h2",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        duration: 1,
        opacity: 0,
        x: -50,
        ease: "power2.out",
    });

    // Project Cards Animation
    gsap.from(".project-card", {
        scrollTrigger: {
            trigger: ".projects",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.3, // Adds delay between each project card
        ease: "power2.out",
    });

    // Contact Icons Animation
    gsap.from(".contact-icons a", {
        scrollTrigger: {
            trigger: ".contact-icons",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        duration: 1,
        opacity: 0,
        scale: 0.5,
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)", // Elastic bounce effect
    });

    // Floating Background Animation
    gsap.to(".background", {
        duration: 10,
        backgroundPosition: "200% 200%",
        ease: "linear",
        repeat: -1, // Infinite loop
    });
});
