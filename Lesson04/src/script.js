import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const group = new THREE.Group();
scene.add(group);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: "red" }),
);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: "red" }),
);
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: "red" }),
);
cube2.position.x -= 2
cube3.position.x += 2
group.add(cube1, cube2 , cube3)
group.scale.y = 2
group.rotation.y = -3.1
// scene.add(group)
/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600,
};

// mesh.position.normalize()
// mesh.position.length()
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);
/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// camera.position.x = 2
// camera.position.y = 2
// camera.lookAt(mesh.position)
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
