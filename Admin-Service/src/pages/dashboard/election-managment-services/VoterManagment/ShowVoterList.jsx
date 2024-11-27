import { Helmet } from 'react-helmet-async';

import { VoterListView } from 'src/sections/voter/view';

// ----------------------------------------------------------------------

export default function VoterListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Voter List</title>
      </Helmet>

      <VoterListView />
    </>
  );
}
