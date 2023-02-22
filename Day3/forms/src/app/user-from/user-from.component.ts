import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-from',
  templateUrl: './user-from.component.html',
  styleUrls: ['./user-from.component.css']
})
export class UserFromComponent {
  user:any={id:"",name:"",email:"",country:""}

  constructor(private service:UserService){}
  onSubmit(){
    alert("Form Submitted for Approval");
    this.service.saveUser(this.user)
    this.user={id:"",name:"",email:"",country:""}
  }
}
