import { Component, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  inputs:['selectedUser']
})
export class UserDetailsComponent {

  selectedUser={id:"1",name:"test",email: "test@gmail.com",country:"india"}
  
}
