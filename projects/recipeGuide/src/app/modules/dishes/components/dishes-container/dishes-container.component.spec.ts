import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesContainerComponent } from './dishes-container.component';

describe('DishesContainerComponent', () => {
  let component: DishesContainerComponent;
  let fixture: ComponentFixture<DishesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
