let vantaEffect;

function initVanta(backgroundColor) {
  if (vantaEffect) {
    vantaEffect.destroy();
  }
  vantaEffect = VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x3f84f4, // This is the color of the lines
    backgroundColor: backgroundColor,
    points: 10.00,
    maxDistance: 25.00,
    spacing: 15.00
  });
}

// Initialize with default dark theme background
initVanta(0x0);
