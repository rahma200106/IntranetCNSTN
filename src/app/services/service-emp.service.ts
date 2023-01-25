import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceEmpService {
  host="http://127.0.0.1:8090/app"

  constructor(private http: HttpClient) { }

  public getEmployee(){
    return this.http.get(this.host+"/empl");
  }
  public getUnites(){
    return this.http.get(this.host+"/unites");
  }
  public getequip(emp){
    return this.http.get("http://127.0.0.1:8090/employees/"+emp.matricule+"/equips");
  }
  public addemp(emp):Observable<Employee>{
    console.log(emp);
    return this.http.post<Employee>(this.host+"/addemployee",emp);
    
  }
 
  public onDelete(id): Observable<any> {
    console.log(id);
    return this.http.delete(`${this.host}/empl/${id}`);
    
  }
 
 public Updateemp(id: number): Observable<Employee> {
  
  return this.http.get<Employee>("http://127.0.0.1:8090/employees/"+id);
}
public Updateemp2(id: number, employee: Employee): Observable<Employee> {
  
  return this.http.put<Employee>("http://127.0.0.1:8090/employees/"+id, employee);
}
}
