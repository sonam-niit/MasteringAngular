import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent {
  flag:boolean=false;
  isValid:boolean=true;
  changeData(valid:boolean){
    this.isValid=valid;
  }
}
