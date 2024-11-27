import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useMemo, useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
// import { ATTPL_TMS_HOST_API } from 'src/config-global';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import LoadingButton from '@mui/lab/LoadingButton';
// import { CardHeader,CardContent } from '@mui/material';

import { VEHICLE_OPTIONS } from 'src/_mock/_vehicle';
import { createVehicleProfile, updateVehicleProfile } from 'src/api/vehicle';

import { useSnackbar } from 'src/components/snackbar';
import FormProvider, {  RHFTextField, RHFAutocomplete } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function VehicleNewEditForm({ currentVehicle }) {
  const navigate = useNavigate();
  // const [sigType, setSigType] = useState(null);
  const [show, setShow] = useState({
    Profile: true,
  });

  const vehicleId = currentVehicle?.data.vehicleId;

  const { enqueueSnackbar } = useSnackbar();

  // Schema

  const ProfileSchema = Yup.object().shape({
    vehicleName: Yup.string().required('Vehicle Name is required'),
    model: Yup.string().required('Model is required'),
    year: Yup.number().required('Year is required'),
    chassisNumber: Yup.string().required('Chassis Number is required'),
    vehicleType: Yup.string().required('Vehicle Type is required'),
    color: Yup.string().required('Color is required'),
    manufacturingYear: Yup.string().required('Manufacturing Year is required'),
    engineNumber: Yup.string().required('Engine Number is required'),
    fuelType: Yup.string().required('Fuel Type is required'),
    fuelEfficiency: Yup.string().required('Fuel Efficiency is required'),
    grossVehicleWeight: Yup.string().required('Gross Vehicle Weight is required'),
    registrationNumber: Yup.string().required('Registration Number is required'),
    weightCapacity: Yup.number().required('Weight Capacity is required'),
    licensePlate: Yup.string().required('License Plate is required'),
    insuranceInfo: Yup.string().required('Insurance Information is required'),
    maintenanceHistory: Yup.string().required('Maintenance History is required'),
    vehicleCondition: Yup.string().required('Vehicle Condition is required'),
    availability: Yup.boolean().required('Availability is required'),
    ownerInfo: Yup.string().required('Owner Information is required'),
    accessibilityFeature: Yup.string().required('Accessibility Feature is required'),
    safetyFeature: Yup.string().required('Safety Feature is required'),
    licenseRenewalDate: Yup.string().required('License Renewal Date is required'),
    gpsTracking: Yup.boolean().required('GPS Tracking is required'),
    vinNumber: Yup.string().required('VIN Number is required'),
    averageMileage: Yup.number().required('Average Mileage is required'),
    vehicleImageUrl: Yup.string(),
    vehicleWeight: Yup.number().required('Vehicle Weight is required'),
    tireSize: Yup.string().required('Tire Size is required'),
    insuranceExpiryDate: Yup.string().required('Insurance Expiry Date is required'),
    licenseExpiryDate: Yup.string().required('License Expiry Date is required'),
    vehicleSeatingConfiguration: Yup.string().required('Vehicle Seating Configuration is required'),
    audioEntertainmentSystem: Yup.string().required('Audio Entertainment System is required'),
    additionalEquipment: Yup.string(),
    usageRestrictions: Yup.string(),
    specialFeatures: Yup.string(),
    policyNumber: Yup.string().required('Policy Number is required'),
  });

  // Identity Values

  const defaultProfileValues = useMemo(
    () => ({
      vehicleName: currentVehicle?.data.vehicleName || '',
      model: currentVehicle?.data.model || '',
      year: currentVehicle?.data.year || '',
      chassisNumber: `${currentVehicle?.data.chassisNumber || ''}`,
      vehicleType: currentVehicle?.data.vehicleType || '',
      color: currentVehicle?.data.color || '',
      manufacturingYear: currentVehicle?.data.manufacturingYear || '',
      engineNumber: currentVehicle?.data.engineNumber || '',
      fuelType: currentVehicle?.data.fuelType || '',
      fuelEfficiency: currentVehicle?.data.fuelEfficiency || '',
      grossVehicleWeight: currentVehicle?.data.grossVehicleWeight || '',
      registrationNumber: currentVehicle?.data.registrationNumber || '',
      weightCapacity: currentVehicle?.data.weightCapacity || '',
      licensePlate: currentVehicle?.data.licensePlate || '',
      insuranceInfo: currentVehicle?.data.insuranceInfo || '',
      maintenanceHistory: currentVehicle?.data.maintenanceHistory || '',
      vehicleCondition: currentVehicle?.data.vehicleCondition || '',
      availability: currentVehicle?.data.availability || '',
      ownerInfo: currentVehicle?.data.ownerInfo || '',
      accessibilityFeature: currentVehicle?.data.accessibilityFeature || '',
      safetyFeature: currentVehicle?.data.safetyFeature || '',
      licenseRenewalDate: currentVehicle?.data.licenseRenewalDate || '',
      gpsTracking: currentVehicle?.data.gpsTracking || '',
      vinNumber: currentVehicle?.data.vinNumber || '',
      averageMileage: currentVehicle?.data.averageMileage || '',
      vehicleImageUrl: currentVehicle?.data.vehicleImageUrl || '',
      vehicleWeight: currentVehicle?.data.vehicleWeight || '',
      tireSize: currentVehicle?.data.tireSize || '',
      insuranceExpiryDate: currentVehicle?.data.insuranceExpiryDate || '',
      licenseExpiryDate: currentVehicle?.data.licenseExpiryDate || '',
      vehicleSeatingConfiguration: currentVehicle?.data.vehicleSeatingConfiguration || '',
      audioEntertainmentSystem: currentVehicle?.data.audioEntertainmentSystem || '',
      additionalEquipment: currentVehicle?.data.additionalEquipment || '',
      usageRestrictions: currentVehicle?.data.usageRestrictions || '',
      specialFeatures: currentVehicle?.data.specialFeatures || '',
      policyNumber: currentVehicle?.data.policyNumber || '',
    }),
    [currentVehicle]
  );

  // Methods

  const methodsProfile = useForm({
    resolver: yupResolver(ProfileSchema),
    defaultProfileValues,
  });

  // For profile form
  const { handleSubmit: handleSubmitProfile, reset: profileReset } = methodsProfile;

  useEffect(() => {
    if (currentVehicle) {
      profileReset(defaultProfileValues);
    }
  }, [currentVehicle, defaultProfileValues, profileReset]);

  // Profile Creation function

  const onSubmitProfile = handleSubmitProfile(async (data) => {
    try {
      console.log('>>>', data);
      const response = await createVehicleProfile(data);
      console.log(response);
      if (response) {
        enqueueSnackbar('Vehicle created successfully', { variant: 'success' });
        navigate('/dashboard/vehicle');
      } else {
        enqueueSnackbar('Failed to create Vehicle', { variant: 'error' });
      }
    } catch (error) {
      // Handle errors here if necessary
      console.error('Error submitting Vehicle:', error);
      enqueueSnackbar('An error occurred while creating Vehicle', { variant: 'error' });
    }
  });

  // Profile Update function

  const onSubmitProfileUpdate = handleSubmitProfile(async (data) => {
    try {
      const response = await updateVehicleProfile(vehicleId, data);
      console.log('>>>>updatex', response);
      if (response) {
        enqueueSnackbar('Vehicle created successfully', { variant: 'success' });
        // navigate('/dashboard/vehicle');
        navigate(`/dashboard/vehicle/${vehicleId}`);
      } else {
        enqueueSnackbar('Failed to create Vehicle', { variant: 'error' });
      }
    } catch (error) {
      // Handle errors here if necessary
      console.error('Error submitting Vehicle:', error);
      enqueueSnackbar('An error occurred while creating Vehicle', { variant: 'error' });
    }
  });

  return (
    <div>
      {show.Profile && (
        <FormProvider
          methods={methodsProfile}
          onSubmit={currentVehicle ? onSubmitProfileUpdate : onSubmitProfile}
        >
          <Grid container spacing={3}>
            <Grid xs={12} md={8}>
              <Card sx={{ p: 3 }}>
                <Box
                  rowGap={3}
                  columnGap={2}
                  display="grid"
                  gridTemplateColumns={{
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                  }}
                >
                  <RHFTextField name="vehicleName" label="Vehicle Name" />
                  <RHFTextField name="model" label="Model" />
                  <RHFTextField name="year" label="Year" />
                  <RHFTextField name="chassisNumber" label="Chassis Number" />
                  <RHFAutocomplete
                    name="vehicleType"
                    label="Vehicle Type"
                    placeholder=" Choose Payment Method"
                    fullWidth
                    options={VEHICLE_OPTIONS.map((option) => option.label)}
                    getOptionLabel={(option) => option}
                  />
                  <RHFTextField name="color" label="Color" />
                  <RHFTextField name="manufacturingYear" label="Manufacturing Year" />

                  <RHFTextField name="engineNumber" label="Engine Number" />
                  <RHFTextField name="fuelType" label="Fuel Type" />
                  <RHFTextField name="fuelEfficiency" label="Fuel Efficiency" />
                  <RHFTextField name="grossVehicleWeight" label="Gross Vehicle Weight" />
                  <RHFTextField name="registrationNumber" label="Registration Number" />
                  <RHFTextField name="weightCapacity" label="Weight Capacity" />
                  <RHFTextField name="licensePlate" label="Vehicle Number" />
                  <RHFTextField name="insuranceInfo" label="Insurance Info" />
                  <RHFTextField name="maintenanceHistory" label="Maintenance History" />
                  <RHFTextField name="vehicleCondition" label="Vehicle Condition" />
                  <RHFTextField name="availability" label="Availability" />
                  <RHFTextField name="ownerInfo" label="Owner Info" />
                  <RHFTextField name="accessibilityFeature" label="Accessibility Feature" />
                  <RHFTextField name="safetyFeature" label="Safety Feature" />
                  <RHFTextField
                    name="licenseRenewalDate"
                    InputLabelProps={{ shrink: true }}
                    label="License Renewal Date"
                    type="date"
                  />
                  <RHFTextField name="gpsTracking" label="GPS Tracking" />
                  <RHFTextField name="vinNumber" label="Vin Number" />
                  <RHFTextField name="averageMileage" label="Average Mileage" />
                  <RHFTextField name="vehicleImageUrl" label="Vehicle ImageUrl" />
                  <RHFTextField name="vehicleWeight" label="Vehicle Weight" />
                  <RHFTextField name="tireSize" label="Tire Size" />
                  <RHFTextField
                    name="licenseExpiryDate"
                    InputLabelProps={{ shrink: true }}
                    label="license Expiration Date"
                    type="date"
                  />
                  <RHFTextField
                    name="insuranceExpiryDate"
                    InputLabelProps={{ shrink: true }}
                    label="Insurance Expiry Date"
                    type="date"
                  />
                  <RHFTextField
                    name="vehicleSeatingConfiguration"
                    label="Vehicle Seating Configuration"
                  />

                  {/* <RHFTextField name="accessibilityFeature" label="Accessibility Feature" /> */}
                  <RHFTextField
                    name="audioEntertainmentSystem"
                    label="Audio Entertainment System"
                  />
                  <RHFTextField name="additionalEquipment" label="Additional Equipment" />
                  <RHFTextField name="usageRestrictions" label="Usage Restrictions" />
                  <RHFTextField name="specialFeatures" label="Special Features" />
                  <RHFTextField name="policyNumber" label="Policy Number" />

                  {/* <Card>
                    <CardHeader title="Receipt Image" />
                    <CardContent>
                      <RHFUpload
                        multiple
                        thumbnail
                        // disabled={uploadBtn}
                        name="vehicleImageUrl"
                        maxSize={512017}
                        // onDrop={handleDropMultiFile}
                        onRemove={(removedFile) => {
                          // deleteImage(removedFile);
                        }}
                        onRemoveAll={() => {
                          // deleteImages();
                        }}
                        // -----------------------------------------------------------
                        // onUpload={() => { uploadImages(values.vehicleImageUrl) }}
                      />
                    </CardContent>
                  </Card> */}
                </Box>

                <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                  <LoadingButton type="submit" variant="contained">
                    {!currentVehicle ? 'Create Vehicle' : 'Save Changes'}
                  </LoadingButton>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </FormProvider>
      )}
    </div>
  );
}

VehicleNewEditForm.propTypes = {
  currentVehicle: PropTypes.object,
};
