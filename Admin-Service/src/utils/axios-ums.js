import axios from 'axios';

import { ATTPL_UMS_HOST_API } from 'src/config-global';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: ATTPL_UMS_HOST_API });

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
  const URL = `${ATTPL_UMS_HOST_API}${url}`
  const res = await axios.post(URL, data, { headers });
  return res.data;
}

export const puter = async (url, data, headers) => {
  const URL = `${ATTPL_UMS_HOST_API}${url}`
  const res = await axios.put(URL, data, { headers });
  return res.data;
}

export const deleter = async (url, headers) => {
  const URL = `${ATTPL_UMS_HOST_API}${url}`
  const res = await axios.delete(URL, { ...headers });
  
  return res.data;
}

export const getter = async (url, headers) => {
  const URL = `${ATTPL_UMS_HOST_API}${url}`
  const res = await axios.get(URL, { ...headers });
  
  return res.data;
}

// ----------------------------------------------------------------------

export const endpoints = {
  user: {
    get:'/user/profile/fetch',
    list: '/user/fetchAll',
    details: '/user/profile/fetch',
    create: '/user/create/user-profile-details',
    createIdentity: '/user/create/user-identity-details',
    createAddress: '/user/create/user-addresses',
    update: '/user/update/user-profile-details',
    updateIdentity: '/user/update/user-identity-details',
    updateAddress: '/user/update/user-addresses',
    updateUserDetails: '/user/update',
    updateUserPopup: '/user/pop-up/form',
    voterReferral: '/user/voter-referral',
    UpdatepopUpForm: '/user/update/pop-up',
    uploadProfileImage : '/user/create/user-profile-image',
    updateProfileImage : '/user/update/user-profile-image',
    updateTooglePayment : '/user/toggle/payment-page',
    updateTooglePaymentStatus : '/user/fetch/payment-page/status',
  },
  userRoles: {
    list: '/user/user-role/fetchAll',
    details: '/user/user-role/fetch',
    create: '/user/create/user-role',
    update: '/user/update/user-role',
    updateUserProfile : '/user/profile/fetch',
  }
};
