var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, property } from 'lit-element';
import { WiredIcon } from './wired-icon';
import { iconsetLoader } from './iconset';
import { ICON_SET } from './iconset/iconset-full';
const findSvgPath = iconsetLoader(ICON_SET);
let WiredMatIcon = class WiredMatIcon extends WiredIcon {
    constructor() {
        super(...arguments);
        this._icon = '';
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        this._icon = value;
        this.path = this.path || findSvgPath(this.icon);
        this.aria = this.aria || this.icon;
    }
};
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], WiredMatIcon.prototype, "icon", null);
WiredMatIcon = __decorate([
    customElement('wired-mat-icon')
], WiredMatIcon);
export { WiredMatIcon };
