import Remote from './Remote';

class BaseFlow {
    constructor() {
        this.dispatcher = null;
    }

    getKey() {
        return null;
    }

    httpGet(...args) {
        return Remote.GET(...args);
    }

    httpPost() {}

    dispatch(props) {
        if (typeof this.dispatcher === 'function') {
            const { path = '/' } = props;
            const payload = Object.assign({}, props, { viewKey: this.getKey() });
            delete payload.path;
            this.dispatcher({
                type: `${this.getKey()}-${path}`,
                payload,
            });
        }
    }

    getService() {}
}

export default BaseFlow;
