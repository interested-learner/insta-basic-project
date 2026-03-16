// I will put the arrows here that can be clicked and change the slide of the playlist

/**
 * Copyright 2026 interested-learner
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `play-list-project`
 * 
 * @demo index.html
 * @element play-list-project
 */
export class PlayListArrow extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "insta-arrow";
  }

  constructor() {
    super();
    this.index = 0;
    this.total = 0;
    this.direction = "next"; // or "prev"
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      index : { type: Number },
      total : { type: Number },
      direction : { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--ddd-spacing-2);
      }
      button {
        background-color: white;
        color: var(--ddd-theme-default-beaverBlue);
        border: 2px solid var(--ddd-theme-default-beaverBlue);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        cursor: pointer;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      button:hover {
        opacity: 0.8;
      }
      button:disabled {
        opacity: 0.3;
        cursor: not-allowed;
        background-color: white;
      }
    `];
  }

  // Lit render the HTML
  render() {
    if (this.direction === "prev") {
      return html`
        <button ?disabled="${this.index === 0}"
          @click=${() => this.dispatchEvent(new CustomEvent('prev-clicked', {bubbles: true, composed: true}))}>
          &#10094;
        </button>`;
    } else {
      return html`
        <button ?disabled="${this.index === this.total - 1}"
          @click=${() => this.dispatchEvent(new CustomEvent('next-clicked', {bubbles: true, composed: true}))}>
          &#10095;
        </button>`;
    }
  }
}

globalThis.customElements.define(PlayListArrow.tag, PlayListArrow);