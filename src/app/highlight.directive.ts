import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    let color = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
    this.highlight(color);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  @HostListener('click') onClick(){
   let color = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
   this.highlight(color);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
