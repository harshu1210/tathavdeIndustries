import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [{ path: 'login', component: LoginComponent, pathMatch: "full" },
  {path:"products",component:ProductListComponent,pathMatch:"full"},
  {path:"**",component:AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
