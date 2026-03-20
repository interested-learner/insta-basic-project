/**
 * Copyright 2026 interested-learner
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class PlayListSlide extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "insta-slide";
  }

  constructor() {
    super();
    this.topHeading = "";
    this.secondHeading = "";
  }

  static get properties() {
    return {
      ...super.properties,
      topHeading: { type: String, attribute: "top-heading" },
      secondHeading: {type: String, attribute: "second-heading" },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .slide {  
        width: 60%;
        padding: var(--ddd-spacing-2);
      }
      .content {
        height: 175px;
        max-height: 175px;
        overflow-y: scroll;
      }
      .top-heading {
        font-size: var(--ddd-font-size-xs);
        font-weight: var(--ddd-font-weight-bold);
        text-transform: uppercase;
        margin: 0;
        color: var(--ddd-theme-default-beaverBlue);
      }
      .second-heading {
        font-size: var(--ddd-font-size-3xl);
        font-weight: var(--ddd-font-weight-bold);
        margin: 0;
        color: var(--ddd-theme-default-nittanyNavy);
      }
      .line {
        border: 1px solid var(--ddd-theme-default-beaverBlue);
        width: 75px;
        margin: var(--ddd-spacing-2) 0;
      }
      .content::-webkit-scrollbar {
  width: 12px;              
}

.content::-webkit-scrollbar-track {
  background: lightgray; 
}

.content::-webkit-scrollbar-thumb {
  background-color: var(--ddd-theme-default-beaverBlue); 
  border-radius: 20px;       
  border: 3px var(--ddd-theme-default-beaverBlue); 
}
    `];
  }

  render() {
    return html`
      <div class="slide">
        <p class="top-heading">${this.topHeading}</p>
        <h2 class="second-heading">${this.secondHeading}</h2>
        <hr class="line">
        <div class="content">
          <slot></slot>
        </div>
      </div>`;
  }

}

globalThis.customElements.define(PlayListSlide.tag, PlayListSlide);