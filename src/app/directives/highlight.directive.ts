import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.highlightColor('green');
  }

  private highlightColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlightColor('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlightColor('cyan');
  }
}
