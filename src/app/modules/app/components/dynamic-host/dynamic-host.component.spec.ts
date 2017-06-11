import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { DynamicHostComponent } from './dynamic-host.component';
import { DomModelService } from '../../services/dom-model/dom-model.service';
import { TemplateGeneratorService } from '../../services/template-generator/template-generator.service';
import { InMemoryApiModule } from '../../../in-memory-api/in-memory-api.module';

describe('DynamicHostComponent', () => {
  let component: DynamicHostComponent;
  let fixture: ComponentFixture<DynamicHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicHostComponent ],
      imports: [
        HttpModule,
        InMemoryApiModule
      ],
      providers: [
        DomModelService,
        TemplateGeneratorService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
