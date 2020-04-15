import { LitElement, html, css } from 'lit-element';
// eslint:disable-next-line
import { WiredMatIcon } from 'wired-icon/lib/wired-mat-icon';
// eslint:disable-next-line
import { WiredIcon } from 'wired-icon';

export class WiredIconTest extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
      }

      main {
        flex-grow: 1;
      }

      .icon {
        width: 100px;
      }
    `;
  }

  firstUpdated() {
    const wiredIcon = this.shadowRoot.getElementById('modifyme');
    const menuPath = "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z";
    wiredIcon.path = menuPath;
    wiredIcon.config = {fill: 'green', fillWeight: 2.5};

    const wiredMatIcon = this.shadowRoot.getElementById('modifymetoo');
    wiredMatIcon.icon = "flash_on";
    wiredMatIcon.config = {fill: 'red', fillWeight: 1};
  }

  render() {
    return html`
      <main>
        <wired-mat-icon class="icon" icon="settings"></wired-mat-icon>
        <wired-icon class="icon" path="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 0 0 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></wired-icon>
        <wired-icon class="icon" id="modifyme"></wired-icon>
        <wired-mat-icon class="icon" id="modifymetoo"></wired-mat-icon>
      </main>
    `;
  }
}
