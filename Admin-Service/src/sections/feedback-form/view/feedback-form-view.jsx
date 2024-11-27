import React from 'react';

import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useSettingsContext } from 'src/components/settings';

import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import FeedbackNewEditForm from '../feedback-new-edit-form';

export default function FeedbackForm() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Share your suggestion"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Suggestion Box', href: paths.dashboard.FeedbackForm },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <FeedbackNewEditForm />
    </Container>
  );
}
