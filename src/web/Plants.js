import React from 'react';

const Plant = ({ name, price, description,}) => {
  return (
    <div>
      <h3>Name:</h3><p>{name}</p>
      <h3>Price:</h3><p>{price}</p>
      <h3>Description:</h3><p>{description}</p>
    

    </div>
  );
};

export default Plant;