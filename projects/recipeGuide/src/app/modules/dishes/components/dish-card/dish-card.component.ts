import { Router } from '@angular/router';
import { DishDatabaseService } from './../../../shared/services/dish-database.service';
import { DishModel } from './../../../../models/dishes/dish.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { take } from 'rxjs/operators';
@Component({
  selector: 'dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss']
})
export class DishCardComponent implements OnInit {
  /************************* Constructor *******************************/
  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
    private dishDatabaseService: DishDatabaseService,
    private router: Router
  ) {
    this.matIconRegistry.addSvgIcon('chef-hat', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/svg/chef-hat-blank.svg'))
  }
  /************************* Properties ********************************/
  @Input() dishData: DishModel;
  @Output() dishDataChange = new EventEmitter<DishModel>();
  @Output() onUpdate = new EventEmitter<DishModel>();
  @Output() onDelete = new EventEmitter<string>();

  public difficultyMap = { 'EASY': 'Easy', 'MODERATE': 'Moderate', 'HARD': 'Hard', 'EXPERT': 'Expert' };
  public timeUnitMap = { 'MIN': 'min.', 'HOUR': 'hr.' };
  /************************* Methods ***********************************/
  ngOnInit() {
  }
  public deleteDish() {
    this.dishDatabaseService.deleteDish(this.dishData._id).pipe(take(1)).subscribe(() => {
      this.onDelete.emit(this.dishData._id);
    })
  }
  public editDish() {
    this.router.navigate(['/dish/edit', this.dishData._id], { queryParamsHandling: 'preserve' });
  }
  public viewDish() {
    this.router.navigate(['/dish/details', this.dishData._id], { queryParamsHandling: 'preserve' });
  }
}
