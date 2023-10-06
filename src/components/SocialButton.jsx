import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import PropTypes from 'prop-types';

function SocialButton({ icons }) {
  const iconSize = "4x";

  return (
    <Fragment>
      <div className="social-button gap-3 d-flex mt-3 mb-3">
        {icons.map((icon, index) => (
          <FontAwesomeIcon key={index} icon={icon} size={iconSize} />
        ))}
      </div>
      <h5>O usa tu email para registrarte</h5>
    </Fragment>
  );
}


SocialButton.propTypes = {
  icons: PropTypes.node,
};

export default SocialButton;
