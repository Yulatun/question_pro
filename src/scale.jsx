import React from 'react';

const GrayscaleScale = () => {
  const scaleValues = Array.from({ length: 11 }, (_, index) => index * 10 - 50).reverse();

  return (
    <div style={{ alignSelf: 'center' }}>
      {scaleValues.map((value, index) => (
        <div
          key={value}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#808080',
          }}
        >
          {index !== scaleValues.length - 11 && (
            <div
              style={{
                borderLeft: '3px solid #e3e3e3',
                height: '38px',
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
