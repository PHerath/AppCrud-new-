import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { EmployeeComponent } from './employee/employee.component';
// import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'items', component: ItemComponent },
  { path: 'employees', component: EmployeeComponent},
  { path: '', redirectTo: '/items', pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
    // CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
