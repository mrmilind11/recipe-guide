import { TestBed } from '@angular/core/testing';

import { CategoryDatabaseService } from './category-database.service';

describe('CategoryDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryDatabaseService = TestBed.get(CategoryDatabaseService);
    expect(service).toBeTruthy();
  });
});
