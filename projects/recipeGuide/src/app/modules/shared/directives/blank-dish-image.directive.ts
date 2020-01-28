import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'img[blankDishImage]',
  host: {
    '(error)': 'setDefaultImage()'
  }
})
export class BlankDishImageDirective {
  /**************************** Constructor ************************/
  constructor(
    private el: ElementRef
  ) { }
  /**************************** Properties *************************/
  private defaultImagePath = '../../../../assets/images/sample_dish.png';
  /**************************** Methods ****************************/
  public setDefaultImage() {
    this.el.nativeElement.src = this.defaultImagePath;
  }

}
