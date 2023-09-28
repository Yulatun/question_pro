import React from 'react';

const GrayscaleScaleMobile = () => {
  const values = [-50, -25, 0, 25, 50]

  return (
    <div className='gray-scale-container-mb'>
      {values.map((value, index) => (
        <React.Fragment key={index}>
          <div>{value}</div>
          {index !== values.length - 1 && <div className='stripe-mb'></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default GrayscaleScaleMobile;
