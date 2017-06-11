import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { BaseService } from '../base/base.service';
import { IDomNode } from '../../interfaces/idom-node';

/**
 * Api service for IDomNode
 *
 * @export
 * @class DomModelService
 * @extends {BaseService}
 */
@Injectable()
export class DomModelService extends BaseService {

  constructor(private http: Http) {
    super();
  }

  /**
   * Get elements
   *
   * @param {string} url
   * @returns {Observable<IDomNode>}
   *
   * @memberof DomModelService
   */
  getDomModel(url: string): Observable<IDomNode> {
    return this.http.get(url)
      .map(response => this.extractData<IDomNode>(response))
      .catch(this.handleError);
  }
}
