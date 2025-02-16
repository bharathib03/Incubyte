import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCalcComponent } from './add-calc/add-calc.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: AddCalcComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
