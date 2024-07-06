import {LitElement, css, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { colors, style } from './styles/styles';

@customElement('click-counter')
class ClickCounter extends LitElement {
  static styles = [
    style,
    colors,
    css`
      .even {
        background-color: var(--primary);
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
