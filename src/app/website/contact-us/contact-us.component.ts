import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow } from '@angular/google-maps';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;
  center: google.maps.LatLngLiteral = {
    lat: 18.628303021962754,
    lng: 73.76231962425172
  };
  zoom = 15;
  markerOptions: google.maps.MarkerOptions = {
    icon: {
      url: '../../../assets/icons8-google-maps.svg',
      scaledSize: new google.maps.Size(50, 50) // Adjust the size as needed
    },
    label: {
      text: 'Tathawade Industries',
      color: 'black',
      fontSize: '12px',
      fontWeight: 'bold'
    }
  };



  constructor(){

  }

  ngOnInit(): void {

  }

  openInfoWindow() {
    if(this.infoWindow){
      this.infoWindow.open();
      console.log("cvbnm")
    }

  }
}
