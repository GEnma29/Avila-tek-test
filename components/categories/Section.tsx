import React from 'react';
import Title from '../common/Title';
import Card from './Card';

const categories = [
  'Perros',
  'Gatos',
  'Peces',
  'Roedores',
  'Reptiles',
  'Placeholder',
];
const CategoriesSection = () => (
  <div className="container p-1 mx-auto sm:px-6 lg:px-8">
    <div className="flex mt-[60px]">
      <Title title="Una gran variedad de categorías" />
    </div>
    <div className="flex mt-[20px] flex-wrap justify-around">
      {categories.map((category) => (
        <Card category={category} />
      ))}
    </div>
  </div>
);

export default CategoriesSection;
