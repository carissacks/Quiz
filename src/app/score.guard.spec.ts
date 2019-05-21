import { TestBed, async, inject } from '@angular/core/testing';

import { ScoreGuard } from './score.guard';

describe('ScoreGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoreGuard]
    });
  });

  it('should ...', inject([ScoreGuard], (guard: ScoreGuard) => {
    expect(guard).toBeTruthy();
  }));
});
