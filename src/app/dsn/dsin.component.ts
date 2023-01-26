import { Component, OnInit } from '@angular/core';
import *as $ from 'jquery'
import dsn from './contactdsn.json';

interface contactdsn {
  id: Number;
  nom: String;
  mail: String;
  Tel: Number;
  
} 

@Component({
  selector: 'app-dsin',
  templateUrl: './dsin.component.html',
  styleUrls: ['./dsin.component.css']
})
export class DSINComponent
  {
    little='angular-bootstrap-scaffolding';
  
  
  dsncontact:contactdsn[]=dsn;
    ngOnInit(){
      $(document).ready(function(){
        $("#myInput").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });
      
    };
  }

