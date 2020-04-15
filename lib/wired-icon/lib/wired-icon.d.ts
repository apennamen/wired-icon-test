import { WiredBase } from 'wired-lib/lib/wired-base';
import { Point, Options } from 'wired-lib/lib/wired-lib';
import { TemplateResult, CSSResultArray } from 'lit-element';
export declare class WiredIcon extends WiredBase {
    config: Options;
    path: string;
    aria: string;
    viewBox: string;
    static get styles(): CSSResultArray;
    render(): TemplateResult;
    protected canvasSize(): Point;
    protected draw(svg: SVGSVGElement, size: Point): void;
    private addAriaLabel;
}
