import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
@Component({
  selector: 'dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss']
})
export class DishCardComponent implements OnInit {
  /************************* Constructor *******************************/
  constructor(
  ) { }
  /************************* Properties ********************************/
  public difficultyLevel = null;
  /************************* Methods ***********************************/
  ngOnInit() {
  }

}
