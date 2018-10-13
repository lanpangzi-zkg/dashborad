import Remote from './Remote';

class BaseService {
    get(...args) {
        Remote.GET(...args);
    }

    post(...args) {
        Remote.POST(...args);
    }
}

export default BaseService;
