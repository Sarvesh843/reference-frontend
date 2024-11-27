import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import { useBoolean } from 'src/hooks/use-boolean';

import { useAuthContext } from 'src/auth/hooks';

import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFTextField } from 'src/components/hook-form';

export default function JwtForgotPasswordView() {
  // Required Variables

  const { otpGenerateForgotPassword, otpverifyForFOrgotPassword, registerForgotPasword } =
    useAuthContext();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [timer, setTimer] = useState(50); // 5 minutes in seconds
  const [showTimer, setShowTimer] = useState(true);
  const password = useBoolean();
  const confirmPassword = useBoolean();

  const [ref, setRef] = useState({});
  const [otpcodeId, setOtpCodeId] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [expiry, setOtpExpiry] = useState();

  const [show, setShow] = useState({
    emForm: true,
    otpForm: false,
    pasForm: false,
  });

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

  // Form Validation schema
  const EmailNumberSchema = Yup.object().shape({
    phone: Yup.number()
    .min(1000000000, 'Phone number must be at least 10 digits')
    .max(9999999999, 'Phone number must be at most 10 digits')
    .required('Phone number is required'),
  });

  const OtpSchema = Yup.object().shape({
    phoneOTP: Yup.string().required('Email OTP is required'),
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

  // Default Values
  const defaultValuesEmailNumber = {
    phone: '',
  };
  const defaultValuesOtp = {
    phoneOTP: '',
  };
  const defaultValuesPassword = {
    password: '',
  };

  // Methods
  const emailNumberMethods = useForm({
    resolver: yupResolver(EmailNumberSchema),
    defaultValuesEmailNumber,
  });

  const otpMethods = useForm({
    resolver: yupResolver(OtpSchema),
    defaultValuesOtp,
  });

  const passwordMethods = useForm({
    resolver: yupResolver(PasswordSchema),
    defaultValuesPassword,
  });

  const { handleSubmit: handleSubmitEmail } = emailNumberMethods;
  const { handleSubmit: handleSubmitOtp } = otpMethods;
  const { handleSubmit: handleSubmitPassword } = passwordMethods;

  // Components
  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
      <Typography variant="h4">
        {show.emForm &&
          "Enter Your Forgot Mobile"
        }
         {show.otpForm &&
          "Enter Your Verification OTP"
        }
        {show.pasForm &&
          "Enter Your New Password"
        }
        </Typography>
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

  // Function Call for Submition

  const onSubmitEmail = handleSubmitEmail(async (data) => {
    try {
      const { response, otpRefs, otpCodeId, otpExpiry } = await otpGenerateForgotPassword(data);
      if (response === 'ok') {
        setRef(otpRefs);
        setOtpCodeId(otpCodeId);
        setOtpExpiry(otpExpiry);
        setShow({ emForm: false, otpForm: true, pasForm: false });
        enqueueSnackbar('Sent OTP successfully!', { variant: 'success' });
        setTimer(otpExpiry); // Start the timer with OTP expiry time
        setShowTimer(true); // Show the timer
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Failed to generate OTP.', { variant: 'error' });
    }
  });

  const onSubmitOtp = handleSubmitOtp(async (data) => {
    try {
      // Check if otpverify exists before attempting to call it

      const { response } = await otpverifyForFOrgotPassword(data.phoneOTP, otpcodeId);
      if (response === 'ok') {
        setShow({ emForm: false, otpForm: false, pasForm: true });
        enqueueSnackbar('verified successfully!', { variant: 'success' });
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Failed to verify OTP.', { variant: 'error' });
    }
  });

  const onSubmitPassword = handleSubmitPassword(async (data) => {
    try {
      // Check if register exists before attempting to call it
      if (registerForgotPasword) {
        const { response } = await registerForgotPasword(
          emailNumberMethods.getValues('phone'),
          data.password
        );
        if (response === 'ok') {
          enqueueSnackbar('Password Updated Successfully!', { variant: 'success' });
          navigate('/auth/jwt/login');
        }
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Failed to Updated Password .', { variant: 'error' });
    }
  });

  // This is for Pankaj and Gurpeet
  const handleResendClick = async () => {
    try {
      const { response, otpRefs, otpExpiry } = await otpGenerateForgotPassword(
        emailNumberMethods.getValues('phoneOTP')
      );

      if (response === 'ok') {
        setRef(otpRefs);
        setOtpExpiry(otpExpiry);
        setTimer(otpExpiry);
        setShowTimer(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {renderHead}

      {/* First Form: Email  */}
      {show.emForm && (
        <FormProvider methods={emailNumberMethods} onSubmit={onSubmitEmail}>
          <Stack spacing={2}>
            <Typography variant="body2">
              Please provide your mobile number, excluding the country code (+91).
            </Typography>
            <RHFTextField name="phone" label="Mobile Number" />
            <Button variant="contained" size="large" type="submit">
              Next
            </Button>
          </Stack>
        </FormProvider>
      )}

      {/* Second Form: OTPs */}
      {show.otpForm && (
        <FormProvider methods={otpMethods} onSubmit={onSubmitOtp}>
          <Stack spacing={2}>
            <Typography variant="body2">Ref for Phone : {ref.email}</Typography>
            <RHFTextField name="phoneOTP" label="Phone OTP" />
            <Stack direction="row" spacing={2}>
              {showTimer ? (
                <Button variant="outlined" size="large">
                  {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
                </Button>
              ) : (
                <Button variant="contained" size="large" onClick={handleResendClick}>
                  Resend
                </Button>
              )}
            </Stack>
            <Button variant="contained" size="large" type="submit">
              Submit
            </Button>
          </Stack>
        </FormProvider>
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
              }}
            />
            <RHFTextField
              name="confirmPassword"
              label="confirm password"
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
