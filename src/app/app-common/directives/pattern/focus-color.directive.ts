import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appFocusColor]'
})
export class FocusColorDirective {

  constructor(private elRef: ElementRef) {}

  @HostListener('mouseover')
  onMouseOver(): void {
    this.elRef.nativeElement.style.backgroundColor = '#dcdcdc';
  }

  @HostListener('mouseout')
  onMouseOut(): void {
    this.elRef.nativeElement.style.backgroundColor = '#f7f7f7';
  }

}
