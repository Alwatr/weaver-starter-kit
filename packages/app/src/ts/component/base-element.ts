import {LitElement} from 'lit';

export class BaseElement extends LitElement {
  customClass = 'block';

  override connectedCallback(): void {
    super.connectedCallback();
    this.setCustomClass_();
  }

  private customClassApplied_ = false;
  private setCustomClass_() {
    if (this.customClassApplied_) return;
    this.className = `${this.customClass} ${this.className}`;
    this.customClassApplied_ = true;
  }

  protected override createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }
}
