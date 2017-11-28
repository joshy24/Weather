import { TestBed, inject } from '@angular/core/testing';

import { JsonparserService } from './jsonparser.service';

describe('JsonparserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonparserService]
    });
  });

  it('should be created', inject([JsonparserService], (service: JsonparserService) => {
    expect(service).toBeTruthy();
  }));
});
