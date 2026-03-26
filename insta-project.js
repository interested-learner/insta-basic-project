/**
 * Copyright 2026 interested-learner
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./insta-arrow.js";
import "./insta-indicator.js";
import "./insta-card.js";

/**
 * `insta-project`
 * 
 * @demo index.html
 * @element insta-project
 */
export class PlayListProject extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "insta-project";
  }

  constructor() {
    super();
    const params = new URLSearchParams(window.location.search);
    this.currentIndex = params.get("activeIndex") ? parseInt(params.get("activeIndex")) : 0;
    this.items = [];
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      currentIndex: { type: Number },
      items: { type: Array },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        width: 500px;
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: -45px;
        margin-right: -45px;
      }
      .slide-content {
        flex: 1;
      }
      h3 span {
        font-size: var(--insta-project-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  async firstUpdated() {
    const response = await fetch("/api/data");
    const data = await response.json();
    this.items = data.images;
  }

  _updateUrl(index) {
    const url = new URL(window.location.href);
    url.searchParams.set("activeIndex", index);
    history.pushState(null, '', url.toString());
  }

  
  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <div class="row">
          <insta-arrow direction="prev"
            .index="${this.currentIndex}"
            .total="${this.items ? this.items.length : 0}"
            @prev-clicked="${this.prev}">
          </insta-arrow>
        
          <insta-card
          .image="${this.items[this.currentIndex]?.image || ''}"
          .name="${this.items[this.currentIndex]?.name || ''}"
          .description="${this.items[this.currentIndex]?.description || ''}">
        </insta-card>

          <insta-arrow direction="next"
            .index="${this.currentIndex}"
            .total="${this.items ? this.items.length : 0}"
            @next-clicked="${this.next}">
          </insta-arrow>
        </div>
        <insta-indicator
          @play-list-index-changed="${this.handleEvent}"
          .total="${this.items ? this.items.length : 0}"
          .currentIndex="${this.currentIndex}">
        </insta-indicator>
      </div>`;
  }


next() {
  if (this.currentIndex < this.items.length - 1) {
    this.currentIndex++;
    this._updateUrl(this.currentIndex);
  }
}

prev() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
    this._updateUrl(this.currentIndex);
  }
}

handleEvent(e) {
  this.currentIndex = e.detail.index;
  this._updateUrl(this.currentIndex);
}


  

}


globalThis.customElements.define(PlayListProject.tag, PlayListProject);