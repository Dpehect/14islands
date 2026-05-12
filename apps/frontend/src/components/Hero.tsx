import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const chars = titleRef.current.innerText.split('');
    titleRef.current.innerHTML = chars.map(char => 
      `<span class="char" style="display: inline-block;">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');

    gsap.from('.char', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.02,
      ease: 'expo.out',
      delay: 0.5
    });

    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      },
      y: 200,
      opacity: 0
    });
  }, []);

  return (
    <section ref={containerRef} style={{ padding: '0 40px', background: '#f5f5f5' }}>
      <h1 
        ref={titleRef}
        style={{ 
          fontSize: 'clamp(3rem, 15vw, 12rem)', 
          lineHeight: 0.9, 
          maxWidth: '1200px',
          overflow: 'hidden'
        }}
      >
        WE DESIGN EMOTIONS.
      </h1>
      <p style={{ marginTop: '40px', fontSize: '1.5rem', maxWidth: '600px' }}>
        Creative studio based in Stockholm & Florianópolis. Making digital experiences feel human.
      </p>
    </section>
  );
};

export default Hero;
