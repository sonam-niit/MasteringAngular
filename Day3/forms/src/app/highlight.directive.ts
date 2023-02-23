import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(eref:ElementRef,render:Renderer2){
    render.setStyle(eref.nativeElement,'color','magenta')
  }
  // constructor(eref:ElementRef) { 
  //   eref.nativeElement.style.backgroundColor="yellow"
  // }

}
