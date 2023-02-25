import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { className, planetName, planetImage } = this.props;

    return (
      <div data-testid="planet-card">
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className={ className }
        />
        <p data-testid="planet-name" className="planet-name">
          {planetName}
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  className: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
