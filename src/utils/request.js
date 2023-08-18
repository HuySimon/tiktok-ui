import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

// 1 hàm có async ở phía tr thì hàm đó sẽ trả về 1 promise (là then và catch của fecth API)
export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export default request;
