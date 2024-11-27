import { Helmet } from 'react-helmet-async';

import {TripDriverListView} from 'src/sections/trip-driver/view'
// ----------------------------------------------------------------------

export default function TripDriverManagementListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: TripDriver Management</title>
      </Helmet>
          
      <TripDriverListView/>
    </>
  );
}
