import * as THREE from 'three';
import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-double-sliding-window',
  templateUrl: './double-sliding-window.component.html',
  styleUrls: ['./double-sliding-window.component.css']
})
export class DoubleSlidingWindowComponent implements OnInit {

  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  object!: THREE.Group;
  @Input() width!: number;
  @Input() height!: number;
  @Input() frameThickness!: number;
  @Input() mainFrameColor!: any;
  @Input() subFrameColor!: any;
  @Input() glassThickness!: number;

  mainFrameWidth!: number;
  mainFrameHeigth!: number;
  mainFrameFrameThickness!: number;
  mainFrameDepth!: number;
  mainFrameVolume!: any;

  subFrameWidth!: number;
  subFrameHeigth!: number;
  subFrameFrameThickness!: number;
  subFrameDepth!: number;
  subFrameVolume!: any;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.doubleSlidingWindow();
  }

  ngOnInit(): void {
    this.initThreeJS();
  }

  initThreeJS(): void {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = this.height + 5;
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0xffffff); // Set the background color to white
    document.getElementById('threejs-container')?.appendChild(this.renderer.domElement);
    this.doubleSlidingWindow();
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

  doubleSlidingWindow() {
    this.clearCanvas();

    const mainFrameMaterial = new THREE.MeshStandardMaterial({ color: this.mainFrameColor });
    const subFrameMaterial = new THREE.MeshStandardMaterial({ color: this.subFrameColor });
    const glassMaterial = new THREE.MeshStandardMaterial({ color: 0x87CEEB, opacity: 0.5, transparent: true });


    // Main Frame

    this.mainFrameWidth=this.width*2+this.frameThickness*3;
    this.mainFrameHeigth=this.height+this.frameThickness*4;
    this.mainFrameDepth=this.frameThickness*3;
    this.mainFrameFrameThickness=this.frameThickness;
    const mainFrameGeometries = [
      new THREE.BoxGeometry(this.mainFrameWidth, this.mainFrameFrameThickness, this.mainFrameDepth),
      new THREE.BoxGeometry(this.mainFrameWidth, this.mainFrameFrameThickness, this.mainFrameDepth),
      new THREE.BoxGeometry(this.mainFrameFrameThickness, this.mainFrameHeigth, this.mainFrameDepth),
      new THREE.BoxGeometry(this.mainFrameFrameThickness, this.mainFrameHeigth, this.mainFrameDepth)
    ];

    const mainTopFrame = new THREE.Mesh(mainFrameGeometries[0], mainFrameMaterial);
    const mainBottomFrame = new THREE.Mesh(mainFrameGeometries[1], mainFrameMaterial);
    const mainLeftFrame = new THREE.Mesh(mainFrameGeometries[2], mainFrameMaterial);
    const mainRightFrame = new THREE.Mesh(mainFrameGeometries[3], mainFrameMaterial);

    mainTopFrame.position.set(0, (this.height+this.frameThickness*2) / 2 + this.frameThickness / 2, -this.frameThickness / 2);
    mainBottomFrame.position.set(0, -(this.height+this.frameThickness*2) / 2 - this.frameThickness / 2, -this.frameThickness / 2);
    mainLeftFrame.position.set(-(this.mainFrameWidth+this.frameThickness)/2, 0, -this.frameThickness / 2);
    mainRightFrame.position.set((this.mainFrameWidth+this.frameThickness)/2, 0, -this.frameThickness / 2);

    this.object.add(mainTopFrame, mainBottomFrame, mainLeftFrame, mainRightFrame);

    // First Frame
    this.subFrameWidth=this.width + this.frameThickness*2;
    this.subFrameFrameThickness=this.frameThickness;
    this.subFrameHeigth=this.height + this.frameThickness*2;
    this.subFrameDepth=this.frameThickness;
    const frameGeometries = [
      new THREE.BoxGeometry(this.subFrameWidth, this.subFrameFrameThickness, this.subFrameDepth),
      new THREE.BoxGeometry(this.subFrameWidth, this.subFrameFrameThickness, this.subFrameDepth),
      new THREE.BoxGeometry(this.subFrameFrameThickness, this.subFrameHeigth, this.subFrameDepth),
      new THREE.BoxGeometry(this.subFrameFrameThickness, this.subFrameHeigth, this.subFrameDepth)
    ];

    const topFrame1 = new THREE.Mesh(frameGeometries[0], subFrameMaterial);
    const bottomFrame1 = new THREE.Mesh(frameGeometries[1], subFrameMaterial);
    const leftFrame1 = new THREE.Mesh(frameGeometries[2], subFrameMaterial);
    const rightFrame1 = new THREE.Mesh(frameGeometries[3], subFrameMaterial);

    topFrame1.position.set(-(this.width + this.frameThickness) / 2, (this.height + this.frameThickness) / 2, 0);
    bottomFrame1.position.set(-(this.width + this.frameThickness) / 2, -(this.height + this.frameThickness) / 2, 0);
    leftFrame1.position.set(-(this.width + this.frameThickness), 0, 0);
    rightFrame1.position.set(0, 0, 0);

    this.object.add(topFrame1, bottomFrame1, leftFrame1, rightFrame1);

    const glassGeometry = new THREE.BoxGeometry(this.width, this.height, this.glassThickness);
    const glass1 = new THREE.Mesh(glassGeometry, glassMaterial);
    glass1.position.set(-(this.width+this.frameThickness)/ 2, 0, 0);
    this.object.add(glass1);

    // Second Frame
    const topFrame2 = new THREE.Mesh(frameGeometries[0], subFrameMaterial);
    const bottomFrame2 = new THREE.Mesh(frameGeometries[1], subFrameMaterial);
    const leftFrame2 = new THREE.Mesh(frameGeometries[2], subFrameMaterial);
    const rightFrame2 = new THREE.Mesh(frameGeometries[3], subFrameMaterial);

    topFrame2.position.set((this.width+this.frameThickness) / 2, (this.height+this.frameThickness) / 2, -this.frameThickness);
    bottomFrame2.position.set((this.width+this.frameThickness) / 2, -(this.height+this.frameThickness) / 2, -this.frameThickness);
    leftFrame2.position.set(0, 0, -this.frameThickness);
    rightFrame2.position.set((this.width+this.frameThickness), 0, -this.frameThickness);

    this.object.add(topFrame2, bottomFrame2, leftFrame2, rightFrame2);

    const glass2 = new THREE.Mesh(glassGeometry, glassMaterial);
    glass2.position.set((this.width+this.frameThickness) / 2, 0, -this.frameThickness);
    this.object.add(glass2);

    this.scene.add(this.object);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    this.scene.add(light);
  }

}
