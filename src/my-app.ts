import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import "./click-counter";

@customElement('my-app')
export class MyApp extends LitElement {

  @property()
  pageName = "Blog"

  footerTemplate() {
    return html`
      <footer>
        Your footer here.
        <img src="/rectangle.svg" />
      </footer>`;
  }

  render() {
    return html`
      <header>${this.pageName}</header>
      <click-counter></click-counter>
      ${this.footerTemplate()}
    `;
  }
}

