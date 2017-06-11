import { InMemoryDbService } from 'angular2-in-memory-web-api';
import { IDomNode } from 'app/modules/app/interfaces/idom-node';

/**
 * Mock service IDomNode for test's cases
 *
 * @export
 * @class DomNodeService
 * @implements {InMemoryDbService}
 */
export class DomNodeService implements InMemoryDbService {
  createDb() {
    const nodes = [{
      id: 1,
      tag: 'div',
      content: [
        {
          tag: 'span',
          attributes: {
            style: 'color: red'
          },
          content: [
            { text: 'Enter value:' }
          ]
        } as IDomNode,
        {
          tag: 'input',
          attributes: {
            type: 'text',
            value: 'test',
            style: 'color: green'
          }
        } as IDomNode
      ]
    } as IDomNode,
    {
      id: 2,
      tag: 'div',
      content: [
        {
          tag: 'span',
          attributes: {
            style: 'color: green'
          },
          content: [
            { text: 'Enter value:' }
          ]
        } as IDomNode,
        {
          tag: 'input',
          attributes: {
            type: 'text',
            value: 'test',
            style: 'color: green'
          }
        } as IDomNode
      ]
    } as IDomNode];

    return {nodes};
  }
}
