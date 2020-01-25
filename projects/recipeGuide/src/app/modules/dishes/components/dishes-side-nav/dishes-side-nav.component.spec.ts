import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesSideNavComponent } from './dishes-side-nav.component';

describe('DishesSideNavComponent', () => {
  let component: DishesSideNavComponent;
  let fixture: ComponentFixture<DishesSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishesSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
