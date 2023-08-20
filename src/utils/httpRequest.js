import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

// 1 hàm có async ở phía tr thì hàm đó sẽ trả về 1 promise (là then và catch của fecth API)
export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;
