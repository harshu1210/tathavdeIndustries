import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './website/home/home.component';
import { ContactUsComponent } from './website/contact-us/contact-us.component';

const routes: Routes = [{ path: 'login', component: LoginComponent, pathMatch: "full" },
  {path:"products",component:ProductListComponent,pathMatch:"full"},
  {path:'home',component:HomeComponent,pathMatch:"full"},{path:'contact-us',component:ContactUsComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
