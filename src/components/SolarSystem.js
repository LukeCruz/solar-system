import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((ele) => (<PlanetCard
          key={ ele.name }
          planetName={ ele.name }
          planetImage={ ele.image }
        />))}
      </div>
    );
  }
}

export default SolarSystem;
