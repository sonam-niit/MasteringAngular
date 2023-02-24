import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {

  user:User;
  constructor(private actroute:ActivatedRoute, 
    private service:UserService){}

  ngOnInit(){
    const id= this.actroute.snapshot.paramMap.get('id');
    console.log(id);
    this.service.getUserById(Number(id)).subscribe(ob=>this.user=ob);
    console.log(this.user)
  }
}
