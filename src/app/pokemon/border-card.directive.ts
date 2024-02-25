import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[pkmBorderCard]",
})
export class BorderCardDirective {
  constructor(private el: ElementRef) {
    // this.setHeight(180);
    this.setBorder("#f5f5f5");
  }

  @Input("pkmBorderCard") borderColor: string;

  // un eventListener cense verifier si le user survole la card
  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || "#009688");
    // this.setHeight(220);
  }

  // un eventListener cense verifier si le user quitte le survole de la card
  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder("#f5f5f5");
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }
  private setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
