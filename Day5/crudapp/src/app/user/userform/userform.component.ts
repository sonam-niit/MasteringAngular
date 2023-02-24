import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent {

  user:User= new User();

  constructor(private service:UserService,private router:Router){}
  onSubmit(){
    //console.log(this.user)
    this.service.saveUser(this.user).subscribe(x=>console.log(x));
    alert("User added Successfully")
    this.router.navigate(['userlist'])
  }
}
