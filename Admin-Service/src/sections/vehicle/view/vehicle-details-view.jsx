import PropTypes from 'prop-types';
import {useState,useEffect} from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useGetVehicle } from 'src/api/vehicle'; // Changed to useGetVehicle
import Iconify from 'src/components/iconify';
import EmptyContent from 'src/components/empty-content';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import VehicleDetailsHero from '../vehicle-details-hero'; // Changed to VehicleDetailsHero
import BannerBlurImg from './assets/overlay_2.jpg';


// ----------------------------------------------------------------------

export default function VehicleDetailsView({ id }) { // Changed function name to VehicleDetailsView
  const { vehicle, vehicleError } = useGetVehicle(id); // Changed to useGetVehicle
  const [vehicleData, setVehicleData] = useState({}); // Changed to vehicleData

  useEffect(() => {
    if (vehicle && vehicle.data) {
      setVehicleData(vehicle.data); // Changed to vehicleData
    }
  }, [vehicle]);

  

  const renderError = (
    <Container sx={{ my: 10 }}>
      <EmptyContent
        filled
        title={`${vehicleError?.message}`} // Changed to vehicleError
        action={
          <Button
            component={RouterLink}
            href={paths.vehicle} // Changed to paths.vehicle
            startIcon={<Iconify icon="eva:arrow-ios-back-fill" width={16} />}
            sx={{ mt: 3 }}
          >
            Back to List
          </Button>
        }
        sx={{ py: 10 }}
      />
    </Container>
  );

  const renderPost = vehicle && ( // Changed to vehicle
    <>
      <VehicleDetailsHero title='Vehicle Details' coverUrl={BannerBlurImg} /> 

      <Container
        maxWidth={false}
        sx={{
          py: 3,
          mb: 5,
          borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
        }}
      >
        <CustomBreadcrumbs
          links={[
            {
              name: 'Vehicle', // Changed to Vehicle
              href: paths.dashboard.vehicle.root, // Changed to paths.dashboard.vehicle.root
            },
            {
              name: 'Details',
              href: paths.vehicle, // Changed to paths.vehicle
            },
          ]}
          sx={{ maxWidth: 720, mx: 'auto' }}
        />
      </Container>

      <Container maxWidth={false}>
        <Stack sx={{ maxWidth: 720, mx: 'auto' }}>
          <Stack direction="column" alignItems="start">
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Vehicle Name:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.vehicleName}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Model:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.model}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Year:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.year}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Chassis Number:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.chassisNumber}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Vehicle Type:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.vehicleType}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Color:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.color}</Typography> 
            </Stack>

            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Manufacturing Year:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.manufacturingYear}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Engine Number:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.engineNumber}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Fuel Type:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.fuelType}</Typography>
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>fuelEfficiency:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.fuelEfficiency}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Gross Vehicle Weight:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.grossVehicleWeight}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Registration Number:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.registrationNumber}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>WeightCapacity:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.weightCapacity}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Vehicle Number:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.licensePlate}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Insurance Info:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.insuranceInfo}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Maintenance History:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.maintenanceHistory}</Typography>
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Vehicle Condition:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.vehicleCondition}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Availability:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.availability?"available":"Not available"}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Owner Info:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.ownerInfo}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Accessibility Feature:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.accessibilityFeature}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Safety Feature:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.safetyFeature}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>License Renewal Date:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.licenseRenewalDate}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>GPS Tracking:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.gpsTracking?"true":"false"}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Vin Number:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.vinNumber}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Average Mileage:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.averageMileage}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>vehicle Image:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.vehicleImageUrl}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Vehicle Weight:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.vehicleWeight}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Tire Size:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.tireSize}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Insurance Expiry Date:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.insuranceExpiryDate}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>License Expiry Date:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.licenseExpiryDate}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Vehicle Seating Configuration:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.vehicleSeatingConfiguration}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Audio Entertainment System:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.audioEntertainmentSystem}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Additional Equipment:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.additionalEquipment}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Usage Restrictions:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.usageRestrictions}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Special Features:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.specialFeatures}</Typography> 
            </Stack>
            <Stack direction="row" alignItems="start" sx={{ marginTop: '10px' }}>
              <Typography sx={{ mr: 1, minWidth: 180 }}>Policy Number:</Typography>
              <Typography sx={{ ml: 1 }}> {vehicleData.policyNumber}</Typography> 
            </Stack>
           
           
          </Stack>
          <Divider sx={{ mt: 5, mb: 2 }} />
        </Stack>
      </Container>
    </>
  );

  return (
    <>
      {/* {postLoading && renderSkeleton} */}

      {vehicleError && renderError}

      {vehicle && renderPost} 
    </>
  );
}
VehicleDetailsView.propTypes = {
  id: PropTypes.string,
}; // Changed to VehicleDetailsView
