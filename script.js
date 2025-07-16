// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
const body = document.body;

toggle.addEventListener('change', () => {
  body.classList.toggle('dark');
  localStorage.setItem('darkMode', body.classList.contains('dark'));
});

if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark');
  toggle.checked = true;

}

tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  particles: {
    number: { value: 70 },
    size: { value: 4 },
    move: { enable: true, speed: 1.2 },
    color: { value: ["#6366f1", "#4338ca", "#7c3aed", "#a78bfa"] },
    links: {
      enable: true,
      color: "#7c3aed",
      distance: 120,
      opacity: 0.4
    }
  },
  background: { color: "transparent" }
});
