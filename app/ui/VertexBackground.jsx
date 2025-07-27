"use client"; // Only needed if using Next.js App Router

import { useEffect, useRef } from "react";

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function createParticle(width, height) {
  return {
    x: randomInRange(0, width),
    y: randomInRange(0, height),
    angle: randomInRange(0, 365),
    speed: randomInRange(0.1, 0.15),
    size: 0.5 + Math.random() * 1.3,
  };
}

function requiredParticleCount(width) {
  return Math.trunc(Math.sqrt(width) * 1.5);
}

function requiredLineLength(width) {
  return width / 20 + 100;
}

export default function VertexBackground({
  className,
  color = "rgba(255, 255, 255, 0.1)",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = [];
    for (let i = 0; i < requiredParticleCount(canvas.width); i++) {
      particles.push(createParticle(canvas.width, canvas.height));
    }

    let mouseX = 0;
    let mouseY = 0;
    let mousePressed = false;

    const updateMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      mousePressed = (e.buttons & 1) === 1;
    };

    const isTouch = "ontouchstart" in window;
    if (!isTouch) {
      window.addEventListener("mousemove", updateMouse);
      window.addEventListener("mousedown", updateMouse);
      window.addEventListener("mouseup", updateMouse);
    }

    let frameId;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const maxDistance = requiredLineLength(canvas.width);

      if (mousePressed) {
        const speed = 0.15;
        for (const p of particles) {
          const slope = (mouseY - p.y) / (mouseX - p.x);
          const delta = Math.sqrt(speed ** 2 / (slope ** 2 + 1));
          p.x += delta * (mouseX >= p.x ? 1 : -1);
          p.y += delta * (mouseY >= p.y ? 1 : -1);
        }
      }

      for (const p of particles) {
        for (const p2 of particles) {
          if (p.x > p2.x) continue;
          const dist = Math.hypot(p2.x - p.x, p2.y - p.y);
          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = color; // Cyan with 30% opacity
            ctx.lineWidth = 1.3;
            ctx.stroke();
          }
        }

        p.x += p.speed * Math.sin(p.angle);
        p.y += p.speed * Math.cos(p.angle);

        if (p.x > canvas.width) p.x = 0;
        if (p.y > canvas.height) p.y = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y < 0) p.y = canvas.height;
      }

      if (mouseX && mouseY) {
        const pMouse = { x: mouseX, y: mouseY, angle: 0, speed: 0, size: 0 };
        for (const p2 of particles) {
          const dist = Math.hypot(p2.x - pMouse.x, p2.y - pMouse.y);
          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(pMouse.x, pMouse.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = color; // Cyan with 30% opacity
            ctx.lineWidth = 1.3;
            ctx.stroke();
          }
        }
      }

      frameId = requestAnimationFrame(draw);
    };

    frameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", updateMouse);
      window.removeEventListener("mousedown", updateMouse);
      window.removeEventListener("mouseup", updateMouse);
    };
  }, []);

  return <canvas ref={canvasRef} className={className || ""} />;
}
