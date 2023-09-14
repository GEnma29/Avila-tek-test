import Image from 'next/image';
import React from 'react';

const Card: React.FC<{
  category: string;
}> = ({ category }) => (
  <div className="card">
    <Image
      className="cardImage"
      width={120}
      height={120}
      src="/assets/Dog.png"
      alt="logo"
    />
    <p className="text-black text-center">{category}</p>
  </div>
);

export default Card;
