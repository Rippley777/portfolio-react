import { Canvas, useFrame } from '@react-three/fiber';
import useGLTFModel from '../../../../shared/hooks/useGLTFModel';
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';

type ModelProps = {
  url: string;
  scale?: [number, number, number];
  position?: [number, number, number];
};

const Loader: React.FC<ModelProps> = ({ url, scale = [1, 1, 1] }) => {
  const gltf = useGLTFModel(url);
  const modelRef = useRef<any>(null);

  useFrame(() => {
    if (modelRef.current) {
      // modelRef.current.scale = [10, 10, 10];

      // modelRef.current.rotation.x += 0.01;
      modelRef.current.rotation.y += 0.01;
      // modelRef.current.rotation.z += 0.01;
      console.log(
        modelRef.current.position.x,
        modelRef.current.position.y,
        modelRef.current.position.z,
      );
    }
  });

  return gltf ? (
    <primitive object={gltf.scene} ref={modelRef} scale={[15, 15, 15]} />
  ) : null;
};

const LoaderModel: React.FC = () => {
  return (
    <Canvas shadows style={{ width: 300, height: 300 }}>
      <ambientLight intensity={1} />
      <spotLight
        position={[0, 1, 0]}
        angle={0}
        color="blue"
        // penumbra={1}
        // decay={0}
        intensity={10}
      />
      {/* <spotLight
        position={[0, 5, 0]}
        angle={0}
        color="red"
        // penumbra={1}
        // decay={0}
        intensity={10}
      />
      <spotLight
        position={[0, 0, 0]}
        angle={0}
        color="green"
        // penumbra={1}
        // decay={0}
        intensity={10}
      /> */}
      {/* <directionalLight
        position={[0, 5, 0]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[0, 5, 0]} intensity={10} />
      <OrbitControls /> */}
      {/*}
      <spotLight
        position={[15, 0, 15]}
        angle={0.3}
        color="blue"
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      /> */}
      <Loader url={require('./react2.glb')} />
    </Canvas>
  );
};

export default LoaderModel;
