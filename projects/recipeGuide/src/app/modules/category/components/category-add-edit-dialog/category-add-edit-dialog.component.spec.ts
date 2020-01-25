import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAddEditDialogComponent } from './category-add-edit-dialog.component';

describe('CategoryAddEditDialogComponent', () => {
  let component: CategoryAddEditDialogComponent;
  let fixture: ComponentFixture<CategoryAddEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryAddEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAddEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
