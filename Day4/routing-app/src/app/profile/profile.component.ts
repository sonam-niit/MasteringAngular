import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  username= this.actroute.paramMap.pipe(
    map((params:ParamMap)=>params.get('username'))
  );
  constructor(private actroute:ActivatedRoute){}
}
