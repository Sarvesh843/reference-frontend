import axios from 'axios';

import { ATTPL_AMS_HOST_API } from 'src/config-global';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: ATTPL_AMS_HOST_API });

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, { ...config });

  return res.data;
};

export const poster = async (url, data, headers) => {
  const URL = `${ATTPL_AMS_HOST_API}${url}`
  const res = await axios.post(URL, data, { headers });
  return res.data;
}

export const puter = async (url, data, headers) => {
  const URL = `${ATTPL_AMS_HOST_API}${url}`
  const res = await axios.put(URL, data, { headers });
  return res.data;
}

export const deleter = async (url, headers) => {
  const URL = `${ATTPL_AMS_HOST_API}${url}`
  const res = await axios.delete(URL, { ...headers });
  return res.data;
}

// ----------------------------------------------------------------------

export const endpoints = {
  booth: {
    all: '/booth/count/all',
  },
  candidate: {
    all: '/candidate/count/all',
    // gender : '/candidate/count/',
    // state : '/candidate/count/',
    // case : '/candidate/count/',
    // education : '/candidate/count/',
    filter: '/candidate/count/',
  },
  claim: {
    all: '/claim/count/all',
    status: '/claim/count/',
  },
  driver: {
    all: '/driver/count/all',
  },
  election: {
    all: '/election/count/all',
  },
  emailOtp: {
    all: '/email/count/all',
    status: '/email/count/',
  },
  otp: {
    all: '/otp/count/all',
    status: '/otp/count/',
  },
  pollingStation: {
    all: '/pollingStation/count/all',
  },
  trip: {
    all: '/trip/count/all',
    status: '/trip/count/',
  },
  user: {
    all: '/user/count/all',
    role: '/user/count/',
  },
  vehicle: {
    all: '/vehicle/count/all',
  },
  voter: {
    all: '/voter/count/all',
  },
  ward: {
    all: '/ward/count/all',
  },
  contact: {
    all: '/contact/count/all',
    status: '/contact/count/',
  },
};
