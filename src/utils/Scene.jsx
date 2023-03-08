import React from 'react';
import * as THREE from 'three';
import meshtexture from '../img/texture.jpg';
import heighttexture from '../img/map.jpg';
import alpha from '../img/alpha.jpg';

export const Scene = () => {
  //Textures
  const loader = new THREE.TextureLoader();

  //Scene
  const scene = new THREE.Scene();

  //Objects
  const geometry = new THREE.PlaneGeometry(3, 3, 64, 64);

  //Materials
  const material = new THREE.MeshStandardMaterial({
    map: loader.load(meshtexture),
    displacementMap: loader.load(heighttexture),
    displacementScale: 0.1,
    alphaMap: loader.load(alpha),
    color: 'darkblue',
    transparent: true,
    depthTest: false,
  });

  //Mesh
  const plane = new THREE.Mesh(geometry, material);
  scene.add(plane);
  plane.rotation.x = 181;

  //Lights
  const pointLight = new THREE.PointLight('#00b3ff', 1.5);
  pointLight.position.x = 2;
  pointLight.position.y = 3;
  pointLight.position.z = 4;
  scene.add(pointLight);

  //Sizes
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  window.addEventListener('resize', () => {
    //Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    //Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    //Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  //Base camera
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 3;
  scene.add(camera);

  //Renderer
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
  });

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  document.body.appendChild(renderer.domElement);

  //animate

  document.addEventListener('mousemove', animatePlane);
  let mouseY = 0;
  function animatePlane(e) {
    mouseY = e.clientY;
  }

  const clock = new THREE.Clock();

  const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    plane.rotation.z = 0.2 * elapsedTime;
    plane.material.displacementScale = mouseY * 0.0002;

    //Render
    renderer.render(scene, camera);

    //Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };

  tick();

  return <canvas id='canvas'></canvas>;
};
