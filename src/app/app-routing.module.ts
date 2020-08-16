import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterModel } from "./constants/route.module";
import { AppComponent } from './app.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { HomeComponent } from './pages/home/home.component';
import { SaveEmployeeComponent } from './pages/save-employee/save-employee.component';

const ROUTE = { ...RouterModel.ROUTES };

const routes: Routes = [
  { path: ROUTE.HOME, component:  HomeComponent},
  { path: ROUTE.EMPLOYEE, component: EmployeeComponent },
  { path: ROUTE.SAVEEMPLOYEE, component: SaveEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
