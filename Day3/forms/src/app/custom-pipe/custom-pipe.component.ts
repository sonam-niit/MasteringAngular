import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent {

  name:string="Sonam Soni";

  employees:any[]=[
    {id:'emp101',Name:'DuPreez Claire',DOB:'12/09/2002',Gender:'Female'},
    {id:'emp102',Name:'Mahlangu Frans',DOB:'12/09/2002',Gender:'male'},
    {id:'emp103',Name:'Megan',DOB:'12/09/2002',Gender:'Female'},
    {id:'emp104',Name:'Woest Wayne',DOB:'12/09/2002',Gender:'male'},
  ]
}
