import React from 'react';
import Image from 'next/image';
import Title from '../common/Title';

const PartnersSection = () => (
  <div className="container p-1 mx-auto sm:px-6 lg:px-8">
    <div className="flex flex-col">
      <Title title="Trabajamos con las mejores marcas" />
      <div className="flex mt-4 flex-wrap">
        <div className="flex max-w-xs mr-[40px] ">
          <p className="tex-base font-normal ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut
            viverra fames sed.
          </p>
        </div>
        <div className="flex flex-wrap justify-around">
          {new Array(4).fill(0).map((_, i) => (
            <Image
              width={126.7}
              height={80}
              className="mt-[20px] mr-[20px]  sm:mt-0 sm:mr-[80px]"
              src="/assets/Parnets.png"
              alt="parnets"
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default PartnersSection;
