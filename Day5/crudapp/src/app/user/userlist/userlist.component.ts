import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {

  users:User[]
  constructor(private service:UserService){}
  ngOnInit(){
    this.service.getAllUsers().subscribe(ob=>this.users=ob)
  }
  onDelete(id:number){
    this.users= this.users.filter(x=>x.id!=id);
    this.service.deleteUser(id).
    subscribe(x=>console.log(x));
  }
}
