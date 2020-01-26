import { TestBed } from '@angular/core/testing';

import { DishDatabaseService } from './dish-database.service';

describe('DishDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DishDatabaseService = TestBed.get(DishDatabaseService);
    expect(service).toBeTruthy();
  });
});
