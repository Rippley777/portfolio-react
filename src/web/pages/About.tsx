import { useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

import { PortfolioItem } from '@/shared/store/reducers/portfolio';
import { Image, PerspectiveCamera } from '@react-three/drei';

const images = [
  require('../../assets/images/fahw-blog.png'),
  '../../assets/images/fahw-blog.png',
];
const Portfolio = () => {
  const [position, setPosition] = useState(0);

  // Where you call these funcions is up to you
  const setNext = () => setPosition((index) => (index + 1) % images.length);
  const setPrev = () => setPosition((index) => (index - 1) % images.length);

  return (
    <Image
      url={images[position]}
      position={[10.4, 1.6, 2]}
      scale={[0.09, 0.09]}
    />
  );
};

const About = ({ data }: { data: PortfolioItem[] }) => {
  const [pageLoaded, setPageLoaded] = useState(false);
  console.log({ data });

  useEffect(() => {
    setPageLoaded(true);
  }, []);
  return (
    <div className="grid sm:flex flex-wrap gap-8">
      <div className="fixed top-0 right-0 bottom-0 left-0">
        {pageLoaded && (
          <Canvas>
            <spotLight
              position={[0, 10, 0]}
              angle={0.25}
              color="blue"
              penumbra={1}
              decay={0}
              intensity={0.5}
            />
            <PerspectiveCamera
              makeDefault
              position={[0, 1, 5]}
              rotation={[0, 0, 0]}
            />
            <Portfolio />
          </Canvas>
        )}
      </div>
    </div>
  );
};

export default About;
