import { TestBed, inject } from '@angular/core/testing';

import { TemplateGeneratorService } from './template-generator.service';

describe('TemplateGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemplateGeneratorService]
    });
  });

  it('should be created', inject([TemplateGeneratorService], (service: TemplateGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
