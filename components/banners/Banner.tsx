import React from 'react';
import Image from 'next/image';

const Banner = () => (
  <div className="hidden sm:flex  p-1 mx-auto sm:px-6 lg:px-8">
    {/** TODO: add only image to div content  */}
    <div className="flex flex-row">
      <Image
        src="/assets/AdDog.png"
        width={1160}
        height={220}
        alt="dog playing"
      />
    </div>
  </div>
);

export default Banner;
