const path = require('path');

module.exports = {
    get ROOT() { return path.resolve(__dirname, '..', '..', '..', '..'); },
    get CLIENT() { return path.resolve(this.ROOT, 'client'); },
    get LOCK_FILE() { return path.resolve(this.ROOT, 'yarn.lock')},
    get DIST() { return path.resolve(this.ROOT, 'dist'); },
    get LOGS() { return path.resolve(this.ROOT, 'logs'); },
    get INDEX_HTML() { return path.resolve(this.DIST, 'index.html')},
    get TEMPLATE_HTML() {return path.resolve(this.DIST, 'index.tmpl.html')},
    get BUILD_CONFIG_FILE() { return 'build-config.js'; },
    get E2E_CONFIG_FILE() { return 'e2e-config.js'; },
    get SRC_FOLDER() { return 'src'; },
    get MODULE_NAMESPACE() { return 'tfg'; },
    get CORE_NAMESPACE() { return `${this.MODULE_NAMESPACE}-core`; },
    get APPS_NAMESPACE() { return `${this.MODULE_NAMESPACE}-apps`; },
    get STYLE_NAMESPACE() { return `${this.MODULE_NAMESPACE}-style`; },
    get CLIENT_NAMESPACES() { return [this.CORE_NAMESPACE, this.APPS_NAMESPACE, this.STYLE_NAMESPACE]; },
    get IMPORT_MAP_FILENAME() { return 'import-map.json'; },
    get BUNDLED_LIBS() { 
        return [
            'systemjs',
            'superagent'
        ]; 
    },
    get LIB_IMPORTS() {
        return [
            'superagent/dist/superagent',
            '@material/mwc-list/mwc-list-item'
        ] 
    }
};