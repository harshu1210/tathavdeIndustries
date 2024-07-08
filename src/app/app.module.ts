import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { GlassComponent } from './products/glass/glass.component';
import { FrameComponent } from './products/frame/frame.component';
import { SingleFrenchDoorComponent } from './products/single-french-door/single-french-door.component';
import { DoubleSlidingWindowComponent } from './products/double-sliding-window/double-sliding-window.component';
import { DoubleSlidingWindowFrameSetComponent } from './products/double-sliding-window-frame-set/double-sliding-window-frame-set.component';
import { TripleSlidingWindowFrameSetComponent } from './products/triple-sliding-window-frame-set/triple-sliding-window-frame-set.component';
import { TripleSlidingWindowComponent } from './products/triple-sliding-window/triple-sliding-window.component';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment.prod'; // <--- Environment variables.
import { CommonModule } from '@angular/common';
import {AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    GlassComponent,
    FrameComponent,
    SingleFrenchDoorComponent,
    DoubleSlidingWindowComponent,
    DoubleSlidingWindowFrameSetComponent,
    TripleSlidingWindowFrameSetComponent,
    TripleSlidingWindowComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }

