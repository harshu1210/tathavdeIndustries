import { LoginService } from './login/login.service';
import { Component, OnInit, HostListener } from '@angular/core';
import * as THREE from 'three';
import { Tween } from '@tweenjs/tween.js';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { initializeApp } from '@angular/fire/app';
import { getAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  frameThicknessInches: number = 1.375;
  glassThicknessInches: number = 3;
  widthInches: number = 6;
  widthFeet: number = 2;
  heightInches: number = 8;
  heightFeet: number = 6;
  width: number = this.widthFeet + (this.widthInches / 12);
  height: number = this.heightFeet + (this.heightInches / 12);
  frameThickness: number = this.frameThicknessInches / 12;
  glassThickness: number = this.glassThicknessInches / 304.8;
  mainFrameColor: any = 0x000000;
  subFrameColor: any = 0x000000;

  products: any[] = [{ key: 'Glass', value: 'glass' }, { key: 'Single French Door (Frame Set)', value: 'frameset' }, { key: 'Single French Door', value: 'both' }, { key: 'Double Sliding Window (Frame Set)', value: 'frameset' }, { key: 'Double Sliding Window', value: 'both' },{ key: 'Triple Sliding Window (Frame Set)', value: 'frameset' },{ key: 'Triple Sliding Window', value: 'both' }];
  product: any = this.products[0];

  constructor(private LoginService:LoginService,private router:Router){
    // console.log('Firebase Config: ', environment.firebaseConfig);
    // const app = initializeApp(environment.firebaseConfig);
    // console.log('Firebase App Initialized: ', app);
    // const auth = getAuth(app);
    // console.log('Firebase Auth Initialized: ', auth);
  }

  ngOnInit(): void {
    // this.LoginService.getUsers().subscribe((user)=>{
    //   console.log(user);
    // })
    // this.router.navigate(['/login']);
  }

  valueChange(): void {
    this.width = this.widthFeet + (this.widthInches / 12);
    this.height = this.heightFeet + (this.heightInches / 12);
    this.frameThickness = this.frameThicknessInches / 12;
    this.glassThickness = this.glassThicknessInches / 304.8;
  }
}
