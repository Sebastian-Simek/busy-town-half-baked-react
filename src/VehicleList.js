import React from 'react';
import Vehicle from './Vehicle';

export default function VehicleList({ vehicles }) {
  return (
    <div className="traffic">
      {
        vehicles.map((vehicle, i) => <Vehicle 
          key={vehicle + i}
          vehicle={vehicle}  
        />)
      }
    </div>
  );
}
