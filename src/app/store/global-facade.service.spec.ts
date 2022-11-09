import { TestBed } from '@angular/core/testing';

import { GlobalFacadeService } from './global-facade.service';

describe('GlobalFacadeService', () => {
  let service: GlobalFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
