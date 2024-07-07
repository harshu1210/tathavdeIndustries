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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
