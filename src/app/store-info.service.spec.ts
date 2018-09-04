import { TestBed, inject } from '@angular/core/testing';

import { StoreInfoService } from './store-info.service';

describe('StoreInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreInfoService]
    });
  });

  it('should be created', inject([StoreInfoService], (service: StoreInfoService) => {
    expect(service).toBeTruthy();
  }));
});
