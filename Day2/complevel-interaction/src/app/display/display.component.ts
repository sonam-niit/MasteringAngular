import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  inputs:['myarray']
  
})
export class DisplayComponent {

  myarray:any=[];

}
