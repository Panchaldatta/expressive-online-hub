
import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create floating elements
    const elements: FloatingElement[] = [];
    const numberOfElements = 25;
    const colors = ['#ececec', '#e0e0e0', '#d4d4d4', '#c8c8c8'];

    class FloatingElement {
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      speedX: number;
      speedY: number;
      color: string;
      shape: 'circle' | 'square' | 'triangle';

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 40 + 10;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() * 0.01 - 0.005) * 0.5;
        this.speedX = Math.random() * 0.7 - 0.35;
        this.speedY = Math.random() * 0.7 - 0.35;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        const shapes: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle'];
        this.shape = shapes[Math.floor(Math.random() * shapes.length)];
      }

      update() {
        this.rotation += this.rotationSpeed;
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around the screen
        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;
        if (this.y < -this.size) this.y = canvas.height + this.size;
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.3;
        
        if (this.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.shape === 'square') {
          ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        } else if (this.shape === 'triangle') {
          ctx.beginPath();
          ctx.moveTo(0, -this.size / 2);
          ctx.lineTo(this.size / 2, this.size / 2);
          ctx.lineTo(-this.size / 2, this.size / 2);
          ctx.closePath();
          ctx.fill();
        }
        
        ctx.restore();
      }
    }

    // Initialize elements
    const init = () => {
      for (let i = 0; i < numberOfElements; i++) {
        elements.push(new FloatingElement());
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw subtle gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(250, 250, 250, 0.5)');
      gradient.addColorStop(1, 'rgba(240, 240, 240, 0.5)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw each element
      elements.forEach(element => {
        element.update();
        element.draw();
      });
      
      requestAnimationFrame(animate);
    };

    init();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground;
