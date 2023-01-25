import { Component, OnInit } from '@angular/core';
import { ServiceEmpService } from '../services/service-emp.service';
import *as $ from 'jquery'
@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.css']
})
export class  EquipementComponent implements OnInit {
  equipement:any;
  employee:any;

  constructor(private serviceEmp: ServiceEmpService) { }

  ngOnInit(): void {
    this.serviceEmp.getEmployee().subscribe(data=>{
    this.employee=data;
  });
    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable1 tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
  }
    public getequipements(emp){
     

      this.serviceEmp.getequip(emp).subscribe(data=>{
      this.equipement=data;
      console.log(this.equipement);

    })}
}
