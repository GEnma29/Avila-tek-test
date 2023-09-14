import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, Popover } from '@headlessui/react';
// menu icons
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { TiShoppingCart } from 'react-icons/ti';
// social icons
import {
  SlSocialInstagram,
  SlSocialFacebook,
  SlSocialTwitter,
} from 'react-icons/sl';
// logo
import Select from './forms/Select';
import Input from './forms/Input';
import UserSvg from './icons/User';
import PetSvg from './icons/Pet';
import LocationSvg from './icons/Location';

const locationOptions = [
  {
    label: 'Bello Monte',
    value: 'Bello Monte',
  },
];
const navigation = [
  { name: 'inicio', href: '#start' },
  { name: 'Comprar por marca', href: '#feature' },
  { name: 'Comprar por mascota', href: '#categories' },
  { name: 'Nuestros servicios', href: '#services' },
  { name: 'Promociones', href: '#popular' },
  { name: 'Nosotros', href: '#partners' },
];
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="bg-primary-300 h-[26px]">
        <div className="flex w-full  justify-end">
          <div className="flex flex-row justify-center items-center">
            <CiLocationOn className="text-white mt-1 mr-1" />
            <Select name="location" options={locationOptions} />
          </div>
          <div className="flex  font-white flex-row flex-end" />
          <SlSocialInstagram className="mt-1 text-white mr-4" />
          <SlSocialTwitter className="mt-1 text-white mr-3.5" />
          <SlSocialFacebook className="mt-1 text-white mr-16 " />
        </div>
      </div>
      <nav className="w-full flex-col" aria-label="Global">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-1 pb-0 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                width={100}
                height={40}
                className="h-8 w-auto"
                src="/assets/Logo-Test.png"
                alt=""
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Input />
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="flex text-secondary-600 w-[101px] justify-around flex-row">
              <LocationSvg />
              <PetSvg />
              <UserSvg />
              <div className="relative inline-block">
                <TiShoppingCart />
                <span className="absolute right-0 top-0 block h-1.5 w-1.5 rounded-full bg-primary-300 ring-2 ring-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden h-[30px] lg:flex mx-auto  max-w-7xl items-center p-6 lg:px-8 justify-around flex-row">
          {navigation.map(({ name, href }) => (
            <a
              href={href}
              className="flex cursor-pointer text-secondary-600 text-xs font-normal"
            >
              {name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#start" className="-m-1.5 p-1.5">
              <span className="sr-only">inicio</span>
              <Image
                className="h-8 w-auto"
                width={100}
                height={40}
                src="/assets/Logo-Test.png"
                alt="MaxiPet logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#featured"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Comprar por marca
                </a>
                <a
                  href="#categories"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Comprar por mascota
                </a>
                <a
                  href="#services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Nuestros servicios
                </a>
                <a
                  href="#popular"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Promociones
                </a>
                <a
                  href="#partners"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Nosotros
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
