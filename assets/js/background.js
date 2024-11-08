const canvas = document.getElementById("background-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
gradient.addColorStop(0, "#4e2a84"); 
gradient.addColorStop(1, "#2f0138"); 
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);
let stars = [];
function createStar() {
  const star = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    alpha: Math.random() * 0.5 + 0.5,
    speed: Math.random() * 0.5 + 0.1,
  };
  stars.push(star);
}
function updateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); 
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  stars.forEach((star, index) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();
    star.alpha += Math.random() * 0.02 - 0.01;
    if (star.alpha < 0.1 || star.alpha > 0.8) {
      star.alpha = Math.random() * 0.5 + 0.5; 
    }
  });
}
function animate() {
  updateStars();
  requestAnimationFrame(animate);
}
for (let i = 0; i < 200; i++) createStar();
animate();
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});