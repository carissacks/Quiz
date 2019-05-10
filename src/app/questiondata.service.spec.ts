import { TestBed } from '@angular/core/testing';
import { QuestionDataService } from './questiondata.service';

describe('QuestiondataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionDataService = TestBed.get(QuestionDataService);
    expect(service).toBeTruthy();
  });
});
