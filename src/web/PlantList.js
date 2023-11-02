import React from 'react';
import Plant from './Plants.js';

const PlantList = ({ plantData }) => {
  
  return (
    <div>
      {plantData.map((plant) => (
        <Plant key={plant.id} name={plant.name} price={plant.price} description={plant.description} imageUrl={plant.imageUrl} />
      ))}
    </div>
  );
};

export default PlantList;