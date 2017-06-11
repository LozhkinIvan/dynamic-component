import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DomNodeService } from './services/dom-node.service';

@NgModule({
  imports: [
    CommonModule,
    InMemoryWebApiModule.forRoot(DomNodeService, { delay: 500 })
  ],
  declarations: [],
  exports: [InMemoryWebApiModule],
  providers: [DomNodeService]
})
export class InMemoryApiModule { }
