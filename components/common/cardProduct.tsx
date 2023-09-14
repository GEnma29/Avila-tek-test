import React from 'react';
import Image from 'next/image';
import PawSvg from './Paw.fragment';
import ButtonBase from './button-base';

type ProductType = {
  label: string;
  image: string;
  price: number;
  review: number;
};
const cardProduct: React.FC<{ product: ProductType }> = ({ product }) => (
  <div className="flex flex-col w-full cursor-pointer  sm:w-[200px] h-[334px] ">
    <div className="hidden sm:flex ">
      <Image
        src="/assets/PuppyChiot.png"
        alt="product"
        width={144}
        height={200}
      />
    </div>
    <div className="flex sm:hidden p-2 ">
      <Image
        src="/assets/PuppyChiot.png"
        alt="product"
        width={144}
        height={200}
      />
    </div>
    <div className="flex flex-col p-2 ">
      <p className="text-sm font-medium">1st Choice Puppy Chiot</p>
      <div className="flex flex-row w-[87px] justify-around">
        {Array(5)
          .fill('')
          .map((_, i) => (
            <PawSvg
              key={i}
              fillColor={i < product.review ? '#B5B0AD' : '#DAD6D3'}
            />
          ))}
      </div>
      <p className="text-sm mt-0.5 text-neutral">${product.price}</p>
      <div className="flex flex-row justify-end p-2 ">
        <ButtonBase
          variant="primary"
          onClick={() => console.log('clicked')}
          label="Agregar"
        />
      </div>
    </div>
  </div>
);

export default cardProduct;
