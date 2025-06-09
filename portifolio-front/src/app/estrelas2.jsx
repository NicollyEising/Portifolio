import { useEffect, useRef } from "react";

const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");
    const particles = {};
    let particleIndex = 0;
    const particleNum = 5;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function getRainbowColor() {
      const hue = Math.floor(Math.random() * 360); // 0 a 360 graus
      const saturation = 80; // saturação alta para cores vibrantes
      const lightness = 70; // claro para cores pastel
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }

    function Particle() {
      const random_x = Math.floor(Math.random() * canvas.width);
      const random_y = Math.floor(Math.random() * canvas.height);

      this.x = random_x;
      this.y = random_y;
      this.vx = 0;
      this.vy = 0;
      this.gravity = 0;
      particleIndex++;
      particles[particleIndex] = this;
      this.id = particleIndex;
      this.life = 0;
      this.size = Math.random() * 6 - 2;
      this.maxlife = Math.random() * 80 + 20;
      this.color = getRainbowColor();
    }

    Particle.prototype.draw = function () {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += this.gravity;
      this.life++;
      if (this.life >= this.maxlife) {
        delete particles[this.id];
      }
      c.fillStyle = this.color;
      c.fillRect(this.x, this.y, this.size, this.size);
    };

    const intervalId = setInterval(() => {
      c.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particleNum; i++) {
        new Particle();
      }
      for (const i in particles) {
        particles[i].draw();
      }
    }, 30);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="motion"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default ParticleCanvas;
