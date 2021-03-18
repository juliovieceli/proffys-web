import React, { InputHTMLAttributes, useState, useCallback } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import './styles.css'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  filled: boolean;
  isPassword?: boolean
}

const LoginInput: React.FC<InputProps> = ({ filled, label, name, type, isPassword, ...rest }) => {
  const [controlledType, setControlledType] = useState('password')

  const handleClickSecurityEye = useCallback(() => {
    setControlledType(controlledType === 'password' ? "text" : 'password')

  }, [controlledType])

  const color = filled ? "#8257e5" : "#9C98A6"

  return (
    <div className="login-input-block">
      {filled && (<label className='label-filled' htmlFor={name}>{label}</label>)}

      <input type={isPassword ? controlledType : type} {...rest} />
      {isPassword && (
        <div onClick={handleClickSecurityEye} className="icon" >
          {controlledType === 'password' ? <FiEye size={24} color={color} /> : <FiEyeOff size={24} color={color} />
          }
        </div>)
      }

    </div>
  );
};

export default LoginInput;
