import { Directive, ElementRef } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Directive({
  selector: '[appRedBlack]'
})
export class RedBlackDirective {

  element: ElementRef;

  constructor(private elem: ElementRef) {
    console.log(elem);
    elem.nativeElement.style.color = "red";
    elem.nativeElement.style.backgroundColor = "black";
    this.element = elem;
  }

  ngOnInit(){
    this.element.nativeElement.innerText += " - rendered by custom appRedblack directive"
  }

}
