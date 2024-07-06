import {LitElement, css, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { MyApp } from './my-app';

@customElement('click-counter')
class ClickCounter extends LitElement {
  static styles = [
    MyApp.styles,
    css`
      .even {
        background-color: green;
      }
`
  ];

  @state()
  private counter = 0

  clickHandler() {
    this.counter++;
  }

  render() {
    const even = this.counter % 2 == 0;
    const classes = { container: true, even };
    return html`
    <div class="${classMap(classes)}">
      <p>Count: ${this.counter}</p>
      <button @click=${this.clickHandler}>Increment</button>
    </div>`;
  }
}
