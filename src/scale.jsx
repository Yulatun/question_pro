import React from 'react';

const GrayscaleScale = () => {
  const scaleValues = Array.from({ length: 11 }, (_, index) => index * 10 - 50).reverse();

  return (
    <div style={{ height: '500px' }}>
      {scaleValues.map((value, index) => (
        <div
          key={value}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#CCCCCC',
          }}
        >
          {index !== scaleValues.length - 11 && (
            <div
              style={{
                borderLeft: '2px solid #CCCCCC',
                height: '36px',
                // marginBottom: '10px',
                fontSize: '12px',
                fontWeight: 'bold',
              }}
            ></div>
          )}
          <span style={{ fontSize: '12px' }}>{value}</span>
        </div>
      ))}
    </div>
  );
};

export default GrayscaleScale;
