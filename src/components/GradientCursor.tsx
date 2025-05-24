
import React, { useEffect, useState } from 'react';

const GradientCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Only activate on project section
    const projectSection = document.getElementById('projects');
    if (projectSection) {
      projectSection.addEventListener('mousemove', handleMouseMove);
      projectSection.addEventListener('mouseenter', handleMouseEnter);
      projectSection.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        projectSection.removeEventListener('mousemove', handleMouseMove);
        projectSection.removeEventListener('mouseenter', handleMouseEnter);
        projectSection.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: mousePosition.x - 100,
        top: mousePosition.y - 100,
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(20px)',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default GradientCursor;
