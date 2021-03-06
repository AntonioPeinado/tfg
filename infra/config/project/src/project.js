const {resolve} = require('path');

module.exports = {
  get ROOT() {
    return resolve(__dirname, '..', '..', '..', '..');
  },
  get LOCK_FILE() {
    return resolve(this.ROOT, 'yarn.lock');
  },
  get NODE_VERSION() {
    const package = require(resolve(this.ROOT, 'package.json'));
    return package.engines.node;
  },
  get DIST() {
    return resolve(this.ROOT, 'dist');
  },
  get LOGS() {
    return resolve(this.ROOT, 'logs');
  },
  get INDEX_HTML() {
    return resolve(this.DIST, 'index.html');
  },
  get TEMPLATE_HTML() {
    return resolve(this.DIST, 'index.tmpl.html');
  },
  get TEMPLATE_UT() {
    return resolve(
      this.ROOT,
      'infra',
      'testing',
      'ut',
      'src',
      'context.tmpl.html'
    );
  },
  get INDEX_UT() {
    return resolve(this.DIST, 'context.html');
  },
  get BUILD_CONFIG_FILE() {
    return 'build-config.js';
  },
  get SRC_FOLDER() {
    return 'src';
  },
  get MODULE_NAMESPACE() {
    return 'tfg';
  },
  get CORE_NAMESPACE() {
    return `${this.MODULE_NAMESPACE}-core`;
  },
  get APPS_NAMESPACE() {
    return `${this.MODULE_NAMESPACE}-apps`;
  },
  get STYLE_NAMESPACE() {
    return `${this.MODULE_NAMESPACE}-style`;
  },
  get CLIENT_NAMESPACES() {
    return [this.CORE_NAMESPACE, this.APPS_NAMESPACE, this.STYLE_NAMESPACE];
  },
  get IMPORT_MAP_FILENAME() {
    return 'import-map.json';
  },
  get BUNDLED_LIBS() {
    return ['systemjs', 'superagent'];
  },
  get LIB_IMPORTS() {
    return ['superagent/dist/superagent', '@material/mwc-list/mwc-list-item'];
  },
};
