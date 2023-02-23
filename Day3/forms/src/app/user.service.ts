import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users:any=[]
  selectedUser:any;
  saveUser(user:any){
    user.id= this.users.length+1;
    this.users.push(user);
  }
  getAllUsers(){
    return this.users;
  }
  // saveSelected(u:any){
  //   this.selectedUser=u
  // }
  // getSelected(){
  //   if(this.selectedUser)
  //     return this.selectedUser;
  //   return {id:0,name:"empty",email:"test",country:"test"}
  // }
  
}
