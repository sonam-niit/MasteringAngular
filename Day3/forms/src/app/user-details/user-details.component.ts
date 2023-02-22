import { Component, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  user={id:"1",name:"test",email: "test@gmail.com",country:"india"}
  constructor(private service:UserService){}

  ngOnInit(){
    this.getUserDetails();
  }
  getUserDetails(){
    this.user=this.service.getSelected();
    console.log(this.user)
  }
}
