import { Canvas, useFrame } from '@react-three/fiber';
import useGLTFModel from '../../../../shared/hooks/useGLTFModel';
import { useRef } from 'react';

type ModelProps = {
  url: string;
  scale?: [number, number, number];
  position?: [number, number, number];
};

const Loader: React.FC<ModelProps> = ({ url, scale = [1, 1, 1] }) => {
  const gltf = useGLTFModel(url);
  const modelRef = useRef<any>(null);

  useFrame(() => {});

  return gltf ? <primitive object={gltf.scene} ref={modelRef} /> : null;
};

const LoaderModel: React.FC = () => {
  return (
    <Canvas style={{ width: 300, height: 300 }}>
      <ambientLight intensity={0.5} />
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
      <Loader url={require('./level-react-draco.glb')} />
    </Canvas>
  );
};

export default LoaderModel;
