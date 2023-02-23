import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  id:string | null=""  ;
  constructor(private actroute:ActivatedRoute){}

  ngOnInit(){
    this.id =this.actroute.snapshot.paramMap.get('id');
  }
}
