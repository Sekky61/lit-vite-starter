import {LitElement, adoptStyles, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import "./click-counter";
import { style } from './styles/styles';

@customElement('my-app')
export class MyApp extends LitElement {

  static styles = css`
  :host {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  header, footer {
    background-color: var(--background);
  }
  
  .content {
    flex-grow: 1;
  }

  .logo {
    width: 40px;
  }
`

  @property()
  pageName = "Blog"

  footerTemplate() {
    return html`
      <footer>
        Your footer here.
        <img class="logo" src="/rectangle.svg" />
      </footer>`;
  }

  render() {
    return html`
      <header>${this.pageName}</header>
      <div class="content">
        <click-counter></click-counter>
      </div>
      ${this.footerTemplate()}
    `;
  }

  // Enable CSS sharing (component is isolated by default).
  override connectedCallback () {
    super.connectedCallback();
    adoptStyles(this.renderRoot as ShadowRoot, [ style, MyApp.styles ]);
  }
}

