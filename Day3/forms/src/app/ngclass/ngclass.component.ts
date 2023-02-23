import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent {

  addCssClasses(flag:string){
    let CssClasses;
    if(flag=="type1"){
      CssClasses={'one':true,'two':true}
    }
    else{
      CssClasses={'four':true,'five':true}
    }
    return CssClasses;
  }
}
