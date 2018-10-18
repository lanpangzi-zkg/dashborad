import BaseFlow from '../../core/BaseFlow';

export default class GitHubApiFlow extends BaseFlow {
    getKey() {
        return 'gitHubApi';
    }

    addCount(count) {
        this.dispatch({
            count,
            type: 'addCount',
        });
    }

    queryApi(param = {}) {
        return this.httpGet('/', param).then((response) => {
            this.dispatch({
                apiData: response.data,
            });
            return response;
        });
    }
}