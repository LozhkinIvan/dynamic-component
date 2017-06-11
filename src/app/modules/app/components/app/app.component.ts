import { Component } from '@angular/core';

/**
 * Root component
 *
 * @export
 * @class AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'checkout';
  url = '';

  /**
   * Create first component, with html from url
   * @memberof AppComponent
   */
  createFirst(): void {
    this.url = 'api/nodes/1';
  }

  /**
   * Create second component, with html from url
   * @memberof AppComponent
   */
  createSecond(): void {
    this.url = 'api/nodes/2';
  }
}
