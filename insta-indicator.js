/**
 * Copyright 2026 interested-learner
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `insta-indicator`
 * 
 * @demo index.html
 * @element insta-indicator
 */
export class PlaylistIndicator extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "insta-indicator";
  }

  constructor() {
    super();
        this.total = 0;
        this.currentIndex = 0;
        this.thumbnails = [];
  }

  static get properties() {
    return {
      ...super.properties,
      total: { type: Number },
      currentIndex: { type: Number },
      thumbnails: { type: Array },
    };
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
      }
      .thumbs {
        display: flex;
        justify-content: center;
        gap: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-2);
      }
      .thumb {
        width: var(--ddd-icon-sm);
        height: var(--ddd-icon-sm);
        object-fit: cover;
        border-radius: var(--ddd-radius-xs);
        cursor: pointer;
        opacity: 0.5;
      }
      .thumb.active {
        opacity: 1;
        border: 2px solid var(--ddd-theme-default-beaverBlue);
      }
    `];
  }
  

  render() {
    let start = Math.max(0, this.currentIndex - 2);
    let end = start + 5;
    if (end > this.total) {
      end = this.total;
      start = Math.max(0, end - 5);
    }
    const visible = [];

    for (let i = start; i < end; i++) {
      visible.push(html`
        <img
          @click="${() => this._handleThumbnailClick(i)}"
          src="${this.thumbnails[i] || ''}"
          class="thumb ${i === this.currentIndex ? 'active' : ''}"
          alt="slide ${i + 1}"
        />
      `);
    }

    return html`
      <div class="thumbs">
        ${visible}
      </div>
    `;
}

_handleThumbnailClick(index) {
  this.dispatchEvent(new CustomEvent("play-list-index-changed", {
    composed: true,
    bubbles: true,
    detail: { index: index }
  }));
}

}

globalThis.customElements.define(PlaylistIndicator.tag, PlaylistIndicator);