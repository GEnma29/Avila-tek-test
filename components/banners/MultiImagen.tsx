import React from 'react';
import Image from 'next/image';

const MultiImagen = () => (
  <div className="hidden sm:flex  p-1 mx-auto sm:px-6 lg:px-8">
    {/** TODO: add only image to div content  */}
    <div className="flex flex-row">
      <Image
        src="/assets/DogEating.png"
        width={580}
        height={220}
        alt="dog eating"
      />
      <Image
        src="/assets/DogFood.png"
        width={580}
        height={220}
        alt="god food"
      />
    </div>
  </div>
);

export default MultiImagen;
