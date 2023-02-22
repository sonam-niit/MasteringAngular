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
  saveSelected(id:any){
    this.selectedUser=id
  }
  getSelected(){
    if(this.selectedUser)
      return this.users[this.selectedUser-1]
    return {id:0,name:"empty",email:"test",country:"test"}
  }
  
}
