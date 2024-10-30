'use client';
import React, { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
interface IProps {
  type: string;
  label: string;
  req?: string;
  placeholder?: string;
}

const FormInput: React.FC<IProps> = ({ type, label, req, placeholder }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  if (type === 'password') {
    let activeType;
    let icon;
    let buttonText;
    if (isVisible) {
      activeType = 'text';
      buttonText = 'Hide';
      icon = <IoEyeOff />;
    } else {
      activeType = 'password';
      buttonText = 'Show';
      icon = <IoEye />;
    }

    return (
      <div className="w-full">
        <div className="flex justify-between">
          <p>{label}</p>
          <button
            className="flex items-center justify-center gap-1"
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            {icon}
            <span>{buttonText}</span>
          </button>
        </div>
        <input type={activeType} className="border w-full p-2 rounded-md" value={placeholder} />
        <label className="text-sm">{req}</label>
      </div>
    );
  } else {
    return (
      <div className="w-full">
        <p>{label}</p>
        <input type={type} className="border w-full p-2 rounded-md" placeholder={placeholder} />
      </div>
    );
  }
};

export default FormInput;
