import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  imgUrl:string="../assets/images/img1.jpg"
  altText:string="This is my nature Image"
  h:number=400
  w:number=500
  flag:boolean=false;
  text:string="Show Me"
  
  onClick(){
    this.flag=!this.flag
    if(this.flag){
      this.text="Hide Me"
    }else
    this.text="Show Me"
  }
}
