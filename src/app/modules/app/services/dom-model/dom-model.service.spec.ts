import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { DomModelService } from './dom-model.service';

describe('DomModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [DomModelService]
    });
  });

  it('should be created', inject([DomModelService], (service: DomModelService) => {
    expect(service).toBeTruthy();
  }));
});
