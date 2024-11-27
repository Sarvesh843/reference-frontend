import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import CandidateNewEditForm from '../candidate-new-edit-form';

// ----------------------------------------------------------------------

export default function CandidateCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a new Candidate"
        links={[
          {
            name: 'Candidate ',
            href: paths.dashboard.candidate.root,
          },
          { name: 'New Candidate' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      <CandidateNewEditForm />
    </Container>
  );
}
