import axios from 'axios';

import { ATTPL_BMS_HOST_API } from 'src/config-global';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: ATTPL_BMS_HOST_API });


axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];  
  const res = await axiosInstance.get(url, { ...config });
  console.log(res)
  return res.data;
};

export const poster = async (url, data, headers) => {
  const URL = `${ATTPL_BMS_HOST_API}${url}`
  console.log(URL)
  const res = await axios.post(URL, data, { headers });
  return res.data;
}
// ----------------------------------------------------------------------

export const endpoints = {
  survey: {
    create: '/survey/create',
    addQuestion:'/survey',
    surveys:'/surveys'
  }
};
