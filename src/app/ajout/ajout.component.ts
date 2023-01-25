import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/model/employee';
import { ServiceEmpService } from '../services/service-emp.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  nouvemp=new Employee();

  constructor(private serviceEmp:ServiceEmpService,
    private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    this.serviceEmp.addemp(this.nouvemp).subscribe(data=>{
      
 
      this.route.navigate(['/listemployee']);
     
    })
 
    /*console.log(this.nouvemp);*/
  }

}
