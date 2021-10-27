import VanillaTilt from 'vanilla-tilt';
import React, { useEffect } from 'react';

export default function Tilt({ children }) {
  const tiltRef = React.useRef();

  useEffect(() => {
    const { current: tiltNode } = tiltRef;
    const vanillaTiltOptions = {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    };
    VanillaTilt.init(tiltNode, vanillaTiltOptions);
    return () => tiltNode.vanillaTilt.destroy();
  }, []);

  return (
    <div ref={tiltRef} className="tilt-root">
      <div className="tilt-child">{children}</div>
    </div>
  );
}
