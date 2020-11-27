import * as THREE from 'three';
import {scene, renderer, camera, runtime, world, physics, ui, app, appManager} from 'app';
import {update as planetUpdate} from './planet.js';

// const localVector = new THREE.Vector3();
// const localMatrix = new THREE.Matrix4();

renderer.setAnimationLoop(() => {
  planetUpdate();
});