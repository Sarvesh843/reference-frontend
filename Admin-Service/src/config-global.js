import { paths } from 'src/routes/paths';

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = paths.dashboard.root; // as '/dashboard'
export const PATH_AFTER_LOGOUT = paths.auth.jwt.login;

const environments = {
  PROD: {
    HOST_API: import.meta.env.VITE_PROD_HOST_API,
    ATTPL_EMS_HOST_API: import.meta.env.VITE_PROD_ATTPL_EMS_HOST_API,
    ATTPL_CMS_HOST_API: import.meta.env.VITE_PROD_ATTPL_CMS_HOST_API,
    ATTPL_UMS_HOST_API: import.meta.env.VITE_PROD_ATTPL_UMS_HOST_API,
    ATTPL_BMS_HOST_API: import.meta.env.VITE_PROD_ATTPL_BMS_HOST_API,
    ATTPL_OTP_HOST_API: import.meta.env.VITE_PROD_ATTPL_OTP_HOST_API,
    ATTPL_EXPMS_HOST_API: import.meta.env.VITE_PROD_ATTPL_EXPMS_HOST_API,
    ATTPL_TMS_HOST_API: import.meta.env.VITE_PROD_ATTPL_TMS_HOST_API,
    ASSETS_API: import.meta.env.VITE_PROD_ASSETS_API,
    MAPBOX_API: import.meta.env.VITE_PROD_MAPBOX_API,
    ATTPL_SMS_HOST_API: import.meta.env.VITE_PROD_ATTPL_SMS_HOST_API,
    ATTPL_PMS_HOST_API: import.meta.env.VITE_PROD_ATTPL_PMS_HOST_API,
    ATTPL_AMS_HOST_API: import.meta.env.VITE_PROD_ATTPL_AMS_HOST_API,
    ATTPL_CHAT_HOST_API: import.meta.env.VITE_PROD_ATTPL_CHAT_HOST_API,
    ATTPL_LS_HOST_API: import.meta.env.VITE_PROD_ATTPL_LANDING_HOST_API,
  },
  DEV: {
    HOST_API: import.meta.env.VITE_DEV_HOST_API,
    ATTPL_EMS_HOST_API: import.meta.env.VITE_DEV_ATTPL_EMS_HOST_API,
    ATTPL_CMS_HOST_API: import.meta.env.VITE_DEV_ATTPL_CMS_HOST_API,
    ATTPL_BMS_HOST_API: import.meta.env.VITE_DEV_ATTPL_BMS_HOST_API,
    ATTPL_UMS_HOST_API: import.meta.env.VITE_DEV_ATTPL_UMS_HOST_API,
    ATTPL_VMS_HOST_API: import.meta.env.VITE_DEV_ATTPL_VMS_HOST_API,
    ATTPL_OTP_HOST_API: import.meta.env.VITE_DEV_ATTPL_OTP_HOST_API,
    ATTPL_EXPMS_HOST_API: import.meta.env.VITE_DEV_ATTPL_EXPMS_HOST_API,
    ATTPL_TMS_HOST_API: import.meta.env.VITE_DEV_ATTPL_TMS_HOST_API,
    ASSETS_API: import.meta.env.VITE_DEV_ASSETS_API,
    MAPBOX_API: import.meta.env.VITE_DEV_MAPBOX_API,
    ATTPL_SMS_HOST_API: import.meta.env.VITE_DEV_ATTPL_SMS_HOST_API,
    ATTPL_PMS_HOST_API: import.meta.env.VITE_DEV_ATTPL_PMS_HOST_API,
    ATTPL_AMS_HOST_API: import.meta.env.VITE_DEV_ATTPL_AMS_HOST_API,
    ATTPL_LS_HOST_API: import.meta.env.VITE_DEV_ATTPL_LANDING_HOST_API,
    ATTPL_CHAT_HOST_API : import.meta.env.VITE_DEV_ATTPL_CHAT_HOST_API,
  },
  TEST: {
    HOST_API: import.meta.env.VITE_TEST_HOST_API,
    ATTPL_EMS_HOST_API: import.meta.env.VITE_TEST_ATTPL_EMS_HOST_API,
    ATTPL_CMS_HOST_API: import.meta.env.VITE_TEST_ATTPL_CMS_HOST_API,
    ATTPL_UMS_HOST_API: import.meta.env.VITE_TEST_ATTPL_UMS_HOST_API,
    ATTPL_OTP_HOST_API: import.meta.env.VITE_TEST_ATTPL_OTP_HOST_API,
    ATTPL_EXPMS_HOST_API: import.meta.env.VITE_TEST_ATTPL_EXPMS_HOST_API,
    ATTPL_TMS_HOST_API: import.meta.env.VITE_TEST_ATTPL_TMS_HOST_API,
    ASSETS_API: import.meta.env.VITE_TEST_ASSETS_API,
    MAPBOX_API: import.meta.env.VITE_TEST_MAPBOX_API,
    ATTPL_SMS_HOST_API: import.meta.env.VITE_TEST_ATTPL_SMS_HOST_API,
    ATTPL_PMS_HOST_API: import.meta.env.VITE_TEST_ATTPL_PMS_HOST_API,
    ATTPL_AMS_HOST_API: import.meta.env.VITE_TEST_ATTPL_AMS_HOST_API,
    ATTPL_LS_HOST_API: import.meta.env.VITE_TEST_ATTPL_LANDING_HOST_API
  },
  LOCAL: {
    HOST_API: import.meta.env.VITE_LOCAL_HOST_API,
    ATTPL_EMS_HOST_API: import.meta.env.VITE_LOCAL_ATTPL_EMS_HOST_API,
    ATTPL_CMS_HOST_API: import.meta.env.VITE_LOCAL_ATTPL_CMS_HOST_API,
    ATTPL_UMS_HOST_API: import.meta.env.VITE_LOCAL_ATTPL_UMS_HOST_API,
    ATTPL_OTP_HOST_API: import.meta.env.VITE_LOCAL_ATTPL_OTP_HOST_API,
    ATTPL_EXPMS_HOST_API: import.meta.env.VITE_LOCAL_ATTPL_EXPMS_HOST_API,
    ATTPL_TMS_HOST_API: import.meta.env.VITE_LOCAL_ATTPL_TMS_HOST_API,
    ASSETS_API: import.meta.env.VITE_LOCAL_ASSETS_API,
    MAPBOX_API: import.meta.env.VITE_LOCAL_MAPBOX_API,
    ATTPL_SMS_HOST_API: import.meta.env.VITE_LOCAL_ATTPL_SMS_HOST_API,
    ATTPL_PMS_HOST_API: import.meta.env.VITE_LOCAL_ATTPL_PMS_HOST_API,
    ATTPL_AMS_HOST_API: import.meta.env.VITE_LOCAL_ATTPL_AMS_HOST_API,
    ATTPL_LS_HOST_API: import.meta.env.VITE_LOCAL_ATTPL_LANDING_HOST_API
  }
};

const VITE_NODE_ENV = import.meta.env.VITE_NODE_ENV || 'LOCAL';

const {
  HOST_API,
  ATTPL_PMS_HOST_API,
  ATTPL_EMS_HOST_API,
  ATTPL_CMS_HOST_API,
  ATTPL_BMS_HOST_API,
  ATTPL_UMS_HOST_API,
  ATTPL_VMS_HOST_API,
  ATTPL_OTP_HOST_API,
  ATTPL_EXPMS_HOST_API,
  ATTPL_TMS_HOST_API,
  ATTPL_AMS_HOST_API,
  ATTPL_CHAT_HOST_API,
  ATTPL_SMS_HOST_API,
  ATTPL_LS_HOST_API,
  ASSETS_API,
  MAPBOX_API,
} = environments[VITE_NODE_ENV];

// aws

const aws = {
  ATTPL_AWS_ACCESS_KEY_ID: import.meta.env.VITE_ACCESS_KEY_ID,
  ATTPL_AWS_SECRET_ACCESS_KEY: import.meta.env.VITE_SECRET_ACCESS_KEY,
  ATTPL_AWS_REGION: import.meta.env.VITE_REGION,
  ATTPL_AWS_BUCKET: import.meta.env.VITE_BUCKET,
};

const { ATTPL_AWS_ACCESS_KEY_ID, ATTPL_AWS_SECRET_ACCESS_KEY, ATTPL_AWS_REGION, ATTPL_AWS_BUCKET } = aws;

const chat = {
  ATTPL_CHAT_LICENCE_KEY_ID: import.meta.env.VITE_LICENCE_KEY_ID,
  ATTPL_MIRROR_FLY_API_BASE_URL: import.meta.env.VITE_MIRROR_FLY_API_BASE_URL,
};

const { ATTPL_CHAT_LICENCE_KEY_ID, ATTPL_MIRROR_FLY_API_BASE_URL } = chat;

// FIREBASE TRIP keys
const trip_firebse = {
  ATTPL_TMS_FIREBASE_API_KEY: import.meta.env.VITE_FIREBASE_API_KEY,
  ATTPL_TMS_FIREBASE_AUTH_DOMAIN: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  ATTPL_TMS_FIREBASE_DATABASE_URL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  ATTPL_TMS_FIREBASE_PROJECT_ID: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  ATTPL_TMS_FIREBASE_STORAGE_BUCKET: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  ATTPL_TMS_FIREBASE_MESSAGING_SENDER_ID: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  ATTPL_TMS_FIREBASE_APP_ID: import.meta.env.VITE_FIREBASE_APP_ID,
  ATTPL_TMS_FIREBASE_MESUREMENT_ID: import.meta.env.VITE_FIREBASE_MESUREMENT_ID,
};

const {
  ATTPL_TMS_FIREBASE_MESUREMENT_ID,
  ATTPL_TMS_FIREBASE_APP_ID,
  ATTPL_TMS_FIREBASE_MESSAGING_SENDER_ID,
  ATTPL_TMS_FIREBASE_STORAGE_BUCKET,
  ATTPL_TMS_FIREBASE_API_KEY,
  ATTPL_TMS_FIREBASE_AUTH_DOMAIN,
  ATTPL_TMS_FIREBASE_DATABASE_URL,
  ATTPL_TMS_FIREBASE_PROJECT_ID,
} = trip_firebse;

export {
  HOST_API,
  ASSETS_API,
  MAPBOX_API,
  ATTPL_AWS_REGION,
  ATTPL_AWS_BUCKET,
  ATTPL_LS_HOST_API,
  ATTPL_EMS_HOST_API,
  ATTPL_BMS_HOST_API,
  ATTPL_CHAT_HOST_API,
  ATTPL_CMS_HOST_API,
  ATTPL_UMS_HOST_API,
  ATTPL_VMS_HOST_API,
  ATTPL_OTP_HOST_API,
  ATTPL_TMS_HOST_API,
  ATTPL_AMS_HOST_API,
  ATTPL_PMS_HOST_API,
  ATTPL_SMS_HOST_API,
  ATTPL_EXPMS_HOST_API,
  ATTPL_AWS_ACCESS_KEY_ID,
  ATTPL_CHAT_LICENCE_KEY_ID,
  ATTPL_TMS_FIREBASE_APP_ID,
  ATTPL_TMS_FIREBASE_API_KEY,
  ATTPL_AWS_SECRET_ACCESS_KEY,
  ATTPL_MIRROR_FLY_API_BASE_URL,
  ATTPL_TMS_FIREBASE_PROJECT_ID,
  ATTPL_TMS_FIREBASE_AUTH_DOMAIN,
  ATTPL_TMS_FIREBASE_DATABASE_URL,
  ATTPL_TMS_FIREBASE_MESUREMENT_ID,
  ATTPL_TMS_FIREBASE_STORAGE_BUCKET,
  ATTPL_TMS_FIREBASE_MESSAGING_SENDER_ID,
};
