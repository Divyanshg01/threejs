import * as THREE from "three";

const scene = new THREE.Scene();

const geo = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ color: "red" });

const mesh = new THREE.Mesh(geo, material);
scene.add(mesh);

const sizes = {
  width: 600,
  height: 400,
};

const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  1,
  100,
);
camera.position.z = 3;
scene.add(camera);

const canvas = document.querySelector("canvas");

const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
