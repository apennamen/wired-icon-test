var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { WiredBase, BaseCSS } from 'wired-lib/lib/wired-base';
import { path, svgNode } from 'wired-lib/lib/wired-lib';
import { customElement, html, css, property } from 'lit-element';
const DEFAULT_CONFIG = {
    roughness: 0.1,
};
let WiredIcon = class WiredIcon extends WiredBase {
    constructor() {
        super(...arguments);
        this.config = DEFAULT_CONFIG;
        this.path = '';
        this.aria = '';
        this.viewBox = '-1 0 26 24';
    }
    static get styles() {
        return [
            BaseCSS,
            css `
            :host {
                display: block;
            }
          `
        ];
    }
    render() {
        return html `<svg></svg>`;
    }
    canvasSize() {
        const s = this.getBoundingClientRect();
        return [s.width, s.height];
    }
    draw(svg, size) {
        if (!this.path)
            return;
        const min = Math.min(size[0], size[1]);
        svg.setAttribute('width', `${min}`);
        svg.setAttribute('height', `${min}`);
        svg.setAttribute('viewBox', this.viewBox);
        this.addAriaLabel(svg, this.aria);
        try {
            path(this.path, svg, Object.assign(Object.assign({}, DEFAULT_CONFIG), this.config));
        }
        catch (e) {
            // Die in silence in case of failure
        }
    }
    addAriaLabel(svg, iconName) {
        svg.setAttribute('aria-labelledby', 'title');
        const titleNode = svgNode('title', { id: 'title' });
        titleNode.innerHTML = `${iconName} icon`;
        svg.appendChild(titleNode);
    }
};
__decorate([
    property({ type: Object, reflect: true }),
    __metadata("design:type", Object)
], WiredIcon.prototype, "config", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], WiredIcon.prototype, "path", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], WiredIcon.prototype, "aria", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], WiredIcon.prototype, "viewBox", void 0);
WiredIcon = __decorate([
    customElement('wired-icon')
], WiredIcon);
export { WiredIcon };
