import { Helmet } from 'react-helmet-async';

import {AmbulanceTripListView} from 'src/sections/ambulance-trip/view'
// ----------------------------------------------------------------------

export default function AmbulanceTripManagementListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Wardvol Management</title>
      </Helmet>
          
      <AmbulanceTripListView/>
    </>
  );
}
