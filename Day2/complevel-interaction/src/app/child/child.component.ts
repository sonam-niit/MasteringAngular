import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs:['pdata'],
  outputs:['myChildEvent']
})
export class ChildComponent {

  pdata:string=""
  myChildEvent= new EventEmitter();
  onChange(value:string){
    this.myChildEvent.emit(value)
  }
}
