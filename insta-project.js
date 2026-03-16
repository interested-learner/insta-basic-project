/**
 * Copyright 2026 interested-learner
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./insta-arrow.js";
import "./insta-indicator.js";
import "./insta-slide.js";

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
    this.title = "";
    this.currentIndex = 0;
    this.t = {
      title: "",
    };
    this.slides = Array.from(this.querySelectorAll("insta-slide"));
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      currentIndex: { type: Number },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-default-slateMaxLight);
        font-family: var(--ddd-font-navigation);
        width: 850px;
        height: 410px; 
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

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <div class="row">
          <insta-arrow direction="prev"
            .index="${this.currentIndex}"
            .total="${this.slides ? this.slides.length : 0}"
            @prev-clicked="${this.prev}">
          </insta-arrow>
          <div class="slide-content">
            <slot></slot>
          </div>
          <insta-arrow direction="next"
            .index="${this.currentIndex}"
            .total="${this.slides ? this.slides.length : 0}"
            @next-clicked="${this.next}">
          </insta-arrow>
        </div>
        <insta-indicator
          @play-list-index-changed="${this.handleEvent}"
          .total="${this.slides ? this.slides.length : 0}"
          .currentIndex="${this.currentIndex}">
        </insta-indicator>
      </div>`;
  }

  handleEvent(e) {
    this.currentIndex = e.detail.index;
    this._updateSlides();
  }

next() {
  if (this.currentIndex < this.slides.length - 1) {
    this.currentIndex++;
    this._updateSlides();
  }
}

prev() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
    this._updateSlides();
  }
}

firstUpdated() {
  this._updateSlides();
}

_updateSlides() {
  this.slides.forEach((slide, i) => {
    slide.style.display = i === this.currentIndex ? "block" : "none";
  });

}

}

globalThis.customElements.define(PlayListProject.tag, PlayListProject);