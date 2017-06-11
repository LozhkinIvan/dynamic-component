import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { DynamicHostComponent } from './components/dynamic-host/dynamic-host.component';
import { DomModelService } from './services/dom-model/dom-model.service';
import { TemplateGeneratorService } from './services/template-generator/template-generator.service';
import { InMemoryApiModule } from '../in-memory-api/in-memory-api.module';


@NgModule({
  declarations: [
    AppComponent,
    DynamicHostComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryApiModule
  ],
  providers: [
    DomModelService,
    TemplateGeneratorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
