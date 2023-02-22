import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  fname:string=""
  lname:string=""
  email:string=""
  password:string=""

  onSubmit(){
    alert("Form Submitted for Approval");
    console.log(this.fname+" "+this.lname);
    this.fname=""; this.lname="";this.email="",this.password=""
  }
}
