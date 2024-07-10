import { SnackbarService } from './Shared/snackbar/snackbar.service';
import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private snackbarService:SnackbarService){

  }

  menu:boolean=false
  ngOnInit(): void {
    this.snackbarService.openYesNoSnackbar('Are you a working professional at Tathawade Industries?', () => {

    });
  }

  toggleMenu(){
    this.menu= !this.menu;
  }
}
