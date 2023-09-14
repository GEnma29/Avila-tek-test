import React from 'react';
import Slider from '../Slider';
import Header from '../Header';
import CategoriesSection from '../categories/Section';
import FeatureSection from '../products/featured';
import MultiImagen from '../banners/MultiImagen';
import PopularSection from '../products/popular';
import LastProducts from '../products/LastProducts';
import Banner from '../banners/Banner';
import ServicesSection from '../services/Section';
import PartnersSection from '../partners/Section';
import Footer from '../Footer';

const Layout = () => (
  <div className="flex flex-col w-full h-full">
    <section id="start" className="flex flex-col w-full h-full">
      <Header />
      <Slider />
    </section>
    <section id="categories" className="flex mb-[80px] w-full ">
      <CategoriesSection />
    </section>
    <section id="featured" className="flex w-full ">
      <FeatureSection />
    </section>
    <section className="flex my-20 w-full ">
      <MultiImagen />
    </section>
    <section id="popular" className="flex w-full ">
      <PopularSection />
    </section>
    <section className="flex my-20 w-full ">
      <Banner />
    </section>
    <section id="lastProducts" className="flex w-full ">
      <LastProducts />
    </section>
    <section id="services" className="flex w-full my-20 ">
      <ServicesSection />
    </section>
    <section id="partners" className="flex w-full ">
      <PartnersSection />
    </section>
    <section>
      <Footer />
    </section>
  </div>
);

export default Layout;
