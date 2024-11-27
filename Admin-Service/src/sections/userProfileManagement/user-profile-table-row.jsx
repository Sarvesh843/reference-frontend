import { useState } from 'react';
import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import { Switch, FormControlLabel } from '@mui/material';

import { UpdatePopUpProfileForm } from 'src/api/user';

import Iconify from 'src/components/iconify';


// ----------------------------------------------------------------------

export function RenderCellNumber({ params }) {
  return (
    <ListItemText
      disableTypography
      primary={
        <Link noWrap color="inherit" variant="subtitle2" sx={{ cursor: 'pointer' }}>
          {params.row.phone}
        </Link>
      }
      sx={{ display: 'flex', flexDirection: 'column' }}
    />
  );
}
RenderCellNumber.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

export function RenderCellEmailVerified({ params }) {
  return (
    <ListItemText
      disableTypography
      primary={
        <Link noWrap color="inherit" variant="subtitle2" sx={{ cursor: 'pointer' }}>
          {params.row.isEmailVerified ? (
            <Checkbox icon={<Iconify icon="bi:check-circle-fill" color="#078dee" />} disabled />
          ) : (
            <Checkbox disabled icon={<Iconify icon="radix-icons:cross-circled" />} />
          )}
        </Link>
      }
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    />
  );
}
RenderCellEmailVerified.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

export function RenderCellNumberVerified({ params }) {
  return (
    <ListItemText
      disableTypography
      primary={
        <Link noWrap color="inherit" variant="subtitle2" sx={{ cursor: 'pointer' }}>
          {params.row.isMobileVerified ? (
            <Checkbox icon={<Iconify icon="bi:check-circle-fill" color="#078dee" />} disabled />
          ) : (
            <Checkbox disabled icon={<Iconify icon="radix-icons:cross-circled" />} />
          )}
        </Link>
      }
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    />
  );
}
RenderCellNumberVerified.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

// Toggle User status
export function RenderCellToggle({ params }) {

  const [toggle, settoggle] = useState(params.row.PopUpDetail?.popUpProfileForm)

  const handleChange = async (event) => {
    // console.log(event.target.checked)
    try {
      const popUpProfileForm = event.target.checked;

      const response = await UpdatePopUpProfileForm(params.row.userId, {}, popUpProfileForm);
      // console.log('response------->', response.data.data.popUpProfileForm)

    } catch (error) {
      console.error('Error updating popUpProfileForm:', error);
    }
  };

  return (
    <ListItemText
      disableTypography
      primary={
        <Link noWrap color="inherit" variant="subtitle2" sx={{ cursor: 'pointer' }}>
          <FormControlLabel
            onChange={handleChange}
            control={<Switch defaultChecked={toggle} />}
            sx={{ flexGrow: 1, pl: 3 }}
          />
        </Link>
      }
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    />
  );
}

RenderCellToggle.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};


export function RenderCellEmail({ params }) {
  return (
    <ListItemText
      disableTypography
      primary={
        <Link noWrap color="inherit" variant="subtitle2" sx={{ cursor: 'pointer' }}>
          {params.row.email}
        </Link>
      }
      sx={{ display: 'flex', flexDirection: 'column' }}
    />
  );
}

RenderCellEmail.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};


export function RenderCellName({ params }) {
  return (
    <Stack direction="row" alignItems="center" sx={{ py: 2, width: 1 }}>
      <div>{params.row.userRoleType}</div>
    </Stack>
  );
}

RenderCellName.propTypes = {
  params: PropTypes.shape({
    row: PropTypes.object,
  }),
};

