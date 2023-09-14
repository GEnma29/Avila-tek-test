import React from 'react';
import Search from '../../public/assets/Search.svg';

const Input = () => (
  <div className="relative mt-2 rounded-md shadow-sm">
    <input
      type="text"
      name="price"
      id="price"
      className="block h-[33px] min-w-[320px] w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
      placeholder="Buscador"
      aria-describedby="price-currency"
    />
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
      <span className="text-gray-500 sm:text-sm" id="price-currency">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.14567 14.875C11.8621 14.875 14.8748 11.8622 14.8748 8.14582C14.8748 4.42941 11.8621 1.41666 8.14567 1.41666C4.42925 1.41666 1.4165 4.42941 1.4165 8.14582C1.4165 11.8622 4.42925 14.875 8.14567 14.875Z"
            stroke="#C8C2BE"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5832 15.5833L14.1665 14.1667"
            stroke="#C8C2BE"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  </div>
);

export default Input;
