import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {texture} from "three/addons/nodes/accessors/TextureNode.js";


/**
 * Base
 */

// Debug Importer lil gui et l'instancier ici si besoin


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene Créer la scene ici
const scene = new THREE.Scene()


/**
 * Textures Instancier le textureLoader ici pour ajouter les textures
 */
const loadingManager = new THREE.LoadingManager()
loadingManager.onStart = () => {
    console.log('loading started')
}
loadingManager.onLoad = ()=> {
    console.log('loading finished')
}
loadingManager.onProgress = ()=> {
    console.log('loading progressing')
}
loadingManager.onError = ()=> {
    console.log('loading error')
}
const textureLoader = new THREE.TextureLoader(loadingManager)
const galaxyTexture = textureLoader.load('/textures/galaxy1.png')
const earthTexture = textureLoader.load('/textures/earthmap.png')
const mercuryTexture = textureLoader.load('/textures/mercurymap.png')
const venusTexture = textureLoader.load('/textures/venusmap.png')
const marsTexture = textureLoader.load('/textures/marsmap.png')
const jupiterTexture = textureLoader.load('/textures/jupitermap.png')
const saturnTexture = textureLoader.load('/textures/saturnmap.png')
const saturnringTexture = textureLoader.load('/textures/saturnring.png')
const uranusTexture = textureLoader.load('/textures/uranusmap.png')
const neptuneTexture = textureLoader.load('/textures/neptunemap.png')
const sunTexture = textureLoader.load('/textures/sunmap.png')
const moonTexture = textureLoader.load('/textures/moonmap.png')

/**
 * Objects 
 */
const galaxymaterial = new THREE.MeshBasicMaterial({map: galaxyTexture})
const earthmaterial = new THREE.MeshStandardMaterial({map: earthTexture})
const mercurymaterial = new THREE.MeshStandardMaterial({map: mercuryTexture})
const venusmaterial = new THREE.MeshStandardMaterial({map: venusTexture})
const marsmaterial = new THREE.MeshStandardMaterial({map: marsTexture})
const jupitermaterial = new THREE.MeshStandardMaterial({map: jupiterTexture})
const saturnmaterial = new THREE.MeshStandardMaterial({map: saturnTexture})
const saturnringmaterial = new THREE.MeshBasicMaterial({map: saturnringTexture, side: THREE.DoubleSide})
const uranusmaterial = new THREE.MeshStandardMaterial({map: uranusTexture})
const neptunematerial = new THREE.MeshStandardMaterial({map: neptuneTexture})
const sunmaterial = new THREE.MeshBasicMaterial({map: sunTexture})
const moonmaterial = new THREE.MeshStandardMaterial({map: moonTexture})
const trajmaterial = new THREE.MeshBasicMaterial({color: 0xffffff})

const sun = new THREE.Mesh(
    new THREE.SphereGeometry(1, 32, 32),
    sunmaterial
)
scene.add(sun)
sun.position.set(0,0,0)

const earth = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    earthmaterial
)
const earthObj = new THREE.Object3D();
earthObj.add(earth);
scene.add(earthObj);
earth.position.x=3.4;

const moon = new THREE.Mesh(
    new THREE.SphereGeometry(0.1, 32, 32),
    moonmaterial
)
earth.add(moon);
moon.position.x=0.7;

const mercury = new THREE.Mesh(
    new THREE.SphereGeometry(0.1, 32, 32),
    mercurymaterial
)
const mercuryObj = new THREE.Object3D();
mercuryObj.add(mercury);
scene.add(mercuryObj);
mercury.position.x=1.5;

const venus = new THREE.Mesh(
    new THREE.SphereGeometry(0.2, 32, 32),
    venusmaterial
)
const venusObj = new THREE.Object3D();
venusObj.add(venus);
scene.add(venusObj);
venus.position.x=2.2;

const mars = new THREE.Mesh(
    new THREE.SphereGeometry(0.3, 32, 32),
    marsmaterial
)
const marsObj = new THREE.Object3D();
marsObj.add(mars);
scene.add(marsObj);
mars.position.x=4.5;

const jupiter = new THREE.Mesh(
    new THREE.SphereGeometry(0.8, 32, 32),
    jupitermaterial
)
const jupiterObj = new THREE.Object3D();
jupiterObj.add(jupiter);
scene.add(jupiterObj);
jupiter.position.x=6.3;

const saturn = new THREE.Mesh(
    new THREE.SphereGeometry(0.8, 32, 32),
    saturnmaterial
)
const saturnObj = new THREE.Object3D();
saturnObj.add(saturn);
scene.add(saturnObj);
saturn.position.x=8.5;

const saturnring = new THREE.Mesh(
    new THREE.RingGeometry(0.9, 1.1, 32),
    saturnringmaterial
)
saturnObj.add(saturnring);
saturnring.position.x=8.5;
saturnring.rotation.x= -0.5*Math.PI;

const uranus = new THREE.Mesh(
    new THREE.SphereGeometry(0.6, 32, 32),
    uranusmaterial
)
const uranusObj = new THREE.Object3D();
uranusObj.add(uranus);
scene.add(uranusObj);
uranus.position.x=10.5;

const neptune = new THREE.Mesh(
    new THREE.SphereGeometry(0.6, 32, 32),
    neptunematerial
)
const neptuneObj = new THREE.Object3D();
neptuneObj.add(neptune);
scene.add(neptuneObj);
neptune.position.x=12;

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(40, 40),
    galaxymaterial
)
plane.rotation.x = - Math.PI * 0.5
plane.position.y = - 2
scene.add(plane)

const mercuretraj = new THREE.Mesh(
    new THREE.TorusGeometry(1.5, 0.01, 128,64),
    trajmaterial
)
sun.add(mercuretraj);
mercuretraj.rotation.x= -0.5*Math.PI;

const venustraj = new THREE.Mesh(
    new THREE.TorusGeometry(2.2, 0.01, 128,64),
    trajmaterial
)
sun.add(venustraj);
venustraj.rotation.x= -0.5*Math.PI;

const earthtraj = new THREE.Mesh(
    new THREE.TorusGeometry(3.4, 0.01, 128,64),
    trajmaterial
)
sun.add(earthtraj);
earthtraj.rotation.x= -0.5*Math.PI;

const marstraj = new THREE.Mesh(
    new THREE.TorusGeometry(4.5, 0.01, 128,64),
    trajmaterial
)
sun.add(marstraj);
marstraj.rotation.x= -0.5*Math.PI;

const jupitertraj = new THREE.Mesh(
    new THREE.TorusGeometry(6.3, 0.01, 128,64),
    trajmaterial
)
sun.add(jupitertraj);
jupitertraj.rotation.x= -0.5*Math.PI;

const saturntraj = new THREE.Mesh(
    new THREE.TorusGeometry(8.5, 0.01, 128,64),
    trajmaterial
)
sun.add(saturntraj);
saturntraj.rotation.x= -0.5*Math.PI;

const uranustraj = new THREE.Mesh(
    new THREE.TorusGeometry(10.5, 0.01, 128,64),
    trajmaterial
)
sun.add(uranustraj);
uranustraj.rotation.x= -0.5*Math.PI;

const neptunetraj = new THREE.Mesh(
    new THREE.TorusGeometry(12, 0.01, 128,64),
    trajmaterial
)
sun.add(neptunetraj);
neptunetraj.rotation.x= -0.5*Math.PI;

/**
 *  Lights
 */
const pointLight = new THREE.PointLight(0xffffff, 50,600)
scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera  Ajouter une camera ici
 */
// Base camera
const camera = new THREE.PerspectiveCamera(80, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 3
camera.position.y = 3
camera.position.z = 3
scene.add(camera)


// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()
    sun.rotation.y=elapsedTime*0.3
    earth.rotation.y=elapsedTime*0.5
    earthObj.rotation.y=elapsedTime*1
    mercury.rotation.y=elapsedTime*0.8
    mercuryObj.rotation.y=elapsedTime*2
    venus.rotation.y=elapsedTime*0.7
    venusObj.rotation.y=elapsedTime*1.8
    mars.rotation.y=elapsedTime*0.2
    marsObj.rotation.y=elapsedTime*0.9
    jupiter.rotation.y=elapsedTime*0.15
    jupiterObj.rotation.y=elapsedTime*0.6
    saturn.rotation.y=elapsedTime*0.13
    saturnObj.rotation.y=elapsedTime*0.5
    uranus.rotation.y=elapsedTime*0.11
    uranusObj.rotation.y=elapsedTime*0.45
    neptune.rotation.y=elapsedTime*0.08
    neptuneObj.rotation.y=elapsedTime*0.35



    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()