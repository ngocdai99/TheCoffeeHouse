import axios from 'axios';

const AxiosInstance = (token = '', contentType = 'application/json') => {
    const axiosInstance = axios.create({
        // baseURL: 'https://vieclam.shop/'
        // baseURL: 'https://vieclam.shop/'
        baseURL: 'https://restapirepo.onrender.com/'


        
    });
  
    axiosInstance.interceptors.request.use(
        async (config) => {
           
            config.headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': contentType
            }
            return config;
        },
        err => Promise.reject(err)
    );

    axiosInstance.interceptors.response.use(
        res => res.data,
        err => Promise.reject(err)
    );
    return axiosInstance;
};

export default AxiosInstance;