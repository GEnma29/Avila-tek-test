import React from 'react';
import { TiShoppingCart } from 'react-icons/ti';

const ButtonBase: React.FC<{
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'ghosts';
  type?: 'button' | 'submit' | 'reset';
}> = ({ label, onClick, type, variant }) => {
  const stylesButton = {
    primary:
      'w-[110px] h-6 rounded-md bg-primary-300 px-2.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-primary-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300 text-base font-normal',
    secondary:
      'w-[110px] h-6 rounded bg-white px-2 py-1 text-xs font-semibold text-primary-200 shadow-sm ring-1 ring-inset ring-primary-300 hover:ring-primary-200 text-base font-normal ',
    ghosts:
      'bg-transparent text-primary-300 hover:bg-gray-50 text-base font-normal',
  };

  return (
    <button
      className={stylesButton[variant as keyof typeof stylesButton]}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
    >
      <div className="flex justify-center items-center">
        <TiShoppingCart className="mr-2" />
        {label}
      </div>
    </button>
  );
};

export default ButtonBase;
