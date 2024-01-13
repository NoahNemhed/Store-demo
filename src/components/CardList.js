import React from 'react';
import Card from './Card';

const CardList = ({ products }) => {

  return (
    <div>
      {
        products.map((user, i) => {
          return (
            <Card
              key={i}
              id={products[i].id}
              title={products[i].title}
              brand={products[i].brand}
              description={products[i].description}
              price={products[i].price}
              image={products[i].images[0]}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;