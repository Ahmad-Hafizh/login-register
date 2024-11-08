/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
interface IProps {
  id: string;
  type: string;
  label: string;
  req?: string;
  placeholder?: string;
  // ref?: any;
  value?: string;
  onChange?: (e: any) => void;
}

const FormInput: React.FC<IProps> = ({ id, value, type, label, req, placeholder, onChange }) => {
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
          <label>{label}</label>
          <button
            className="flex items-center justify-center gap-1"
            onClick={() => {
              setIsVisible(!isVisible);
            }}
            type="button"
          >
            {icon}
            <span>{buttonText}</span>
          </button>
        </div>
        <input type={activeType} className="border w-full p-2 rounded-md" placeholder={placeholder} id={id} name={id} value={value} onChange={onChange} />
        <label className="text-sm">{req}</label>
      </div>
    );
  } else {
    return (
      <div className="w-full">
        <label>{label}</label>
        <input type={type} className="border w-full p-2 rounded-md" placeholder={placeholder} id={id} name={id} value={value} onChange={onChange} />
      </div>
    );
  }
};

export default FormInput;
