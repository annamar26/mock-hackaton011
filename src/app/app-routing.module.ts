import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [{
  path: "", component:HomeComponent, pathMatch: "full"
},{
  path: "categories", component: CategoriesComponent, pathMatch: "full"
},
{
  path:"**", redirectTo: "HomeComponent", pathMatch: "full"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
