import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/model/employee';
import { ServiceEmpService } from '../services/service-emp.service';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent implements OnInit {
  public nouvemp=new Employee;
  id:number;

  constructor(private serviceemp:ServiceEmpService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.serviceemp.Updateemp(this.id).subscribe(data=>{
      this.nouvemp=data;
    })
  }
  onSubmit(){
    this.serviceemp.Updateemp2(this.id, this.nouvemp).subscribe(data=>{
      this.router.navigate(['listemployee']);
    })

  }

}
