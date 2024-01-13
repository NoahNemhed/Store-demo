import React from 'react';

const Card = ({ id, title, brand, description, price, image }) => {
  return (
    <div className='cardlist tc grow bg-blue br3 pa3 ma2 dib bw2 shadow-5' style={{ width: '400px', height: '525px' }}>
      <img alt='Product Card' className='w-100 h-50' src={image} />
      <div className='flex flex-column justify-between h-50'>
        <div>
          <h2 className='f3 white'>{title}</h2>
          <p className='white'>{brand}</p>
          <p className='white'>{description}</p>
        </div>
        <p className='white'>${price}</p>
      </div>
    </div>
  );
}

export default Card;
