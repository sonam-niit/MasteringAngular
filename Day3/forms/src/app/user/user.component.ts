import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  selectedUser:any={id:"",name:"",email:"",country:""}
  users:any=[];
  constructor(private uservice:UserService){}
  ngOnInit(){
      this.users=this.uservice.getAllUsers();
  }
  
  onSelected(user:any){
    this.selectedUser=user;
    //this.uservice.saveSelected(user);
  }
}
