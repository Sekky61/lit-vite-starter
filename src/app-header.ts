import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('app-header')
class Header extends LitElement {

  @property()
  pageName = "My Blog"

  render() {
    return html`<header>${this.pageName}</header>`;
  }
}
