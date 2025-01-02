import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const About = () => {
  // Animation for fade-in effect
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });
  const slideIn = useSpring({
    transform: 'translateY(0)',
    from: { transform: 'translateY(-30px)' },
    config: { tension: 150, friction: 20 },
  });

  return (
    <animated.div style={{ ...fadeIn, padding: '20px' }}>
      <h1>About</h1>
      <md-divider></md-divider>
      <animated.p style={slideIn}>
        This application demonstrates how to build a responsive dashboard using Material Web components and React.
      </animated.p>
      <animated.p style={slideIn}>
        It showcases the integration of various UI elements to create a cohesive user experience.
      </animated.p>
      <h3>Key Features:</h3>
      <animated.ul style={slideIn}>
        <li>Responsive Dashboard Layout</li>
        <li>Interactive Material Design Components</li>
        <li>Dynamic Routing with React Router</li>
      </animated.ul>
      <animated.p style={slideIn}>Explore the app to learn more about its features and implementation.</animated.p>
    </animated.div>
  );
};

export default About;
