import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { EmployeeComponent } from './employee/employee.component';
// import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'inventory', component: InventoryComponent },
  { path: 'employees', component: EmployeeComponent},
  { path: '', redirectTo: '/inventory', pathMatch: 'full' }
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
