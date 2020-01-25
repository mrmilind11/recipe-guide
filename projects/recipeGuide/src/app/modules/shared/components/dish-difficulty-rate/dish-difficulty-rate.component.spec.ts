import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishDifficultyRateComponent } from './dish-difficulty-rate.component';

describe('DishDifficultyRateComponent', () => {
  let component: DishDifficultyRateComponent;
  let fixture: ComponentFixture<DishDifficultyRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishDifficultyRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishDifficultyRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
