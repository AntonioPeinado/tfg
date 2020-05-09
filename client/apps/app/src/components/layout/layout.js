import { Component } from '@tfg-core/component';
import layoutCSS from './layout.css'
import '@material/mwc-drawer';
import './menu/menu';
import './header/header';

class TFGAppLayout extends Component {
  static styles = layoutCSS;
  _toggleDrawer(){
    this.refs.drawer.open = !this.refs.drawer.open;
  }
  render() {
    return this.html`
      <mwc-drawer ref="drawer" hasHeader type="modal">
        <tfg-app-menu></tfg-app-menu>
        <div slot="appContent" class="layout__content">
          <tfg-app-header @toggle=${this._toggleDrawer}></tfg-app-header>
          <slot></slot>
        </div>
      </mwc-drawer>
    `; 
  }
}

customElements.define('tfg-app-layout', TFGAppLayout);