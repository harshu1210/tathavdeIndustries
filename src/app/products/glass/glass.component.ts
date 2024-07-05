import * as THREE from 'three';
import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-glass',
  templateUrl: './glass.component.html',
  styleUrls: ['./glass.component.css']
})
export class GlassComponent implements OnInit, OnChanges {

  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  object!: THREE.Group;
  @Input() width!: number;
  @Input() height!: number;
  @Input() glassThickness!: number;
  @Input() color!: any;
  glassVolume!: number;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.createGlass();
  }

  ngOnInit(): void {
    this.initThreeJS();
  }

  initThreeJS(): void {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 6;

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0xffffff); // Set the background color to white
    document.getElementById('threejs-container')?.appendChild(this.renderer.domElement);
    console.log()
    this.createGlass();
    this.animate();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate(): void {
    requestAnimationFrame(() => this.animate());
    this.object.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }

  clearCanvas() {
    if (this.object) {
      this.scene.remove(this.object);
      this.object.children.forEach(child => {
        if ((child as THREE.Mesh).geometry) {
          (child as THREE.Mesh).geometry.dispose();
        }
      });
    }
    this.object = new THREE.Group();
  }

  // Glass
  createGlass() {
    this.clearCanvas();
    const glassMaterial = new THREE.MeshStandardMaterial({ color: 0x87CEEB, opacity: 0.5, transparent: true });
    const glassGeometry = new THREE.BoxGeometry(this.width, this.height, this.glassThickness);
    const glass = new THREE.Mesh(glassGeometry, glassMaterial);
    this.object.add(glass);

    this.scene.add(this.object);
    this.glassVolume = this.width * this.height * this.glassThickness;
    console.log(this.glassVolume)
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    this.scene.add(light);
  }

}
