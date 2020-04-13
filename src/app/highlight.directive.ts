// import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// @Directive({
//   selector: '[appHighlight]'
// })
// export class HighlightDirective {

//   @Input('appHighlight') highlightColor:string;
//   private el:HTMLElement;

//   constructor(private el: ElementRef) {}

//   @HostListener('mouseenter') onMouseEnter() {
//     this.highlight('teal');
//   }

//   @HostListener('mouseleave') onMouseLeave() {
//     this.highlight(null);
//   }

//   private highlight(color: string) {
//     this.el.nativeElement.style.backgroundColor = color;
//   }

// }

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
selector: '[appHighlight]'
})
export class HighlightDirective {

@Input('appHighlight') highlightColor: string;

private el: HTMLElement;

constructor(el: ElementRef) {
this.el = el.nativeElement;
}

@HostListener('mouseenter') onMouseEnter() {
this.highlight(this.highlightColor || 'lime');
}

@HostListener('mouseleave') onMouseLeave() {
this.highlight(null);
}

private highlight(color: string) {
this.el.style.backgroundColor = color;
}
} 