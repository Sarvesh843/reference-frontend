import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { PlanFreeIcon, PlanStarterIcon, PlanPremiumIcon } from 'src/assets/icons';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';



export default function PricingCard({ card, sx, ...other }) {

  const [selectedItems, setSelectedItems] = useState([]); // State to store selected items
  const { subscription, lists, labelAction } = card;
  const [totalrate, setTotalRate] = useState(0);

  const basic = subscription === 'basic';

  const premium = subscription === 'premium';

  const custom = subscription === 'custom';


  const handleCheckboxChange = (item) => {
    setSelectedItems((prevSelectedItems) => {
      const isSelected = prevSelectedItems.some((selectedItem) => selectedItem === item.id);
      if (isSelected) {
        // If item is already selected, remove its rate from the total rate
        setTotalRate((prevTotalRate) => prevTotalRate - item.rate); //* 60
        return prevSelectedItems.filter((selectedItem) => selectedItem !== item.id);
      }
      // If item is not selected, add its rate to the total rate
      setTotalRate((prevTotalRate) => prevTotalRate + item.rate); //* 60
      return [...prevSelectedItems, item.id];
      
    });
  };

  useEffect(() => {
    localStorage.setItem("customPlans", JSON.stringify(selectedItems));
  }, [selectedItems]);


  const renderIcon = (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Box sx={{ width: 48, height: 48 }}>
        {basic && <PlanFreeIcon />}
        {custom && <PlanStarterIcon />}
        {premium && <PlanPremiumIcon />}
      </Box>

      {custom && <Label color="info">POPULAR</Label>}
    </Stack>
  );

  const renderSubscription = (
    <Stack spacing={1}>
      <Typography variant="h4" sx={{ textTransform: 'capitalize' }}>
        {subscription}
      </Typography>
      {/* <Typography variant="subtitle2">{caption}</Typography> */}
      <Typography variant="subtitle2">Saving 16.67 % in Month</Typography>
    </Stack>
  );


  let price;

  if (subscription === 'basic') {
    price = '12,000';
  } else if (subscription === 'premium') {
    price = '18,000';
  } else {
    price = totalrate === 0 ? '000' : totalrate;
  }

  const renderPrice = (
    <Stack direction="row">
      <Typography variant="h4">Rs.</Typography>
      <Typography variant="h2">{price}</Typography>
      <Typography
        component="span"
        sx={{
          alignSelf: 'center',
          color: 'text.disabled',
          ml: 1,
          typography: 'body2',
        }}
      >
        / Month
      </Typography>
    </Stack>
  );

  

  const renderList = (
    <Stack spacing={2}>
      {custom && <Box component="span" sx={{ typography: 'overline' }}> Customize Your Plan </Box>}
      <Stack direction="row" alignItems="center" justifyContent="space-between">
  
        <Box component="span" sx={{ typography: 'overline' }}>
          Features
        </Box>
        <Link
          target="_blank"
          // eslint-disable-next-line no-nested-ternary
          href={custom ? '/custom-features' : (basic ? '/basic-features' : '/all-features')}
          variant="body2"
          color="inherit"
          underline="always"
        >
          All
        </Link>
      </Stack>
  
      {lists.map((item, idx) => (
        <Stack
          key={idx}
          spacing={1}
          direction="row"
          alignItems="center"
          sx={{
            typography: 'body2',
          }}
        >
          {!custom ? <Iconify icon="eva:checkmark-fill" width={16} sx={{ mr: 1 }} /> : ''}
          {custom ? (
            <>
              <input type="checkbox" onChange={() => handleCheckboxChange(item)} />
              {item.feature}
            </>
          ) : (<>
            {item.feature}
          </>
          )}
        </Stack>
      ))}
    </Stack>
  );
  
  return (
    <Stack
      spacing={5}
      sx={{
        p: 5,
        borderRadius: 2,
        boxShadow: (theme) => ({
          xs: theme.customShadows.card,
          md: 'none',
        }),
        ...(custom && {
          borderTopRightRadius: { md: 0 },
          borderBottomRightRadius: { md: 0 },
        }),
        ...((custom || premium) && {
          boxShadow: (theme) => ({
            xs: theme.customShadows.card,
            md: `-40px 40px 80px 0px ${alpha(
              theme.palette.mode === 'light' ? theme.palette.grey[500] : theme.palette.common.black,
              0.16
            )}`,
          }),
        }),
        ...sx,
      }}
      {...other}
    >
      {renderIcon}

      {renderSubscription}

      {renderPrice}

      <Divider sx={{ borderStyle: 'dashed' }} />

      {renderList}
      <Button
        fullWidth
        component={RouterLink}
        to={`/plan-pricing/${labelAction.toLowerCase().replace(/\s+/g, '-')}`}
        size="large"
        variant="contained"
        color="primary"
      >
        {labelAction}
      </Button>
    </Stack>
  );
}

PricingCard.propTypes = {
  card: PropTypes.object,
  sx: PropTypes.object,
};
