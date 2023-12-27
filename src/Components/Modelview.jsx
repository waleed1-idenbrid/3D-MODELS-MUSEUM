import { Canvas } from "@react-three/fiber";
import { Stage, PresentationControls, useGLTF, Sky } from "@react-three/drei";
// import Model from "../Allmodels/Model";

function Model(props) {
  const { scene } = useGLTF(`/models/${props.path}`);
  return (
    <>
      <primitive object={scene} {...props} />
    </>
  );
}

export default function Modelview(props) {
  return (
    <>
      <div className="" style={{ height: "80vh", width: "100vw" }}>
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 50 }}>
          <color attach="backgronud" args={["#555555"]} />
          <PresentationControls speed={2}>
            <Stage environment={"sunset"}>
              <Model path={props.path} />
            </Stage>
            <Sky />
          </PresentationControls>
        </Canvas>
      </div>
    </>
  );
}
