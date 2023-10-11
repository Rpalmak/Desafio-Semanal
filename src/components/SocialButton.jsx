import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';

function SocialButton({ icons }) {
  const iconSize = "4x";

  const handleIconClick = (iconName) => {
    console.log(`Icono ${iconName} clickeado!`);
  }

  return (
    <div className="social-button gap-3 d-flex mt-3 mb-3">
      {icons.map((icon, index) => (
        <button key={index} onClick={() => handleIconClick(icon.iconName)}>
          <FontAwesomeIcon icon={icon} size={iconSize} />
        </button>
      ))}
    </div>
  );
}

SocialButton.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SocialButton;
