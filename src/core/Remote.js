import axios from 'axios';
import Config from '../config';

class Remote {
    static GET(path, param) {
        return this.HTTP(path, param);
    }

    static POST(path, param) {
        return this.HTTP(path, param, 'post');
    }

    static HTTP(path, param, method = 'get') {
        const url = `${Config.API_HOST}${path}`;
        return axios({
            method,
            url,
            data: param,
            timeout: 5000,
        }).then((response) => {
            // const { status, data } = response;
            // if (status === 200) {

            // }
            response.type = path;
            return response;
        });
    }
}

export default Remote;
