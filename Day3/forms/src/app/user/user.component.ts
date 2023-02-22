import { Component, ViewChild } from '@angular/core';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users:any=[];
  constructor(private uservice:UserService){}
  ngOnInit(){
      this.users=this.uservice.getAllUsers();
  }
  
  onSelected(user:any){
    this.uservice.saveSelected(user);

  }
}
