import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UnitComponent} from './unit/unit.component';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppUrl} from './urls/app-url';
import {CategoriesComponent} from './categories/categories.component';
import {AdminComponent} from './admin/admin/admin.component';

const routes: Routes = [
  { path: AppUrl.ROUTE.getUnits, component: UnitComponent },
  { path: AppUrl.HOME_PAGE_URL, component: CategoriesComponent },
  { path: AppUrl.ROUTE.getLogin, component: LoginComponent },
  { path: AppUrl.ROUTE.admin, component: AdminComponent },
  { path: '',   redirectTo: AppUrl.HOME_PAGE_URL, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
