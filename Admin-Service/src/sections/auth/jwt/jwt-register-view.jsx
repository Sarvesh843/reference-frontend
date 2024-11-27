import axios from 'axios';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Controller, useForm, useFormContext } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/system';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

// import { paths } from 'src/routes/paths';
// import { RouterLink } from 'src/routes/components';
import { useRouter, useSearchParams } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';

import { useAuthContext } from 'src/auth/hooks';
import { PATH_AFTER_LOGIN, ATTPL_UMS_HOST_API } from 'src/config-global';
import { createOrder, updateOrder, checkPayment } from 'src/api/exp_order';

import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFTextField, RHFAutocomplete } from 'src/components/hook-form';
import { TextField } from '@mui/material';
import { endpoints, getter } from 'src/utils/axios-ums';

const statesOfIndia = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Andaman and Nicobar Islands',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Chandigarh',
  'Delhi',
  'Dadra and Nagar Haveli',
  'Daman and Diu',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Jammu and Kashmir',
  'Karnataka',
  'Kerala',
  'Lakshadweep',
  'Ladakh',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Puducherry',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
];

export default function JwtRegisterView() {
  const { toggling, dispatch } = useAuthContext();
  const { otpGenerate, otpverify, register } = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [existingUser, setExistingUser] = useState(false);
  // const refferalToken=searchParams();
  // console.log("ref",refferalToken)
  const [timer, setTimer] = useState(JSON.parse(localStorage.getItem('otpExpiry')) || 50);
  const [showTimer, setShowTimer] = useState(JSON.parse(localStorage.getItem('ShowTimer')) || true);
  const password = useBoolean();
  const confirmPassword = useBoolean();
  const [ref, setRef] = useState(JSON.parse(localStorage.getItem('otpRefs')) || {});
  const [otpcodeId, setOtpCodeId] = useState(JSON.parse(localStorage.getItem('otpCodeId')) || {});
  const [expiry, setOtpExpiry] = useState(JSON.parse(localStorage.getItem('otpExpiry')) || '');
  const searchParams = useSearchParams();
  const referralToken = searchParams.get('referralToken');
  const [paymentview, setPaymentView] = useState();

  const returnTo = searchParams.get('returnTo');
  const [show, setShow] = useState(
    referralToken
      ? {
          emForm: true,
          otpForm: false,
          detailForm: false,
          upiForm: false,
          pasForm: false,
        }
      : {
          emForm: false,
          otpForm: true,
          detailForm: false,
          upiForm: false,
          pasForm: false,
        }
  );

  const togglePaymentchecker = async () => {
    try {
      const url = endpoints.user.updateTooglePaymentStatus;

      const response = await getter(url);
      if (response.success) {
        setPaymentView(response?.data?.showPaymentPage);
        localStorage.setItem('togglePayment', response?.data?.showPaymentPage);
      }
    } catch (error) {
      console.error('Error submitting profile:', error);
      enqueueSnackbar('An error occurred while Update profile', { variant: 'error' });
    }
  };

  useEffect(() => {
    togglePaymentchecker();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    let intervalId;
    if (timer > 0 && showTimer) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setShowTimer(false);
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [timer, showTimer]);

  useEffect(() => {
    setExistingUser(false);
  }, []);

  const EmailNumberSchema = Yup.object().shape({
    phone: Yup.number()
      .min(1000000000, 'Phone number must be at least 10 digits')
      .max(9999999999, 'Phone number must be at most 10 digits')
      .required('Phone number is required'),
  });

  const UserDetailsSchema = Yup.object().shape({
    firstName: Yup.string().required('Firstname is required'),
    lastName: Yup.string().required('Lastname is required'),
    fatherName: Yup.string().required('Father/Spouse name is required'),
    state: Yup.string().required('State is required'),
  });

  const OtpSchema = Yup.object().shape({
    mobileOTP: Yup.string().required('Mobile OTP is required'),
  });

  const PasswordSchema = Yup.object().shape({
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/,
        'Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be between 6 to 8 characters long'
      )
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const otpSchema = Yup.object().shape({
    otp1: Yup.string().required('Required'),
    otp2: Yup.string().required('Required'),
    otp3: Yup.string().required('Required'),
    otp4: Yup.string().required('Required'),
    otp5: Yup.string().required('Required'),
    otp6: Yup.string().required('Required'),
  });
  const defaultValuesPhone = {
    phone: '',
  };
  const defaultValuesUserDetails = {
    firstName: '',
    lastName: '',
    fatherName: '',
    state: '',
  };
  const defaultValuesOtp = {
    mobileOTP: '',
  };
  const defaultValuesPassword = {
    password: '',
  };

  const emailNumberMethods = useForm({
    resolver: yupResolver(EmailNumberSchema),
    defaultValuesPhone,
  });

  const userDetailsMethods = useForm({
    resolver: yupResolver(UserDetailsSchema),
    defaultValuesUserDetails,
  });

  // const otpMethods = useForm({
  //   resolver: yupResolver(OtpSchema),
  //   defaultValuesOtp,
  // });

  const [otp, setOtp] = useState({
    otp1: '',
    otp2: '',
    otp3: '',
    otp4: '',
    otp5: '',
    otp6: '',
  });

  const otpMethods = useForm({
    defaultValues: {
      otp1: otp.otp1,
      otp2: otp.otp2,
      otp3: otp.otp3,
      otp4: otp.otp4,
      otp5: otp.otp5,
      otp6: otp.otp6,
    },
    resolver: yupResolver(otpSchema),
  });

  useEffect(() => {
    if ('OTPCredential' in window) {
      const ac = new AbortController();

      navigator.credentials
        .get({
          otp: { transport: ['sms'] },
          signal: ac.signal,
        })
        .then((otpCredential) => {
          // Extract the OTP from the SMS using regex
          const message = otpCredential.code;
          const otpMatch = message.match(/(\d{6})/);
          if (otpMatch) {
            const code = otpMatch[0];
            const otpArray = code.split('');
            setOtp({
              otp1: otpArray[0] || '',
              otp2: otpArray[1] || '',
              otp3: otpArray[2] || '',
              otp4: otpArray[3] || '',
              otp5: otpArray[4] || '',
              otp6: otpArray[5] || '',
            });
          }
          ac.abort();
        })
        .catch((err) => {
          ac.abort();
          console.error(err);
        });
    }
  }, []);


  const passwordMethods = useForm({
    resolver: yupResolver(PasswordSchema),
    defaultValuesPassword,
  });
  // const PaymentMethods = useForm({
  //   resolver: yupResolver(PaymentSchema),
  //   defaultValuesPayment,
  // });

  const {
    handleSubmit: handleSubmitEmailNum,
    // setValue
  } = emailNumberMethods;
  const { handleSubmit: handleSubmitUserDetails } = userDetailsMethods;
  const { handleSubmit: handleSubmitOtp } = otpMethods;
  const { handleSubmit: handleSubmitPassword } = passwordMethods;
  // const { handleSubmit: handleSubmitPayment } = PaymentMethods;

  // useEffect(() => {
  //   setValue("phone", localStorage.getItem("phone"));
  // }, [setValue])
  // Components
  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
      <Typography variant="h4">
        {show.emForm && 'Enter Your Register Mobile'}
        {show.otpForm && 'Enter Your Verification OTP'}
        {show.detailForm && 'Enter Your Details'}
        {show.upiForm && 'Welcome to ATTPL Group'}
        {show.pasForm && 'Enter Your Passwords'}
      </Typography>
      {/* <Typography variant="h4">Get started and elevate your experience!</Typography> */}

      {/* <Stack direction="row" spacing={0.5}>
        <Typography variant="body2"> Already have an account? </Typography>

        <Link href={paths.auth.jwt.login} component={RouterLink} variant="subtitle2">
          Sign in
        </Link>
      </Stack> */}
    </Stack>
  );
  const renderTerms = (
    <Typography
      component="div"
      sx={{
        mt: 2.5,
        textAlign: 'center',
        typography: 'caption',
        color: 'text.secondary',
      }}
    >
      {'By signing up, I agree to '}
      <Link
        href="https://attplems.com/terms-of-services"
        underline="always"
        color="text.primary"
        target="_blank"
      >
        Terms of Service
      </Link>
      {' and '}
      <Link
        href="https://attplems.com/privacy-policy"
        underline="always"
        color="text.primary"
        target="_blank"
      >
        Privacy Policy
      </Link>
      .
    </Typography>
  );

  const onSubmitEmailNumber = handleSubmitEmailNum(async (data) => {
    try {
      const phoneNumber = { phone: data?.phone };
      localStorage.setItem('phone', data?.phone);
      const url = `${ATTPL_UMS_HOST_API}/user/search/mobile-number`;
      const headers = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const responseValidNumber = await axios.post(url, phoneNumber, { headers });

      if (responseValidNumber.data.data) {
        const { response, otpRefs, otpCodeId, otpExpiry } = await otpGenerate(data.phone);
        if (response === 'ok') {
          setRef(otpRefs);
          setOtpCodeId(otpCodeId);
          setOtpExpiry(otpExpiry);
          setShow({
            emForm: false,
            otpForm: true,
            detailForm: false,
            pasForm: false,
            upiForm: false,
          });
          enqueueSnackbar('Sent OTP successfully!', { variant: 'success' });
          setTimer(otpExpiry);
          setShowTimer(true);
        }
      } else {
        setExistingUser(true);
      }
    } catch (error) {
      console.log(error);
      enqueueSnackbar('Some error Occurs', { variant: 'error' });
    }
  });

  const onSubmitOtp = handleSubmitOtp(async (data) => {
    try {
      const mobileOTP = `${Object.values(data).join('')}`;
      if (otpverify) {
        const { response } = await otpverify(mobileOTP, otpcodeId);
        if (response === 'ok') {
          setShow({
            emForm: false,
            otpForm: false,
            detailForm: true,
            upiForm: false,
            pasForm: false,
          });
          enqueueSnackbar('verified successfully!', { variant: 'success' });
        }
      } else {
        // Handle the case when otpverify is undefined
        console.error('otpverify is not defined');
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Failed to verify OTP.', { variant: 'error' });
    }
  });

  const onSubmitUserDetails = handleSubmitUserDetails(async (data) => {
    try {
      const phone = localStorage.getItem('phone');
      const paymentCheckData = await checkPayment(phone);
      if (paymentCheckData) {
        setShow({
          emForm: false,
          otpForm: false,
          detailForm: false,
          upiForm: false,
          pasForm: true,
        });
      } else if (paymentview) {
        dispatch({
          type: 'TOGGLING',
          payload: {
            toggling: false,
          },
        });
        setShow({
          emForm: false,
          otpForm: false,
          detailForm: false,
          upiForm: true,
          pasForm: false,
        });
      } else {
        setShow({
          emForm: false,
          otpForm: false,
          detailForm: false,
          upiForm: false,
          pasForm: true,
        });
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Something went wrong.', { variant: 'error' });
    }
  });

  const onSubmitPassword = handleSubmitPassword(async (data) => {
    try {
      // Check if register exists before attempting to call it
      const { response } = await register(
        userDetailsMethods.getValues('firstName'),
        userDetailsMethods.getValues('lastName'),
        userDetailsMethods.getValues('fatherName'),
        userDetailsMethods.getValues('state'),
        localStorage.getItem('phone'),
        data.password,
        referralToken
      );
      if (response === 'ok') {
        enqueueSnackbar('registered successfully!', { variant: 'success' });
        router.push(returnTo || PATH_AFTER_LOGIN);
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Failed to register.', { variant: 'error' });
    }
  });

  const handleResendClick = async () => {
    try {
      const { response, otpRefs, otpExpiry } = await otpGenerate(
        emailNumberMethods.getValues('phone')
      );

      if (response === 'ok') {
        setRef(otpRefs);
        setOtpExpiry(otpExpiry); // Update the OTP expiry time
        setTimer(otpExpiry); // Reset the timer to OTP expiry time
        setShowTimer(true); // Show the timer
      }
    } catch (error) {
      console.error(error);
    }
  };

  // razor pay start
  // const total_bill = localStorage.getItem('total');
  const total_bill = '1';

  // ultimate handle payclick

  // REdirect after payment

  async function handleRedirectAndUpdate(res, orderId) {
    //    window.location.href = "https://attplems.com/#home";
    // enqueueSnackbar('payment successfull', { variant: 'success' });

    // return;
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = res;
    if (razorpay_order_id && razorpay_payment_id && razorpay_signature) {
      // update order details
      const response = await updateOrder(orderId, { verifyPayment: res, paymentStatus: 'success' });
      if (response.status_code === 200) {
        dispatch({
          type: 'TOGGLING',
          payload: {
            toggling: true,
          },
        });
        setShow({ emForm: false, otpForm: false, upiForm: false, pasForm: true });
        enqueueSnackbar('payment successfull', { variant: 'success' });
        // window.location.href = "https://app.attplems.com/auth/jwt/login?returnTo=%2F"
      } else {
        enqueueSnackbar('Failed payment', { variant: 'error' });
      }
    } else {
      enqueueSnackbar('Failed payment', { variant: 'error' });
    }
    // aditional step needed to verify sigature, better to implement webhook
    // cant relay on client side
  }

  const pay = async () => {
    // create order
    const phone = localStorage.getItem('phone');
    const response = await createOrder({ amount: total_bill, phoneNumber: JSON.parse(phone) });
    const { key, amount, currency, orderId, order_id } = response.data;

    const options = {
      key,
      order_id,
      // This is Api key. you will get it from razorpay dashboard > account and settings > API keys
      amount,
      currency, // your 3 letter currency code
      name: 'Attpl Group', // project or transaction name
      description: 'Test Transaction',
      handler(res) {
        handleRedirectAndUpdate(res, orderId); // after payment completes on stripe this function will be called and you can do your stuff
      },
      prefill: {
        name: 'Attpl Group',
        email: 'Attpl@gmail.com',
        contact: '98123456778',
      },
      notes: {
        address: 'India',
      },
      theme: {
        // color: "#158993",
        color: '#0096FF',
      },
      method: {
        netbanking: true,
        card: true,
        upi: true,
        wallet: true,
        emi: true,
        bank_transfer: true,
        upi_intent: true,
        qr: false, // Disabling QR code payments
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  // Razopay ends

  return (
    <>
      {toggling && renderHead}

      {/* Second Form: Email and Phone Number */}
      {show.emForm && (
        <FormProvider methods={emailNumberMethods} onSubmit={onSubmitEmailNumber}>
          <Stack spacing={2}>
            {/* <RHFTextField name="email" label="Email address"  InputProps={{
        style: { color: 'black' },
      }}
      InputLabelProps={{
        style: { color:"black" }, 
      }} /> */}
            <Typography variant="body2">
              Please provide your mobile number, excluding the country code (+91).
            </Typography>
            <RHFTextField
              name="phone"
              label="Mobile Number"
              InputProps={{
                style: { color: 'black' },
              }}
              InputLabelProps={{
                style: { color: 'black' },
              }}
            />
            <Typography variant="body2" sx={{ color: 'red' }}>
              {existingUser && `Mobile Number already exist.`}
            </Typography>
            <Button variant="contained" size="large" type="submit">
              Register
            </Button>
          </Stack>
        </FormProvider>
      )}

      {/* Third Form: OTPs */}
      {show.otpForm && (
        // <FormProvider methods={otpMethods} onSubmit={onSubmitOtp}>
        //   <Stack spacing={2}>
        //     <Typography variant="body2">Enter your 6 digit Mobile OTP Code</Typography>
        //     <RHFTextField name="mobileOTP" label="Mobile OTP" InputProps={{
        //       style: { color: 'black' },
        //     }}
        //       InputLabelProps={{
        //         style: { color: "black" },
        //       }} />
        //       {/* <Typography variant="body2">Ref for mobile : {ref.mobile}</Typography> */}
        //       <Typography variant="body2">Reference No. for Mobile OTP Code : {ref.mobile}</Typography>
        //     <Stack direction="row" spacing={2} >
        //       {showTimer ? (
        //         <Button variant="outlined" size="large" >
        //           {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
        //         </Button>
        //       ) : (
        //         <Button variant="contained" size="large" onClick={handleResendClick}>
        //           Resend
        //         </Button>
        //       )}
        //     </Stack>
        //     <Button variant="contained" size="large" type="submit">
        //       Submit
        //     </Button>
        //   </Stack>
        // </FormProvider>
        <FormProvider methods={otpMethods} onSubmit={onSubmitOtp}>
          <Typography variant="body2">Enter your 6 digit Mobile OTP Code</Typography>
          <Box display="flex" justifyContent="space-between" width="300px" sx={{ my: 2 }}>
            <OtpField name="otp1" index={0} />
            <OtpField name="otp2" index={1} />
            <OtpField name="otp3" index={2} />
            <OtpField name="otp4" index={3} />
            <OtpField name="otp5" index={4} />
            <OtpField name="otp6" index={5} />
          </Box>
          <Typography variant="body2">Reference No. for Mobile OTP Code : {ref.mobile}</Typography>
          <Box mt={5}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </FormProvider>
      )}

      {show.detailForm && (
        <FormProvider methods={userDetailsMethods} onSubmit={onSubmitUserDetails}>
          <Stack spacing={2}>
            <RHFTextField
              name="firstName"
              label="First Name"
              InputProps={{
                style: { color: 'black' },
              }}
              InputLabelProps={{
                style: { color: 'black' },
              }}
            />
            <RHFTextField
              name="lastName"
              label="Last name"
              InputProps={{
                style: { color: 'black' },
              }}
              InputLabelProps={{
                style: { color: 'black' },
              }}
            />
            <RHFTextField
              name="fatherName"
              label="Father/Spouse Name"
              InputProps={{
                style: { color: 'black' },
              }}
              InputLabelProps={{
                style: { color: 'black' },
              }}
            />
            <RHFAutocomplete
              name="state"
              label="Your State"
              placeholder="Choose your State"
              fullWidth
              options={statesOfIndia}
              getOptionLabel={(option) => option}
            />
            <Button variant="contained" size="large" type="submit">
              Next
            </Button>
          </Stack>
        </FormProvider>
      )}

      {show.upiForm && (
        <Stack>
          {/* <FormProvider methods={PaymentMethods} onSubmit={onSubmitPayment}>
          <Box>
          </Box>
          <Stack spacing={2}>
          <RHFTextField
          name="upiId"
          label="UPI ID"
           InputProps={{
        style: { color: 'black' },
      }}
      InputLabelProps={{
        style: { color:"black" }, 
      }}
          />
          
          <Button variant="contained" size="large" type="submit"  sx={{background:"#078dee"}}>
          Pay Rs. 1
          </Button>
          
          </Stack>
        </FormProvider> */}
          <Box
            component="img"
            sx={{ width: 350, height: 350, borderRadius: 1.5, mb: 5, m: 'auto', mt: -10 }}
            src="/payment_coin.png"
          />

          <Button
            variant="contained"
            type="submit"
            sx={{ background: '#078dee', width: 150, m: 'auto' }}
            onClick={pay}
          >
            Pay Rs. 1
          </Button>
        </Stack>
      )}

      {/* Fourth Form: Passwords */}
      {show.pasForm && (
        <FormProvider methods={passwordMethods} onSubmit={onSubmitPassword}>
          <Stack spacing={2}>
            <RHFTextField
              name="password"
              label="Please enter your password"
              type={password.value ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={password.onToggle} edge="end">
                      <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                    </IconButton>
                  </InputAdornment>
                ),
                style: { color: 'black' },
              }}
              InputLabelProps={{
                style: { color: 'black' },
              }}
            />
            <RHFTextField
              name="confirmPassword"
              label="Confirm Password"
              type={confirmPassword.value ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={confirmPassword.onToggle} edge="end">
                      <Iconify
                        icon={confirmPassword.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
                style: { color: 'black' },
              }}
              InputLabelProps={{
                style: { color: 'black' },
              }}
            />
            <Button variant="contained" size="large" type="submit">
              Submit
            </Button>
          </Stack>
        </FormProvider>
      )}

      {renderTerms}
    </>
  );
}

const OtpField = ({ name, index }) => {
  const { control, setValue, getValues } = useFormContext();

  useEffect(() => {
    const handleBackspace = (event) => {
      if (event.key === 'Backspace' && !event.target.value) {
        const prevField = document.querySelector(`input[name=otp${index}]`);
        if (prevField) prevField.focus();
      }
    };

    const inputField = document.querySelector(`input[name=${name}]`);
    inputField.addEventListener('keydown', handleBackspace);

    return () => {
      inputField.removeEventListener('keydown', handleBackspace);
    };
  }, [index, name]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <RHFTextField
          {...field}
          type="text"
          sx={{ mx: 0.5 }}
          inputProps={{ maxLength: 1, style: { textAlign: 'center', height: 15 } }}
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d?$/.test(value)) {
              setValue(name, value);
              if (value && index < 5) {
                const nextField = document.querySelector(`input[name=otp${index + 2}]`);
                if (nextField) nextField.focus();
              }
            }
          }}
        />
      )}
    />
  );
};

OtpField.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
