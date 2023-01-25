import { Employee } from 'src/model/employee';
import { Component, OnInit } from '@angular/core';
import { ServiceEmpService } from '../services/service-emp.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import *as $ from 'jquery'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee:any;
  ajout:boolean=false;
  unites:any;
  nouvemp=new Employee();
  id: number;
  


  constructor(private serviceEmp: ServiceEmpService,
    private route:Router) { }

  ngOnInit(): void {
    this.serviceEmp.getEmployee().subscribe(data=>{
      this.employee=data;
  } 
  
  )
  this.serviceEmp.getUnites().subscribe(data=>{
    this.unites=data;
    console.log(data)

  });
  $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

}
  ajouteremp(){
    this.ajout=true;
    console.log(this.ajout);
  }
  annulerajout(){
    this.ajout=false;
  }
 

 Updateemp(id: number){
  this.route.navigate(['update_employee',id]) ;

 }
 clickMethod(id, name) {
  if(confirm("Are you sure to delete "+name)) {
    this.serviceEmp.onDelete(id).subscribe(data=>{
      console.log(data);
      
      this.ngOnInit();
    })
  }
}

}
