import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'dish-difficulty-rate',
  templateUrl: './dish-difficulty-rate.component.html',
  styleUrls: ['./dish-difficulty-rate.component.scss']
})
export class DishDifficultyRateComponent implements OnInit {
  /************************* Constructor *******************************/
  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry
  ) {
    this.matIconRegistry.addSvgIcon('selected', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/svg/chef-hat.svg'))
    this.matIconRegistry.addSvgIcon('not-selected', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/svg/chef-hat-blank.svg'))
  }
  /************************* Properties ********************************/
  @Input() level: number = null;
  @Output() levelChange = new EventEmitter<number>();

  @Output() onUpdate = new EventEmitter();

  @Input() viewMode: boolean = false;

  public levelList = [1, 2, 3, 4, 5];
  public hoveredLevel = null;
  /************************* Methods ***********************************/
  ngOnInit() {
  }
  hoverRemoved() {
    this.hoveredLevel = null;
  }
  hoverEnter(val: number) {
    if (this.level === null) {
      this.hoveredLevel = val;
    }
  }
  onSelect(val: number) {
    this.levelChange.emit(val);
    this.onUpdate.emit();
  }

}
