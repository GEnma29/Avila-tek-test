import React from 'react';
import Image from 'next/image';

const CardServices: React.FC<{
  title: string;
}> = ({ title }) => (
  <div className="flex flex-col cursor-pointer">
    <Image width={80} height={80} src="/assets/Dog.png" alt="Dog" />
    <div>
      <h6>{title}</h6>
      <p className="text-sm font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie
        rhoncus id nunc, porta leo tempus facilisi.
      </p>
    </div>
  </div>
);

export default CardServices;
