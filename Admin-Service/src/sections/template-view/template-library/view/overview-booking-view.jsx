
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import {
   _bookings, 
   _bookingNew, 
  } from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';


import { useGetTemplatePosts } from 'src/api/templatesManagement';
import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import BookingDetails from '../booking-details';

// ----------------------------------------------------------------------

const SPACING = 3;

export default function OverviewBookingView() {

  const settings = useSettingsContext();
  const { posts } = useGetTemplatePosts();

  const [PostData, setPostData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    setPostData(posts);
  }, [posts]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPosts = PostData.filter((file) =>
    file?.templateImageDetails?.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={SPACING} disableEqualOverflow>
        <Grid xs={12}>
        <TextField
                fullWidth
                label="Search Templates"
                variant="outlined"
                value={searchQuery}
                onChange={handleSearch}
                sx={{ marginBottom: '20px' }}
              />
          <BookingDetails
            title="Templates Lists"
            tableData={filteredPosts}
            tableLabels={[
              { id: 'TemplateName', label: 'Template Name' },
              { id: 'TemplateSize', label: 'Template Size' },
              { id: 'CreatedAt', label: 'Created At' },
              { id: 'UpdatedAt', label: 'Updated At' },
              { id: 'status', label: 'Status' },
              { id: '' },
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
