import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './pages/categories-list/categories-list.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HomeComponent } from './pages/home/home.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['']);

const routes: Routes = [{
  path: "", component:HomeComponent, pathMatch: "full"
},{
  path: "category", component: CategoriesComponent, pathMatch: "full", canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToHome } 
},
{
  path: "categoryList", component: CategoriesListComponent, pathMatch: "full"
},
{
  path:"**", redirectTo: "HomeComponent", pathMatch: "full"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
