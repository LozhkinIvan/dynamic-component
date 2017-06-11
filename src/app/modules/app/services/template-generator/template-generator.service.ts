import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { IDomNode } from '../../interfaces/idom-node';

/**
 * Common's service is converting from IDomNode to html string
 *
 * @export
 * @class TemplateGeneratorService
 */
@Injectable()
export class TemplateGeneratorService {

  constructor( @Inject(DOCUMENT) private document: Document) { }

  toHtml(domNode: IDomNode): string {
    if (!domNode) {
      return '';
    }

    const root = this.toDomNode(domNode);
    if (root instanceof HTMLElement) {
      return root.outerHTML;
    } else {
      return root.wholeText;
    }
  }

  toDomNode(domNode: IDomNode): HTMLElement | Text {
    let root: HTMLElement | Text;
    if (domNode.tag) {
      root = this.document.createElement(domNode.tag);
      if (domNode.attributes) {
        const attributes = Object.keys(domNode.attributes);
        for (const attribute of attributes) {
          root.setAttribute(attribute, domNode.attributes[attribute]);
        }
      }
      if (domNode.content) {
        for (const childNode of domNode.content) {
          root.appendChild(this.toDomNode(childNode));
        }
      }
    } else if (domNode.text) {
      root = document.createTextNode(domNode.text);
    }

    return root;
  }

}
