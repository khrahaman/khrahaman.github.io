// Keep the footer year current
document.getElementById("year").textContent = new Date().getFullYear();

// Stop the diagram's moving packets for visitors who prefer reduced motion
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const svg = document.querySelector(".hero-figure svg");
  if (svg && svg.pauseAnimations) svg.pauseAnimations();
}
