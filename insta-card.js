/**
 * `insta-card`
 * An Instagram-style photo card that loads a fox from an API.
 */

import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class InstaCard extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "insta-card"; 
  }

    constructor() {
        super();
        this.image = "";
        this.link = "";
        this.liked = false;
        this.likeCount = 0;
        this.loading = true;
        this.name = "";
        this.description = "";
        this.authorName = "";
        this.authorImage = "";
        this.authorSince = "";
        this.channel = "";
    }

    static get properties() {
        return {
            ...super.properties,
            image: { type: String },
            link: { type: String },
            liked: { type: Boolean },
            likeCount: { type: Number },
            name: { type: String },
            description: { type: String },
            authorName: { type: String },
            authorImage: { type: String },
            authorSince: { type: String },
            channel: { type: String },
        };
    }

    static get styles() {
        return [super.styles,
        css`
            :host {
                display: block;
                color-scheme: light dark;
            }
            .card {
                background: light-dark(var(--ddd-theme-default-white), black);
                //removed border might need to add back here
                width: 100%;
                max-width: 470px;
                margin: 0px auto;
                overflow: hidden;
            }
            .card-header {
                display: flex;
                align-items: center;
                padding: var(--ddd-spacing-3) var(--ddd-spacing-4);
                gap: var(--ddd-spacing-3);
            }
            .user-img {
                width: 38px;
                height: 38px;
                border-radius: var(--ddd-radius-circle);
                object-fit: cover;
            }
            .card-image img {
                width: 100%;
                aspect-ratio: 1 / 1;
                object-fit: cover;
                display: block;
            }
            .card-image {
                width: 100%;
                background: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-coalyGray));
                min-height: 300px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .heart-btn {
                background: none;
                border: none;
                cursor: pointer;
                font-size: var(--ddd-icon-md);
                padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
            }
            .heart-btn.liked {
                color: red;
            }
            .like-count {
                padding: 0 16px 8px;
                font-weight: bold;
                font-size: var(--ddd-font-size-4xs);
                color: light-dark(black,var(--ddd-theme-default-white));
            }
            .share-btn {
                background: light-dark(black,var(--ddd-theme-default-white));
                border: none;
                cursor: pointer;
                font-size: var(--ddd-font-size-4xs);
                padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
                margin-left: 375px;
                color: light-dark(var(--ddd-theme-default-skyLight), var(--ddd-theme-default-beaverBlue));
                margin-top: -40px;
            }
            .card-name {
                padding: var(--ddd-spacing-0) var(--ddd-spacing-4) var(--ddd-spacing-1);
                font-weight: bold;
                font-size: var(--ddd-font-size-s);
            }
            .card-description {
                padding: var(--ddd-spacing-0) var(--ddd-spacing-4) var(--ddd-spacing-3);
                font-size: var(--ddd-font-size-xxs);
                color: light-dark(var(--ddd-theme-default-coalyGray), var(--ddd-theme-default-limestoneGray));
                height: var(--ddd-spacing-12);
                overflow-y: auto;
            }
            .card-description::-webkit-scrollbar {
                width: 12px;
            }

            .card-description::-webkit-scrollbar-track {
                background: var(--ddd-theme-default-limestoneLight);
            }

           .card-description::-webkit-scrollbar-thumb {
                background-color: var(--ddd-theme-default-beaverBlue);
                border-radius: var(--ddd-radius-rounded);
                border: 3px var(--ddd-theme-default-beaverBlue);
            }
            
        `];
    }

    _toggleLike() {
        this.liked = !this.liked;
        this.likeCount = this.liked ? this.likeCount + 1 : this.likeCount - 1;
        localStorage.setItem(`liked-${this.name}`, JSON.stringify(this.liked));
        localStorage.setItem(`likeCount-${this.name}`, JSON.stringify(this.likeCount));
    }

    _sharePhoto() {
        navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
    }

    updated(changedProperties) {
        if (changedProperties.has("name") && this.name) {
            const savedLiked = localStorage.getItem(`liked-${this.name}`);
            const savedCount = localStorage.getItem(`likeCount-${this.name}`);
            this.liked = savedLiked ? JSON.parse(savedLiked) : false;
            this.likeCount = savedCount ? JSON.parse(savedCount) : 0;
        }
    }

    render() {
        return html`
            <div class="card">
                <div class="card-header">
                    <img class="user-img" src="${this.authorImage}" alt="user profile pic" />
                    <div>
                        <div>${this.authorName}</div>
                        <div>@${this.channel} - since ${this.authorSince}</div>
                    </div>
                </div>
                <div class="card-image">
                    ${this.image
                    ? html`<img src="${this.image}" alt="${this.name}" loading="lazy"/>`
                    : html`<span>Loading...</span>`
                    }
                </div>

                <button
                    class="heart-btn ${this.liked ? 'liked' : ''}"
                    @click="${this._toggleLike}">
                    ${this.liked ? '\u2665' : '\u2665'}
                </button>

                <div class="like-count">${this.likeCount} likes</div>

                <button class="share-btn" @click="${this._sharePhoto}">Share</button>

                <div class="card-name">${this.name}</div>
                <div class="card-description">${this.description}</div>

            </div>
    `;
  }
}


globalThis.customElements.define(InstaCard.tag, InstaCard);