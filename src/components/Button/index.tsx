import React, { ButtonHTMLAttributes } from 'react';

import './styles.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   enabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ enabled = false, children, ...rest }) => {
   return (

      <button type='submit' className={enabled ? 'button-enabled' : 'button-disabled'} {...rest} >
         {children}
      </button>

   );
}

export default Button;