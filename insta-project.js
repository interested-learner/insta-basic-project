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
    this.currentIndex = 0;
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
    const requests = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(() => fetch("https://randomfox.ca/floof/").then(res => res.json()));
    this.items = await Promise.all(requests);
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
        
          <insta-card></insta-card>

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

  handleEvent(e) {
    this.currentIndex = e.detail.index;
  }

next() {
  if (this.currentIndex < this.items.length - 1) {
    this.currentIndex++;
  }
}

prev() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
  }
}


}


globalThis.customElements.define(PlayListProject.tag, PlayListProject);