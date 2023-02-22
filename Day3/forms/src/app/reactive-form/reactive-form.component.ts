import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  registerForm:FormGroup;
  submitted:boolean=false;
  //dependency injection
  constructor(private builder:FormBuilder){}
  ngOnInit(){
    this.registerForm= this.builder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      gender: ['', [Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }
  get form(){
    return this.registerForm.controls;
  }
  onSubmit(){
    this.submitted=true;
    if(!this.registerForm.valid)
      return;
    alert("Form Submitted for Approval")
  }
}
