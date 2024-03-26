import React from 'react'
import { Input } from 'antd'

type Props = {
  value?: string;
  onChange?: (e: any) => void
  placeholder?: string
  className?: string
  type?: string
  name?: string
  id?: string
  disabled?: boolean
  required?: boolean
  readOnly?: boolean
  height?: number
  width?: string
  rows?: number
  prefix?: string;
  label?: String;
  isRequired?: boolean;
  errorText?: string;
}

const {TextArea} = Input

const InputArea = ({
  value,
  onChange,
  placeholder,
  className,
  type,
  name,
  id,
  disabled,
  required,
  readOnly,
  height,
  width,
  prefix,
  label,
  isRequired,
  errorText,
  ...args
}: Props) => {
  return (
    <>
      {label && (
        <label className="text-[#333333] opacity-70  font-semibold text-[14px]" htmlFor="">
          {label}{" "}
          {isRequired && <span className="text-red-500 font-bold">*</span>}
        </label>
      )}

      <TextArea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`rounded-[8px] h-[40px] px-3 py-2 ${className} ${disabled ? "cursor-not-allowed" : ""
          }`}
        name={name}
        id={id}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        prefix={prefix}
        {...args}
      />

      {errorText && <span className="text-red-500 text-sm">{errorText}</span>}
    </>
  );
};

export default InputArea