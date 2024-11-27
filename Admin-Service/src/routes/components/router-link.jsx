import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

// ----------------------------------------------------------------------
const RouterLink = forwardRef(({ href, ...other }, ref) =>
  {
    const targetAttribute = href==="https://affidavit.eci.gov.in/" ? "_blank" : "_self";
    return <Link ref={ref} to={href} target={targetAttribute}  {...other} />
  }

);

RouterLink.propTypes = {
  href: PropTypes.string,
};

export default RouterLink;
