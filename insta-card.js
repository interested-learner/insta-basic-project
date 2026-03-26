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
        };
    }

    static get styles() {
        return [super.styles,
        css`
            :host {
                display: block;
            }
            .card {
                background: white;
                border-radius: 8px;
                max-width: 470px;
                margin: 0px auto;
                overflow: hidden;
            }
            .card-header {
                display: flex;
                align-items: center;
                padding: 12px 16px;
                gap: 10px;
            }
            .user-img {
                width: 38px;
                height: 38px;
                border-radius: 50%;
                object-fit: cover;
            }
            .card-image img {
                width: 100%;
                aspect-ratio: 1 / 1;
                object-fit: cover;
                display: block;
            }
            .heart-btn {
                background: none;
                border: none;
                cursor: pointer;
                font-size: 48px;
                padding: 8px 16px;
            }
            .heart-btn.liked {
                color: red;
            }
            .like-count {
                padding: 0 16px 8px;
                font-weight: bold;
                font-size: 14px;
            }

            .card-name {
                padding: 0 16px 4px;
                font-weight: bold;
                font-size: 14px;
            }
            .card-description {
                padding: 0 16px 12px;
                font-size: 14px;
                color: #555;
            }
            
            @media (prefers-color-scheme: dark) {
                .card {
                    background: #1c1c1c;
                    border: 1px solid #333;
                }
                .like-count {
                    color: white;
            }
        }
        `];
    }

    _toggleLike() {
        this.liked = !this.liked;
        this.likeCount = this.liked ? this.likeCount + 1 : this.likeCount - 1;
        localStorage.setItem(`liked-${this.name}`, JSON.stringify(this.liked));
        localStorage.setItem(`likeCount-${this.name}`, JSON.stringify(this.likeCount));
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
                    <img class="user-img" src="https://randomfox.ca/favicon.ico" alt="user profile pic" />
                    <span class="username">nature_daily</span>
                </div>
                
                <div class="card-image">
                    <img src="${this.image}" alt="Random Fox" loading="lazy"/>
                </div>

                <button
                    class="heart-btn ${this.liked ? 'liked' : ''}"
                    @click="${this._toggleLike}">
                    ${this.liked ? '\u2665' : '\u2665'}
                </button>

                <div class="like-count">${this.likeCount} likes</div>

                <div class="card-name">${this.name}</div>
                <div class="card-description">${this.description}</div>

            </div>
    `;
  }
}


globalThis.customElements.define(InstaCard.tag, InstaCard);