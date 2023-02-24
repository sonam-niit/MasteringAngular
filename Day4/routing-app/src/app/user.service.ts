import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string="https://jsonplaceholder.typicode.com/users/";

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl);
  }
  getUserById(id:number):Observable<User>{
    return this.http.get<User>(this.baseUrl+id);
  }
}
