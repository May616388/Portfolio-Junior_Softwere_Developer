
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useMotionValue, useSpring } from "motion/react";
import { useFrame } from "@react-three/fiber";

// export function Astronaut(props) {
//   const group = useRef();
//   const { nodes, materials, animations } = useGLTF(
//     "/models/tenhun_falling_spaceman_fanart.glb"
//   );
//   const { actions } = useAnimations(animations, group);
//   useEffect(() => {
//     if (animations.length > 0) {
//       actions[animations[0].name]?.play();
//     }
//   }, [actions, animations]);

//   const yPosition = useMotionValue(5);
//   const ySpring = useSpring(yPosition, { damping: 30 });
//   useEffect(() => {
//     ySpring.set(-1);
//   }, [ySpring]);
//   useFrame(() => {
//     group.current.position.y = ySpring.get();
//   });
//   return (
//     <group
//       ref={group}
//       {...props}
//       dispose={null}
//       rotation={[-Math.PI / 2, -0.2, 2.2]}
//       scale={props.scale || 0.3}
//       position={props.position || [1.3, -1, 0]}
//     >
//       <group name="Sketchfab_Scene">
//         <group name="Sketchfab_model">
//           <group name="Root">
//             <group name="metarig">
//               <primitive object={nodes.metarig_rootJoint} />
//               <skinnedMesh
//                 name="Cube001_0"
//                 geometry={nodes.Cube001_0.geometry}
//                 material={materials["AstronautFallingTexture.png"]}
//                 skeleton={nodes.Cube001_0.skeleton}
//               />
//               <skinnedMesh
//                 name="Cube005_0"
//                 geometry={nodes.Cube005_0.geometry}
//                 material={materials["AstronautFallingTexture.png"]}
//                 skeleton={nodes.Cube005_0.skeleton}
//               />
//               <skinnedMesh
//                 name="Cube002_0"
//                 geometry={nodes.Cube002_0.geometry}
//                 material={materials["AstronautFallingTexture.png"]}
//                 skeleton={nodes.Cube002_0.skeleton}
//               />
//               <skinnedMesh
//                 name="Plane_0"
//                 geometry={nodes.Plane_0.geometry}
//                 material={materials["AstronautFallingTexture.png"]}
//                 skeleton={nodes.Plane_0.skeleton}
//               />
//               <skinnedMesh
//                 name="Cube008_0"
//                 geometry={nodes.Cube008_0.geometry}
//                 material={materials["AstronautFallingTexture.png"]}
//                 skeleton={nodes.Cube008_0.skeleton}
//               />
//               <skinnedMesh
//                 name="Cube004_0"
//                 geometry={nodes.Cube004_0.geometry}
//                 material={materials["AstronautFallingTexture.png"]}
//                 skeleton={nodes.Cube004_0.skeleton}
//               />
//               <skinnedMesh
//                 name="Cube003_0"
//                 geometry={nodes.Cube003_0.geometry}
//                 material={materials["AstronautFallingTexture.png"]}
//                 skeleton={nodes.Cube003_0.skeleton}
//               />
//               <skinnedMesh
//                 name="Cube_0"
//                 geometry={nodes.Cube_0.geometry}
//                 material={materials["AstronautFallingTexture.png"]}
//                 skeleton={nodes.Cube_0.skeleton}
//               />
//               <skinnedMesh
//                 name="Cube009_0"
//                 geometry={nodes.Cube009_0.geometry}
//                 material={materials["AstronautFallingTexture.png"]}
//                 skeleton={nodes.Cube009_0.skeleton}
//               />
//               <skinnedMesh
//                 name="Cube011_0"
//                 geometry={nodes.Cube011_0.geometry}
//                 material={materials["AstronautFallingTexture.png"]}
//                 skeleton={nodes.Cube011_0.skeleton}
//               />
//               <group name="Cube001" />
//               <group name="Cube005" />
//               <group name="Cube002" />
//               <group name="Plane" />
//               <group name="Cube008" />
//               <group name="Cube004" />
//               <group name="Cube003" />
//               <group name="Cube" />
//               <group
//                 name="Cube009"
//                 rotation={[-2.708, 0.013, -1.447]}
//                 scale={1.307}
//               />
//               <group name="Cube011" />
//             </group>
//           </group>
//         </group>
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/models/tenhun_falling_spaceman_fanart.glb");
export function Astronaut(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/robot_rocket.glb')
  const { actions } = useAnimations(animations, group)
    useEffect(()=>{
    if (animations.length > 0){
      actions[animations[0].name]?.play();
    } 
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" scale={0.012}>
          <group name="99bb25453ae64b8c9ac16992b24eafaefbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Sphere"
                  position={[0, 45.158, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={101.805}
                />
                <group
                  name="metarig"
                  position={[0, -126.157, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={141.779}>
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials.naranja}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <skinnedMesh
                      name="Object_10"
                      geometry={nodes.Object_10.geometry}
                      material={materials.naranja}
                      skeleton={nodes.Object_10.skeleton}
                    />
                    <skinnedMesh
                      name="Object_11"
                      geometry={nodes.Object_11.geometry}
                      material={materials.turqueza}
                      skeleton={nodes.Object_11.skeleton}
                    />
                    <skinnedMesh
                      name="Object_12"
                      geometry={nodes.Object_12.geometry}
                      material={materials.luz_neon}
                      skeleton={nodes.Object_12.skeleton}
                    />
                    <skinnedMesh
                      name="Object_13"
                      geometry={nodes.Object_13.geometry}
                      material={materials.azul}
                      skeleton={nodes.Object_13.skeleton}
                    />
                    <skinnedMesh
                      name="Object_14"
                      geometry={nodes.Object_14.geometry}
                      material={materials.azul}
                      skeleton={nodes.Object_14.skeleton}
                    />
                    <skinnedMesh
                      name="Object_15"
                      geometry={nodes.Object_15.geometry}
                      material={materials.azul}
                      skeleton={nodes.Object_15.skeleton}
                    />
                    <group
                      name="Object_8"
                      position={[0, 45.158, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={101.805}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/robot_rocket.glb')