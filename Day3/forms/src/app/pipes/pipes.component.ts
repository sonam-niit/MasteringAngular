import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  name:string="Welcome Sonam Soni"
  pi:number=3.1515927
  num1:number=2345.5678;
  num2:number=0.123456;
  today:Date= new Date();
  jsonObject={id:1,name:"alex",email:"Alex@gmail.com"}
}
