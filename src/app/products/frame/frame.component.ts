import { FramebufferTexture } from './../../../../node_modules/@types/three/src/textures/FramebufferTexture.d';
import * as THREE from 'three';
import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  object!: THREE.Group;
  @Input() width!: number;
  @Input() height!: number;
  @Input() frameThickness!: number;
  @Input() mainFrameColor!: any;
  @Input() subFrameColor!: any;

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
    this.createFrameSet();
  }

  ngOnInit(): void {
    this.initThreeJS();
  }

  initThreeJS(): void {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 20;

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0xffffff); // Set the background color to white
    document.getElementById('threejs-container')?.appendChild(this.renderer.domElement);
    console.log()
    this.createFrameSet();
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

  createFrameSet(): void {
    this.clearCanvas();

    // const textureLoader = new THREE.TextureLoader();
    // const frameTexture = textureLoader.load('assets/blueTexture.avif');
    const mainFrameMaterial = new THREE.MeshStandardMaterial({ color: this.mainFrameColor });
    // const frameMaterial = new THREE.MeshStandardMaterial({ map: frameTexture, opacity:1 });

    //Main Frame
    this.mainFrameWidth = this.width + this.frameThickness * 2;
    this.mainFrameHeigth = this.height;
    this.mainFrameFrameThickness = this.frameThickness;
    this.mainFrameDepth = this.frameThickness * 2;

    this.mainFrameVolume = (this.mainFrameWidth * this.mainFrameFrameThickness * this.mainFrameDepth * 2) + (this.mainFrameFrameThickness * this.mainFrameHeigth * this.mainFrameDepth * 2)

    const mainFrame = [
      new THREE.BoxGeometry(this.mainFrameWidth, this.mainFrameFrameThickness, this.mainFrameDepth),
      new THREE.BoxGeometry(this.mainFrameWidth, this.mainFrameFrameThickness, this.mainFrameDepth),
      new THREE.BoxGeometry(this.mainFrameFrameThickness, this.mainFrameHeigth, this.mainFrameDepth),
      new THREE.BoxGeometry(this.mainFrameFrameThickness, this.mainFrameHeigth, this.mainFrameDepth)
    ];

    const mainTopFrame = new THREE.Mesh(mainFrame[0], mainFrameMaterial);
    const mainBottomFrame = new THREE.Mesh(mainFrame[1], mainFrameMaterial);
    const mainLeftFrame = new THREE.Mesh(mainFrame[2], mainFrameMaterial);
    const mainRightFrame = new THREE.Mesh(mainFrame[3], mainFrameMaterial);

    mainTopFrame.position.set(0, (this.height + this.frameThickness) / 2, 0);
    mainBottomFrame.position.set(0, -(this.height + this.frameThickness) / 2, 0);
    mainLeftFrame.position.set(-(this.width + this.frameThickness) / 2, 0, 0);
    mainRightFrame.position.set((this.width + this.frameThickness) / 2, 0, 0);

    this.object.add(mainTopFrame, mainBottomFrame, mainLeftFrame, mainRightFrame);


    // Sub Frame
    const subFrameMaterial = new THREE.MeshStandardMaterial({ color: this.subFrameColor });

    this.subFrameWidth = this.width + this.frameThickness;
    this.subFrameFrameThickness = this.frameThickness;
    this.subFrameHeigth = this.height;
    this.subFrameDepth = this.frameThickness;

    this.subFrameVolume = (this.subFrameWidth * this.subFrameFrameThickness * this.subFrameDepth * 2) + (this.subFrameFrameThickness * this.subFrameHeigth * this.subFrameDepth * 2)

    const frameGeometries = [
      new THREE.BoxGeometry(this.subFrameWidth, this.subFrameFrameThickness, this.subFrameDepth),
      new THREE.BoxGeometry(this.subFrameWidth, this.subFrameFrameThickness, this.subFrameDepth),
      new THREE.BoxGeometry(this.subFrameFrameThickness, this.subFrameHeigth, this.subFrameDepth),
      new THREE.BoxGeometry(this.subFrameFrameThickness, this.subFrameHeigth, this.subFrameDepth)
    ];

    const topFrame = new THREE.Mesh(frameGeometries[0], subFrameMaterial);
    const bottomFrame = new THREE.Mesh(frameGeometries[1], subFrameMaterial);
    const leftFrame = new THREE.Mesh(frameGeometries[2], subFrameMaterial);
    const rightFrame = new THREE.Mesh(frameGeometries[3], subFrameMaterial);

    topFrame.position.set(0, this.height / 2, 0);
    bottomFrame.position.set(0, -this.height / 2, 0);
    leftFrame.position.set(-this.width / 2, 0, 0);
    rightFrame.position.set(this.width / 2, 0, 0);

    this.object.add(topFrame, bottomFrame, leftFrame, rightFrame);

    this.scene.add(this.object);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    this.scene.add(light);

    console.log({ 'subFrmaeVolume': this.subFrameVolume, 'mainFrmaeVolume': this.mainFrameVolume })
  }


}
