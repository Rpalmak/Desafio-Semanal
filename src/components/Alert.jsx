//import React from 'react';
import PropTypes from 'prop-types';

function Alert({ validationMessage, alert }) {
  return (
    <div className={`alert ${alert ? 'alert-success' : 'alert-danger'} mt-3`}>
      {validationMessage}
    </div>
  );
}

Alert.propTypes = {
  validationMessage: PropTypes.node,
  alert: PropTypes.bool.isRequired,
};

export default Alert;
