import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string="http://localhost:3000/users";
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl);
  }
  getUserById(id:number):Observable<User>{
    return this.http.get<User>(this.baseUrl+"/"+id);
  }
  saveUser(user:User){
    return this.http.post(this.baseUrl,user)
  }
  deleteUser(id:number){
    return this.http.delete(this.baseUrl+"/"+id);
  }
  updateUser(id:number,user:User){
    return this.http.put(this.baseUrl+"/"+id,user);
  }
}
