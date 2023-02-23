import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent {

  dropdownvalue="";

  setDropDownValue(drpValue:any){
    this.dropdownvalue=drpValue.target.value
  }
}
