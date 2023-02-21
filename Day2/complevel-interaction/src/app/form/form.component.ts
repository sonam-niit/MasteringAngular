import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  myarray:any=[];
  data={id:" ",name:" ",email:" "}

  save(){
    this.myarray.push(this.data);
    this.data={id:" ",name:" ",email:" "}
  }
}
