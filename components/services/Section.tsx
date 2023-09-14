import React from 'react';
import { services } from '../../const/fakeServices';
import CardServices from './Card';
import Title from '../common/Title';

const ServicesSection = () => (
  <div className="container p-1 mx-auto sm:px-6 lg:px-8">
    <div className="flex flex-col">
      <Title title="Nuestros servicios" />
      <p className="mt-4 mb-8 text-black text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut
        viverra fames sed.
      </p>
      <div className="mx-auto mt-1 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-1 sm:pt-1 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {services.map(({ title }) => (
          <CardServices title={title} />
        ))}
      </div>
    </div>
  </div>
);

export default ServicesSection;
