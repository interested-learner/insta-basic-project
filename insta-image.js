/**
 * Copyright 2026 interested-learner
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `insta-image`
 * 
 * @demo index.html
 * @element insta-image
 */
export class InstaImage extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "insta-image";
  }

  constructor() {
    super();
  }

  static get properties() {
    return {
      src: { type: String },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
        img {
            width: 300px;
            height: 250px;
            object-fit: cover;
            margin: 50px;
            margin-left: 255px;
            padding: 0px;
            margin-right: 255px;
        }
    `];
  }

  render() {
    return html`
      <img src="${this.src}" loading="lazy" />
    `;
  }

}

globalThis.customElements.define(InstaImage.tag, InstaImage);