import React, { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Text } from '@react-three/drei';
import useGLTFModel from '../../../../../shared/hooks/useGLTFModel';

type ModelProps = {
  url: string;
  scale?: [number, number, number];
  position?: [number, number, number];
};

const Desk: React.FC<ModelProps> = ({ url, scale = [1, 1, 1] }) => {
  const gltf = useGLTFModel(url);
  const modelRef = useRef<any>(null);

  useFrame(() => {});

  return gltf ? <primitive object={gltf.scene} ref={modelRef} /> : null;
};

const Computer: React.FC<ModelProps> = ({ url, scale = [1, 1, 1] }) => {
  const gltf = useGLTFModel(url);
  const modelRef = useRef<any>(null);

  useFrame(() => {
    if (modelRef.current) {
      if (modelRef.current.position.z === 0) {
        modelRef.current.position.z = -10;
      }
      if (modelRef.current.position.z < -0.02) {
        modelRef.current.position.z += 0.02;
      }
    }
    if (modelRef.current) {
      modelRef.current.position.x = -0.58;
      modelRef.current.position.y = -0.01;
    }
  });

  return gltf ? <primitive object={gltf.scene} ref={modelRef} /> : null;
};

const Chair: React.FC<ModelProps> = ({ url, scale = [1, 1, 1] }) => {
  const gltf = useGLTFModel(url);
  const modelRef = useRef<any>(null);

  useFrame(() => {
    if (modelRef.current) {
      if (modelRef.current.position.z === 0) {
        modelRef.current.position.z = 3.5;
      }
      if (modelRef.current.position.z > 0.3) {
        modelRef.current.position.z -= 0.005;
      }
    }
  });

  return gltf ? <primitive object={gltf.scene} ref={modelRef} /> : null;
};

const Monitor: React.FC<ModelProps> = ({ url }) => {
  const gltf = useGLTFModel(url);
  const modelRef = useRef<any>(null);

  useFrame(() => {
    if (modelRef.current) {
      if (modelRef.current.position.y === 0) {
        modelRef.current.position.y = 3;
      }
      if (modelRef.current.position.y > 0.75) {
        modelRef.current.position.y -= 0.005;
      }
    }
  });

  return gltf ? <primitive object={gltf.scene} ref={modelRef} /> : null;
};

const Rug: React.FC<ModelProps> = ({ url, scale = [1, 1, 1] }) => {
  const gltf = useGLTFModel(url);
  const modelRef = useRef<any>(null);

  useFrame(() => {
    if (modelRef.current) {
      if (modelRef.current.position.y === 0) {
        modelRef.current.position.y = -4;
      }
      if (modelRef.current.position.y < 0) {
        modelRef.current.position.y += 0.01;
      }
    }

    if (modelRef.current) {
      modelRef.current.rotation.y = 1.55;
    }
  });

  return gltf ? <primitive object={gltf.scene} ref={modelRef} /> : null;
};

const Camera = ({ triggerChange }: { triggerChange?: boolean }) => {
  const [ready, setReady] = useState(false);
  const [positionY, setPositionY] = useState(2);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 3000);
  }, []);

  useEffect(() => {
    if (ready && positionY > 1) {
      setTimeout(() => setPositionY((prev) => prev - 0.001), 1);
    }
  }, [positionY, ready]);

  return (
    <PerspectiveCamera
      makeDefault
      position={[0, positionY, 2]}
      rotation={[0, 0, 0]}
    />
  );
};
const DisplayText = () => {
  return (
    <Text
      font={
        'https://rawcdn.githack.com/google/fonts/3b179b729ac3306ab2a249d848d94ff08b90a0af/apache/robotoslab/static/RobotoSlab-Black.ttf'
      }
      scale={0.1}
      textAlign="center"
      position={[0, 1.5, 0]}
      color="#58c4dc" // default
      anchorX="center" // default
      anchorY="middle" // default
    >
      {`I love Sam <3`}
    </Text>
  );
};

const DeskModel: React.FC = () => {
  return (
    <Canvas className="bg-gradient-to-tr from-primaryMonoDarkest to-primaryMonoDark">
      <spotLight
        position={[0, 10, 0]}
        angle={0.25}
        color="blue"
        penumbra={1}
        decay={0}
        intensity={0.5}
      />
      <spotLight
        position={[15, 0, 15]}
        angle={0.3}
        color="purple"
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <DisplayText />
      <Camera />
      <Desk url={require('./desk.glb')} />
      <Computer url={require('./computer.glb')} />
      <Chair url={require('./chair.glb')} />
      <Monitor url={require('./monitor.glb')} />
      <Rug url={require('./rug.glb')} />
    </Canvas>
  );
};

export default DeskModel;
