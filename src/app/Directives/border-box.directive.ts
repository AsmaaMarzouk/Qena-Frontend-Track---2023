import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[BorderBox]'
})
export class BorderBoxDirective implements OnChanges {
  // property decorator
 @Input() borderColor:string="blue";
 @Input('BorderBox') mouseOutColor:string="yellow";
  // document.getElement
  // elementRef => document
  // nativeElement => getElement
  constructor(private elem:ElementRef) { 
  // this.elem.nativeElement.style.border='3px solid red';
  }
  ngOnChanges(): void {
    this.elem.nativeElement.style.border=`3px solid ${this.mouseOutColor}`;
  }
// Events 
// @HostListener('evenetName') functionName(){}
// onclick=func1()
// method decorator
@HostListener('mouseover') mouseoverFunc(){
  this.elem.nativeElement.style.border=`5px dashed ${this.borderColor}`;
}
@HostListener('mouseout') mouseoutFunc(){
  // this.elem.nativeElement.style.border=`5px dotted green`;
  this.elem.nativeElement.style.border=`5px solid ${this.mouseOutColor}`;

}

}
