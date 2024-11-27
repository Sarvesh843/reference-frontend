import { Helmet } from 'react-helmet-async';

import {WardvolListView} from 'src/sections/wardvol/view'
// ----------------------------------------------------------------------

export default function WardvolManagementListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Ambulance Management</title>
      </Helmet>
          
      <WardvolListView/>
    </>
  );
}
