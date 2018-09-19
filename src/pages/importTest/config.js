const data = {};

const register = (key, value) => {
    data[key] = value;
};

const getData = (key) => {
    return key ? data[key] : data;
};

export {
    register,
    getData,
};
