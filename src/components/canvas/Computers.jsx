import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={7.5} 
       groundColor="black"/>
      <pointLight intensity={.9}/>
      <spotLight 
        position={[0, 5, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.80}
        position={isMobile ? [0 , -3, -2.2] :[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}


// Define a functional component named ComputerCanvas
const ComputerCanvas = () => {
  // Declare a state variable 'isMobile' and initialize it to false
  const [isMobile, setIsMobile] = useState(false)

  // Run the effect hook only once after the component is mounted
  useEffect(() => {
    // Create a media query that matches the maximum width of 500px
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    // Set the initial value of 'isMobile' based on the media query
    setIsMobile(mediaQuery.matches)

    // Define a callback function to handle changes in the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    // Add an event listener to the media query for changes
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // Clean up by removing the event listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }

  }, [])

  // Render a Canvas component from @react-three/fiber
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Render a fallback component while the main content is loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Enable orbit controls for the 3D scene */}
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Render the Computers component and pass the 'isMobile' prop */}
        <Computers isMobile={isMobile}/>
      </Suspense>

      {/* Preload all assets */}
      <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas