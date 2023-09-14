import React from 'react';

const Title: React.FC<{
  title: string;
}> = ({ title }) => (
  <div className="flex flex-col">
    <p className="text-secondary-500 file:text-sm font-normal">
      Lorem ipsum dolor sit amet.
    </p>
    <h2 className="text-primary-300 text-xl font-bold">{title}</h2>
  </div>
);

export default Title;
