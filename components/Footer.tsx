import Image from 'next/image';
import { SlSocialInstagram } from 'react-icons/sl';
import { BsTwitter } from 'react-icons/bs';
import { BiLogoFacebook } from 'react-icons/bi';

const navigation = {
  myAccount: [
    { name: 'Información personal', href: '#' },
    { name: 'Direcciones', href: '#' },
    { name: 'Mascotas', href: '#' },
    { name: 'Órdenes', href: '#' },
    { name: 'Agenda', href: '#' },
  ],
  info: [
    { name: 'Formulario de contacto', href: '#' },
    { name: 'Preguntas frecuentes', href: '#' },
    { name: 'Términos y condiciones', href: '#' },
    { name: 'Política de privacidad', href: '#' },
  ],
  support: [
    { name: 'Bello Monte, calle XXXX, local 1', href: '#' },
    { name: '(0212) 575 54 12', href: '#' },
    { name: 'soporte@maxipet.com', href: '#' },
    { name: 'Lunes a Viernes', href: '#' },
    { name: '9:00 a.m. - 5:00 p.m.', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white relative" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Image
        className="absolute bottom-8 right-20"
        width={53.11}
        height={60}
        src="/assets/Tree.png"
        alt="logo"
      />
      <Image
        className="absolute bottom-8 left-20"
        width={40}
        height={40}
        src="/assets/Doghouse.png"
        alt="logo"
      />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="hidden w-60 flex-col sm:flex">
            <h6 className="text-lg text-primary-300 font-semibold">
              Sobre nosotros
            </h6>
            <div className="flex">
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
                molestie rhoncus id nunc, porta leo tempus facilisi.
              </p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-semibold leading-6 text-primary-300">
                  Mi cuenta
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.myAccount.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base font-normal leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-lg font-semibold leading-6 text-primary-300">
                  Información
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.info.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base font-normal leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-semibold leading-6 text-primary-300">
                  Atención al cliente
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base font-normal leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                  <li className="flex text-xs flex-row text-secondary-500">
                    <SlSocialInstagram />
                    <BsTwitter className="ml-2 mr-2" />
                    <BiLogoFacebook />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[32px] bg-primary-300">
        <div className="flex w-full justify-center items-center">
          <p className="text-sm text-white">
            Copyright © 2021 Maxi Pet. Todos los Derechos Reservados.
            Desarrollado por Avila Tek
          </p>
          <Image
            src="/assets/Avila.png"
            className="ml-2"
            width={27.54}
            height={17.07}
            alt="Avila"
          />
        </div>
      </div>
    </footer>
  );
}
