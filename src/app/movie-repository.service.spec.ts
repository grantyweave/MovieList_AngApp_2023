import { TestBed } from '@angular/core/testing';

import { MovieRepositoryService } from './movie-repository.service';

describe('MovieRepositoryService', () => {
  let service: MovieRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
