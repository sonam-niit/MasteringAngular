import { Component } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent {

  users:User[];
  constructor(private service:UserService){}

  ngOnInit(){
    this.service.getAllUsers().subscribe(ob=>this.users=ob);
  }
}
