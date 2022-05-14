import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.122/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.122/examples/jsm/loaders/GLTFLoader.js';
import { FBXLoader } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/loaders/FBXLoader.js';

window.onload = function () {
	let width = window.innerWidth;
	let height = window.innerHeight;
	const canvas = document.getElementById('canvas');

	canvas.setAttribute('width', width);
	canvas.setAttribute('height', height);

	//render
	const renderer = new THREE.WebGLRenderer({ canvas: canvas });
	renderer.setSize(width, height);
	/* canvas.appendChild(renderer.domElement); */

	//scene
	const scene = new THREE.Scene();
	scene.background = new THREE.Color(0xc1c1c1);

	//camera
	const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
	camera.position.z = 7;
	camera.position.x = -10;
	camera.position.y = 1.6;

	camera.lookAt(0, 2, -5);

	//light
	const light = new THREE.AmbientLight(0xffffff);
	light.intensity = 1;
	scene.add(light);

	const frontSpot = new THREE.SpotLight(0xeeeece);
	const frontSpot2 = new THREE.SpotLight(0xddddce);

	frontSpot.position.set(1000, 1000, 1000);
	frontSpot.intensity = 0.8;
	frontSpot2.position.set(-500, -500, -500);
	frontSpot2.intensity = 0.6;

	scene.add(frontSpot);
	scene.add(frontSpot2);




	const loader = new GLTFLoader();
	loader.load('../3d/test_01.glb', gltf => {
		scene.add(gltf.scene);
	}, undefined, function (error) {
		console.error(error);
	});








	function animate() {
		requestAnimationFrame(animate);
		renderer.render(scene, camera);


	}
	animate();
}