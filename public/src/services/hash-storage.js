import QUERY from './QUERY.js';

const hashStorage = {
    get() {
        const hash = window.location.hash.slice(1);
        return QUERY.parse(hash);
    },
    set(queryProps) {
        const target = this.get();
        Object.assign(target, queryProps);
        window.location.hash = QUERY.stringify(target);
    },
    remove(key) {
        const target = this.get();
        delete target[key];
        window.location.hash = QUERY.stringify(target);
    }   
};

export default hashStorage;