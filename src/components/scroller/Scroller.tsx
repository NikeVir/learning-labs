'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./style.css";
const ScrollAnimationComponent: React.FC = () => {
  const [activeTitle, setActiveTitle] = useState(0);
  const titlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        handleScrollAnimation();
      }
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const index = parseInt((entry.target as HTMLElement).dataset.index || '0');
          setActiveTitle(index);
        }
      });
    }, { threshold: 0.5 });

    titlesRef.current.forEach((el) => el && observer.observe(el));

    return () => {
      titlesRef.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  const handleScrollAnimation = () => {
    const scrollHandler = () => {
      const scrollTop = window.pageYOffset;
      const clientHeight = document.documentElement.clientHeight;
      
      const visibleSection = Math.floor(scrollTop / clientHeight);
      setActiveTitle(visibleSection);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  };

  return (
    <div className='relative'>

    <motion.div className="container" ref={ref}>
      <AnimatePresence mode="wait">
        {[1, 2, 3, 4].map((_, index) => (
            <motion.div
            key={index}
            className={`title ${activeTitle === index ? 'active' : ''}`}
            ref={(el) => {
              titlesRef.current[index] = el;
            }}
            data-index={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeTitle === index ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            >
            Title {index + 1}
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="content">
        {[1, 2, 3, 4].map((_, index) => (
          <section key={index} className={`section ${activeTitle === index ? 'active' : ''}`}>
            Content {index + 1}
          </section>
        ))}
      </div>
    </motion.div>
        </div>
  );
};

export default ScrollAnimationComponent;
