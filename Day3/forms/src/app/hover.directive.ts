import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input()appHover="";
  constructor(private eref:ElementRef) { }

  highlight(color:string){
    this.eref.nativeElement.style.color=color
  }
  @HostListener("mouseenter")onMouseEnter(){
    this.highlight(this.appHover)
  }
  @HostListener("mouseleave")onMouseLeave(){
    this.highlight("");
  }
}
