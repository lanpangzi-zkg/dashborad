import BaseFlow from '../../core/BaseFlow';

export default class GitHubApiFlow extends BaseFlow {
    getKey() {
        return 'gitHubApi';
    }

    queryApi(path, param) {
        return this.httpGet(path, param).then((response) => {
            this.dispatch(response.data);
            return response;
        });
    }
}