import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit { 

  @HostBinding('style.backgroundColor')  backgroundColor: string = 'transparent'; // it takes string property to which we want to bind  

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); 
    ///// 4th arg is '!important' flag
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');     
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseenterleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');     
    this.backgroundColor = 'transparent';    
  }


}
