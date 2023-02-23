import { Component } from '@angular/core';

@Component({
  selector: 'app-trackby',
  templateUrl: './trackby.component.html',
  styleUrls: ['./trackby.component.css']
})
export class TrackbyComponent {

  employees:any[];

  constructor(){
    this.employees=[
      {id:'emp101',Name:'DuPreez Claire',DOB:'12/09/2002',Gender:'Female'},
      {id:'emp102',Name:'Mahlangu Frans',DOB:'12/09/2002',Gender:'male'},
      {id:'emp103',Name:'Megan',DOB:'12/09/2002',Gender:'Female'},
      {id:'emp104',Name:'Woest Wayne',DOB:'12/09/2002',Gender:'male'},
    ]
  }
  getEmployees(){
    this.employees=[
      {id:'emp101',Name:'DuPreez Claire',DOB:'12/09/2002',Gender:'Female'},
      {id:'emp102',Name:'Mahlangu Frans',DOB:'12/09/2002',Gender:'male'},
      {id:'emp103',Name:'Megan',DOB:'12/09/2002',Gender:'Female'},
      {id:'emp104',Name:'Woest Wayne',DOB:'12/09/2002',Gender:'male'},
      {id:'emp105',Name:'Alex',DOB:'12/09/2002',Gender:'male'},
      {id:'emp106',Name:'Sonam',DOB:'12/09/2002',Gender:'female'}
    ]
  }
  trackByEmployeeId(index:number,employee:any):string{
    return employee.id;
  }
}
