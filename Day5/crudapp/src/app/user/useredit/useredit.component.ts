import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent {

  constructor(private service:UserService,private activatedRoute:ActivatedRoute,
    private router:Router){}
  id:string | null;
  user:User;
  ngOnInit(){
    this.id= this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getUserById(Number(this.id)).subscribe(ob=>this.user=ob);
  }
  onSubmit(){
    this.service.updateUser(Number(this.id),this.user).subscribe(x=>console.log(x));
    alert("User Updated Successfully")
    this.router.navigate(['userlist'])
  }
}
