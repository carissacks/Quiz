import { TestBed } from '@angular/core/testing';

import { QuestiondataService } from './questiondata.service';

describe('QuestiondataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestiondataService = TestBed.get(QuestiondataService);
    expect(service).toBeTruthy();
  });
});
