import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText.jsx";
import ParallaxBackground from "../components/parallaxBackground.jsx";
import { Astronaut } from "../components/Astronaut.jsx";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader.jsx";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        {/* <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                // scale={isMobile && 0.23}
                // position={isMobile && [0, -1.5, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas> */}
                <Canvas shadows camera={{ position: [0, 1, 3] }}>
          <ambientLight intensity={3} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
              // scale={isMobile && 0.23}
              // position={isMobile && [0, -1.5, 0]}
              scale={ isMobile && .35 || !isMobile && 0.6}
              position={isMobile && [0, -1, 0] || !isMobile && [3, -0.5, 0]}
              rotation={!isMobile && [-Math.PI / 1.6, 0, -0.8] || isMobile && [-2, 0, 0]} 
              // rotation={[-Math.PI / 2, 0, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
          {/* <Astronaut/>
          <OrbitControls/> */}
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
