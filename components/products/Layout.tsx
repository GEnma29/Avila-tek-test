import React from 'react';
import Image from 'next/image';
import Title from '../common/Title';
import CardProduct from '../common/cardProduct';
import { products } from '../../const/fakeProducts';

const LayoutProduct: React.FC<{
  title: string;
  isReversed?: boolean;
}> = ({ isReversed, title }) => (
  <div className="container p-1 mx-auto sm:px-6 lg:px-8">
    <div className="flex flex-col mt-2">
      <Title title={title} />
      <div
        className="flex flex-row"
        style={{ flexDirection: isReversed ? 'row-reverse' : 'row' }}
      >
        <div className="hidden sm:flex lg:flex  mt-2">
          <Image
            src="/assets/SideCat.png"
            alt="side cat"
            width={440}
            height={708}
            style={{
              marginRight: isReversed ? '0' : '40px',
              marginLeft: isReversed ? '40px' : '0',
            }}
          />
        </div>
        <div className="mx-auto   grid max-w-2xl grid-cols-2 gap-x-10 gap-y-10  sm:mt-1 sm:pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {products.map((product, index) => (
            <CardProduct key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default LayoutProduct;
