import ReactDOM from 'react-dom'
import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import Namer from './nameComponent'

// import textures from '../textures'
import {useTexture} from '@react-three/drei'

export default function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX
  const texture_1 = useTexture('../textures/one.jpeg');
  const texture_2 = useTexture('../textures/two.jpeg');
  const texture_3 = useTexture('../textures/three.jpeg');
  const texture_4 = useTexture('../textures/four.jpeg');
  const texture_5 = useTexture('../textures/five.jpeg');
  const texture_6 = useTexture('../textures/six.jpeg');

  return typeof window === 'undefined'? null : (
    <mesh
      {...props}
      ref={mesh}
      scale={props.scale}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry attach={'geometry'} args={[1, 1, 1]} />
      <meshStandardMaterial map={texture_1} attachArray="material" />
      <meshStandardMaterial map={texture_2} attachArray="material" />
      <meshStandardMaterial map={texture_3} attachArray="material" />
      <meshStandardMaterial map={texture_4} attachArray="material" />
      <meshStandardMaterial map={texture_5} attachArray="material" />
      <meshStandardMaterial map={texture_6} attachArray="material" />
    </mesh>
  )
}
