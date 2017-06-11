import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { DynamicHostComponent } from '../dynamic-host/dynamic-host.component';
import { DomModelService } from '../../services/dom-model/dom-model.service';
import { TemplateGeneratorService } from '../../services/template-generator/template-generator.service';
import { HttpModule } from '@angular/http';
import { InMemoryApiModule } from 'app/modules/in-memory-api/in-memory-api.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DynamicHostComponent
      ],
      imports: [
        HttpModule,
        InMemoryApiModule
      ],
      providers: [
        DomModelService,
        TemplateGeneratorService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('checkout');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to checkout!!');
  }));
});
