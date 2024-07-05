import { Component, OnInit, HostListener } from '@angular/core';
import * as THREE from 'three';
import { Tween } from '@tweenjs/tween.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  frameThicknessInches: number = 1.375;
  glassThicknessInches: number = 0.6875;
  widthInches: number = 6;
  widthFeet: number = 2;
  heightInches: number = 8;
  heightFeet: number = 6;
  width: number = this.widthFeet + (this.widthInches / 12);
  height: number = this.heightFeet + (this.heightInches / 12);
  frameThickness: number = this.frameThicknessInches / 12;
  glassThickness: number = this.glassThicknessInches / 12;
  mainFrameColor: any = 0x000000;
  subFrameColor: any = 0x000000;

  products: any[] = [{ key: 'Glass', value: 'glass' }, { key: 'Frame Set', value: 'frameset' }, { key: 'Single French Door (Frame Set)', value: 'frameset' }, { key: 'Single French Door', value: 'both' }, { key: 'Double Sliding Window (Frame Set)', value: 'frameset' }, { key: 'Double Sliding Window', value: 'both' }];
  product: any = this.products[1];

  ngOnInit(): void {
  }

  valueChange(): void {
    this.width = this.widthFeet + (this.widthInches / 12);
    this.height = this.heightFeet + (this.heightInches / 12);
    this.frameThickness = this.frameThicknessInches / 12;
    this.glassThickness = this.glassThicknessInches / 12;
    console.log(this.width)
  }

  //   //FrameSet
  //   createFrameSet(): void {
  //     this.clearCanvas();

  //     const textureLoader = new THREE.TextureLoader();
  //     const frameTexture = textureLoader.load('assets/blueTexture.avif');

  //     const frameMaterial = new THREE.MeshStandardMaterial({ color: this.color });
  //     // const frameMaterial = new THREE.MeshStandardMaterial({ map: frameTexture, opacity:1 });

  //     // Frame - 4 parts (top, bottom, left, right)
  //     const frameGeometries = [
  //       new THREE.BoxGeometry(this.width+this.frameThickness, this.frameThickness, this.frameThickness),
  //       new THREE.BoxGeometry(this.width+this.frameThickness, this.frameThickness, this.frameThickness),
  //       new THREE.BoxGeometry(this.frameThickness, this.height, this.frameThickness),
  //       new THREE.BoxGeometry(this.frameThickness, this.height, this.frameThickness)
  //     ];

  //     const topFrame = new THREE.Mesh(frameGeometries[0], frameMaterial);
  //     const bottomFrame = new THREE.Mesh(frameGeometries[1], frameMaterial);
  //     const leftFrame = new THREE.Mesh(frameGeometries[2], frameMaterial);
  //     const rightFrame = new THREE.Mesh(frameGeometries[3], frameMaterial);

  //     topFrame.position.set(0, this.height / 2, 0);
  //     bottomFrame.position.set(0, -this.height / 2, 0);
  //     leftFrame.position.set(-this.width / 2, 0, 0);
  //     rightFrame.position.set(this.width / 2, 0, 0);

  //     this.object.add(topFrame, bottomFrame, leftFrame, rightFrame);

  //     this.scene.add(this.object);

  //     const light = new THREE.DirectionalLight(0xffffff, 1);
  //     light.position.set(5, 5, 5).normalize();
  //     this.scene.add(light);
  //   }

  //   //Door
  //   createDoor(): void {
  //     this.clearCanvas();

  //     const frameMaterial = new THREE.MeshStandardMaterial({ color: this.color });
  //     const glassMaterial = new THREE.MeshStandardMaterial({ color: 0x87CEEB, opacity: 0.5, transparent: true });



  //     // Frame - 4 parts (top, bottom, left, right)
  //     const frameGeometries = [
  //       new THREE.BoxGeometry(this.width+this.frameThickness, this.frameThickness, this.frameThickness),
  //       new THREE.BoxGeometry(this.width+this.frameThickness, this.frameThickness, this.frameThickness),
  //       new THREE.BoxGeometry(this.frameThickness, this.height, this.frameThickness),
  //       new THREE.BoxGeometry(this.frameThickness, this.height, this.frameThickness)
  //     ];

  //     const topFrame = new THREE.Mesh(frameGeometries[0], frameMaterial);
  //     const bottomFrame = new THREE.Mesh(frameGeometries[1], frameMaterial);
  //     const leftFrame = new THREE.Mesh(frameGeometries[2], frameMaterial);
  //     const rightFrame = new THREE.Mesh(frameGeometries[3], frameMaterial);

  //     topFrame.position.set(0, this.height / 2, 0);
  //     bottomFrame.position.set(0, -this.height / 2, 0);
  //     leftFrame.position.set(-this.width / 2, 0, 0);
  //     rightFrame.position.set(this.width / 2, 0, 0);

  //     this.object.add(topFrame, bottomFrame, leftFrame, rightFrame);

  //     // Glass
  //     const glassGeometry = new THREE.BoxGeometry(this.width, this.height, this.frameThickness / 2);
  //     const glass = new THREE.Mesh(glassGeometry, glassMaterial);
  //     this.object.add(glass);

  //     this.scene.add(this.object);

  //     const light = new THREE.DirectionalLight(0xffffff, 1);
  //     light.position.set(5, 5, 5).normalize();
  //     this.scene.add(light);
  //   }

  //   doubleSlidingWindow() {
  //     this.clearCanvas();

  //     const frameMaterial = new THREE.MeshStandardMaterial({ color: this.color });
  //     const glassMaterial = new THREE.MeshStandardMaterial({ color: 0x87CEEB, opacity: 0.5, transparent: true });


  //     // First Frame
  //     const frameGeometries1 = [
  //       new THREE.BoxGeometry(this.width + this.frameThickness, this.frameThickness, this.frameThickness),
  //       new THREE.BoxGeometry(this.width + this.frameThickness, this.frameThickness, this.frameThickness),
  //       new THREE.BoxGeometry(this.frameThickness, this.height, this.frameThickness),
  //       new THREE.BoxGeometry(this.frameThickness, this.height, this.frameThickness)
  //     ];

  //     const topFrame1 = new THREE.Mesh(frameGeometries1[0], frameMaterial);
  //     const bottomFrame1 = new THREE.Mesh(frameGeometries1[1], frameMaterial);
  //     const leftFrame1 = new THREE.Mesh(frameGeometries1[2], frameMaterial);
  //     const rightFrame1 = new THREE.Mesh(frameGeometries1[3], frameMaterial);

  //     topFrame1.position.set(-this.width / 2, this.height / 2, 0);
  //     bottomFrame1.position.set(-this.width / 2, -this.height / 2, 0);
  //     leftFrame1.position.set(-this.width, 0, 0);
  //     rightFrame1.position.set(0, 0, 0);

  //     this.object.add(topFrame1, bottomFrame1, leftFrame1, rightFrame1);

  //     const glassGeometry1 = new THREE.BoxGeometry(this.width, this.height, this.frameThickness / 2);
  //     const glass1 = new THREE.Mesh(glassGeometry1, glassMaterial);
  //     glass1.position.set(-this.width / 2, 0, 0);
  //     this.object.add(glass1);

  //     // Second Frame
  //     const frameGeometries2 = [
  //       new THREE.BoxGeometry(this.width + this.frameThickness, this.frameThickness, this.frameThickness),
  //       new THREE.BoxGeometry(this.width + this.frameThickness, this.frameThickness, this.frameThickness),
  //       new THREE.BoxGeometry(this.frameThickness, this.height, this.frameThickness),
  //       new THREE.BoxGeometry(this.frameThickness, this.height, this.frameThickness)
  //     ];

  //     const topFrame2 = new THREE.Mesh(frameGeometries2[0], frameMaterial);
  //     const bottomFrame2 = new THREE.Mesh(frameGeometries2[1], frameMaterial);
  //     const leftFrame2 = new THREE.Mesh(frameGeometries2[2], frameMaterial);
  //     const rightFrame2 = new THREE.Mesh(frameGeometries2[3], frameMaterial);

  //     topFrame2.position.set(this.width / 2, this.height / 2, -this.frameThickness);
  //     bottomFrame2.position.set(this.width / 2, -this.height / 2, -this.frameThickness);
  //     leftFrame2.position.set(0, 0, -this.frameThickness);
  //     rightFrame2.position.set(this.width, 0, -this.frameThickness);

  //     this.object.add(topFrame2, bottomFrame2, leftFrame2, rightFrame2);

  //     const glassGeometry2 = new THREE.BoxGeometry(this.width, this.height, this.frameThickness / 2);
  //     const glass2 = new THREE.Mesh(glassGeometry2, glassMaterial);
  //     glass2.position.set(this.width / 2, 0, -this.frameThickness);
  //     this.object.add(glass2);

  //     // Main Frame
  //     const mainFrameGeometries = [
  //       new THREE.BoxGeometry((this.width * 2) + this.frameThickness, this.frameThickness, this.frameThickness*3),
  //       new THREE.BoxGeometry((this.width * 2) + this.frameThickness, this.frameThickness, this.frameThickness*3),
  //       new THREE.BoxGeometry(this.frameThickness, this.height, this.frameThickness*3),
  //       new THREE.BoxGeometry(this.frameThickness, this.height, this.frameThickness*3)
  //     ];

  //     const mainTopFrame = new THREE.Mesh(mainFrameGeometries[0], frameMaterial);
  //     const mainBottomFrame = new THREE.Mesh(mainFrameGeometries[1], frameMaterial);
  //     const mainLeftFrame = new THREE.Mesh(mainFrameGeometries[2], frameMaterial);
  //     const mainRightFrame = new THREE.Mesh(mainFrameGeometries[3], frameMaterial);

  //     mainTopFrame.position.set(0, this.height / 2 + this.frameThickness / 2, -this.frameThickness/2);
  //     mainBottomFrame.position.set(0, -this.height / 2 - this.frameThickness / 2, -this.frameThickness/2);
  //     mainLeftFrame.position.set(-this.width, 0, -this.frameThickness/2);
  //     mainRightFrame.position.set(this.width, 0, -this.frameThickness/2);

  //     this.object.add(mainTopFrame, mainBottomFrame, mainLeftFrame, mainRightFrame);

  //     this.scene.add(this.object);

  //     const light = new THREE.DirectionalLight(0xffffff, 1);
  //     light.position.set(5, 5, 5).normalize();
  //     this.scene.add(light);
  //   }
}
