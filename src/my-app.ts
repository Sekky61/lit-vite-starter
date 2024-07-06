import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import "./app-header";
import "./click-counter";

@customElement('my-app')
export class MyApp extends LitElement {

  @property()
  pageName = "Blog"

  articleTemplate() {
    return html`<article>haha</article>`;
  }

  footerTemplate() {
    return html`<footer>Your footer here.</footer>`;
  }

  render() {
    return html`
      <app-header></app-header>
      <click-counter></click-counter>
      <footer>Your footer here.</footer>
    `;
  }
}
