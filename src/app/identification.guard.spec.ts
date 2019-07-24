import { TestBed, async, inject } from '@angular/core/testing';

import { IdentificationGuard } from './identification.guard';

describe('IdentificationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdentificationGuard]
    });
  });

  it('should ...', inject([IdentificationGuard], (guard: IdentificationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
