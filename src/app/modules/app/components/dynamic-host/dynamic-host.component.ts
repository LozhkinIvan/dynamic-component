import { Component, OnInit, OnDestroy, Input, NgModule, ViewChild, ViewContainerRef, Compiler } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { IDomNode } from '../../interfaces/idom-node';
import { DomModelService } from '../../services/dom-model/dom-model.service';
import { TemplateGeneratorService } from '../../services/template-generator/template-generator.service';
import { Subscription } from 'rxjs/Subscription';


/**
 * Component is host for dynamic's components
 *
 * @export
 * @class DynamicHostComponent
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
@Component({
  selector: 'app-dynamic-host',
  templateUrl: './dynamic-host.component.html',
  styleUrls: ['./dynamic-host.component.css']
})
export class DynamicHostComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  private urls = new Subject<string>();
  private domNodes = new Observable<IDomNode>();

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  @Input()
  public set url(url) {
    this.urls.next(url);
  };

  constructor(
    private compiler: Compiler,
    private domModelService: DomModelService,
    private templateGeneratorService: TemplateGeneratorService) {
  }

  ngOnInit() {
    this.domNodes = this.urls
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(url => url
        ? this.domModelService.getDomModel(url)
        : Observable.of<IDomNode>(null)
      )
      .catch(error => Observable.of<IDomNode>(null));

    this.subscription = this.domNodes
      .subscribe(domNode => {
        const template = this.templateGeneratorService.toHtml(domNode)
        this.clearComponent();
        this.addComponent(template);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.clearComponent();
  }

  /**
   * Dynamically creating component and add it to host node
   *
   * @private
   * @param {string} template string
   *
   * @memberof DynamicHostComponent
   */
  private addComponent(template: string) {
    @Component({ template: template })
    class TemplateComponent { }

    @NgModule({ declarations: [TemplateComponent] })
    class TemplateModule { }

    const moduleWithComponentFactories = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
    const componentFactory = moduleWithComponentFactories.componentFactories.find(component =>
      component.componentType === TemplateComponent
    );
    const component = this.container.createComponent(componentFactory);
  }

  /**
   * Clear host node
   *
   * @private
   *
   * @memberof DynamicHostComponent
   */
  private clearComponent(): void {
    this.container.clear();
  }
}
