import React from 'react';
import { products } from '../../const/fakeProducts';
import CardProduct from '../common/cardProduct';
import Title from '../common/Title';

const PopularSection = () => {
  const onlyFiveProducts = products.filter((product, index) => index < 5);
  return (
    <div className="container p-1 mx-auto sm:px-6 lg:px-8">
      <Title title="Productos populares" />
      <div className="flex flex-wrap justify-center items-center w-full h-full p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-20 3xl:p-24 4xl:p-28">
        {onlyFiveProducts.map((product, index) => (
          <CardProduct product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
