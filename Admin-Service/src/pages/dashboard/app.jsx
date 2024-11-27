import { Helmet } from 'react-helmet-async';

import { useAuthContext } from 'src/auth/hooks';
import { useGetVotersDetails } from 'src/api/voter';

import { OverviewAppView } from 'src/sections/overview/app/view';
import Model from 'src/sections/overview/InitialModel/view/Model';
import { OverviewAppViewVoter } from 'src/sections/overview/appVoter/view';

// ----------------------------------------------------------------------

export default function OverviewAppPage() {

  const { user } = useAuthContext();
  // console.log('user---------------->', user)

  const { voters: voterDetails } = useGetVotersDetails();
  const detailList = voterDetails?.data || {};
  
  // console.log((!user?.email || !user?.UserProfile?.dateOfBirth || !user?.UserProfile?.gender || !user?.UserProfile?.fatherName || !user?.UserIdentityDetails[0]?.identityNumber) && true )
  return (
    <>
      <Helmet>
        <title> Dashboard: App</title>
      </Helmet>
      {/* <Model /> */}
      {/* {(!user?.email || !user?.UserProfile?.dateOfBirth || !user?.UserProfile?.gender || !user?.UserProfile?.firstName || !user?.UserIdentityDetails[0]?.identityNumber || !detailList?.partyId || !detailList?.epicNo || !detailList?.wardNo) && <Model />} */}
      {/* { user?.PopUpDetail?.popUpProfileForm === true && <Model />} */}
      {user?.userRoleId === 9 ? <OverviewAppViewVoter /> : <OverviewAppView />}
    </>
  );
}
