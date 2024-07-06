import {LitElement, html, unsafeCSS} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import style from "./styles.css?inline";

import "./app-header";
import "./click-counter";

const cssstyle = unsafeCSS(style);

@customElement('my-app')
export class MyApp extends LitElement {
  static styles = [cssstyle];

  @property()
  pageName = "Blog"

  articleTemplate() {
    return html`<article>haha</article>`;
  }

  footerTemplate() {
    return html`<footer>Your footer here.</footer>`;
  }

  render() {
    console.log(cssstyle);
    return html`
      <app-header></app-header>
      <click-counter></click-counter>
      <footer>Your footer here.</footer>
    `;
  }
}
