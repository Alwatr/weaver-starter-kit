import {html, type PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import {BaseElement} from './base-element.js';

@customElement('app-greeting')
export class AppGreeting extends BaseElement {
  @property({type: Number})
  count = 0;

  override createRenderRoot() {
    return this;
  }

  override render() {
    return html`
      <h2 class="text-titleMedium text-secondary text-center select-none">سلام یرگه‌ها، چطوری ${this.count}تا کوص خوووللاااااا....</h2>
    `;
  }

  protected override firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);
    this.querySelector('img')?.addEventListener('click', () => this.clickHandler_());
  }

  private clickHandler_() {
    this.count++;
  }
}
