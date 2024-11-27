import axios from 'axios';

import { ATTPL_UMS_HOST_API, ATTPL_BMS_HOST_API, ATTPL_EXPMS_HOST_API } from 'src/config-global';

const STORAGE_KEY = 'accessToken';
const accessToken = localStorage.getItem(STORAGE_KEY);

export const uploadclaimFileInAWSS3 = async (data) => {
  try {
    const response = await axios.post(`${ATTPL_EXPMS_HOST_API}/expense/claims/upload-image`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};
export const uploadsmsFileInAWSS3 = async (data) => {
  try {
    const response = await axios.post(`${ATTPL_EXPMS_HOST_API}/expense/claims/upload-image`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const uploadclaimFilesInAWSS3 = async (data) => {
  try {
    const response = await axios.post(
      `${ATTPL_EXPMS_HOST_API}/expense/claims/upload-images`,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response;
  } catch (err) {
    return err;
  }
};

export const deleteFileFromAWSS3 = async (data) => {
  try {
    const response = await axios.post(`${ATTPL_EXPMS_HOST_API}/expense/claims/delete-image`, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const deleteFilesFromAWSS3 = async (data) => {
  try {
    const response = await axios.post(
      `${ATTPL_EXPMS_HOST_API}/expense/claims/delete-images`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response;
  } catch (err) {
    return err;
  }
};

export const uploadUserFileInAWSS3 = async (data) => {
  try {
    const response = await axios.post(`${ATTPL_UMS_HOST_API}/user/upload-image`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const uploadUserFilesInAWSS3 = async (data) => {
  try {
    const response = await axios.post(`${ATTPL_UMS_HOST_API}/user/upload-images`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const deleteUserFileFromAWSS3 = async (data) => {
  try {
    const response = await axios.post(`${ATTPL_UMS_HOST_API}/user/delete-image`, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const deleteUserFilesFromAWSS3 = async (data) => {
  try {
    const response = await axios.post(`${ATTPL_UMS_HOST_API}/user/delete-images`, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};

// for blog-----------------------------------

export const uploadBlogFileInAWSS3 = async (data) => {
  try {
    const response = await axios.post(`${ATTPL_BMS_HOST_API}/blog/upload-image`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const uploadblogFilesInAWSS3 = async (data) => {
  try {
    const response = await axios.post(`${ATTPL_BMS_HOST_API}/blog/upload-images`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const deleteBlogFileFromAWSS3 = async (data) => {
  try {
    const response = await axios.post(`${ATTPL_BMS_HOST_API}/blog/delete-image`, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};
