gsap.from(".project-card", {
    x: -320,
    opacity: 0,
    duration: 1,
    scrollTrigger: "#project-card"
})
gsap.from("#projects h2", {
    y: 40,
    opacity: 0,
    duration: 1,
    scrollTrigger: '#projects h2'
})
gsap.from("#about h2", {
    y: 40,
    opacity: 0,
    duration: 1,
    scrollTrigger: '#about h2'
})
gsap.from("#about p", {
    x: 320,
    opacity: 0,
    duration: 1,
    scrollTrigger: '#about p'
})
gsap.from(".logo", {
    x: -60,
    duration: 0.85,
    delay: 0.1

})
gsap.from("#navLinks li", {
    y: 38,
    opacity: 0,
    duration: 0.85,
    delay: 0.1,
    stagger: 0.25

})
