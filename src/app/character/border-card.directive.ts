import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[directiveBorderCard]'
})
export class BorderCardDirective implements OnInit{

  private defaultColor: string = '#009876';
  private initialColor: string = '#000000';

  private defaultHeight: number = 350;
  private initialHeight: number = 380;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.setBorder(this.initialColor);
  }

  @Input('directiveBorderCard') borderColor?: string;

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
    this.setHeight(this.initialHeight);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
    this.el.nativeElement.style.bordercolor = this.initialColor;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.backgroundcolor = color;
  }
}
