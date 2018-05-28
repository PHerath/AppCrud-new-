import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [ EmployeeService ]

})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshEmpoyeeList();
  }

  onSubmit(form: NgForm) {
    if (form.value._id === '') {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmpoyeeList();
        M.toast({html: 'Saved successfully', classes: 'rounded'});
      });
    } else {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmpoyeeList();
        M.toast({html: 'Updated successfully', classes: 'rounded'});
      });
    }
  }

  refreshEmpoyeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
    });
  }

  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are You Sure to delete this record ?') === true) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmpoyeeList();
        this.resetForm(form);
        M.toast({html: 'Deleted successfully', classes: 'rounded'});
      });
    }
  }


  resetForm(form?: NgForm) {

    if (form) {
      form.reset();
    }
    this.employeeService.selectedEmployee = {
      _id: '',
      name: '',
      position: '',
      office: '',
      salary: null
    };

  }

}
