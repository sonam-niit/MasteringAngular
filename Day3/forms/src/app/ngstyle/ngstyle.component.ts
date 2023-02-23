import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent {

  addButtonCSS(){
    let cssStyles={
      'color':'red',
      'font-weight':500,
      'font-size.px':20
    }
    return cssStyles;
  }
  employees:any[]=[
    {id:'emp101',Name:'DuPreez Claire',DOB:'12/09/2002',Gender:'Female',rating:4.5},
    {id:'emp102',Name:'Mahlangu Frans',DOB:'12/09/2002',Gender:'Male',rating:4.7},
    {id:'emp103',Name:'Megan',DOB:'12/09/2002',Gender:'Female',rating:4.9},
    {id:'emp104',Name:'Woest Wayne',DOB:'12/09/2002',Gender:'Male',rating:4.4},
  ]
}
