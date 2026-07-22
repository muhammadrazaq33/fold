"use client";

import React, { forwardRef, useMemo, useState } from "react";

export enum InputType {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
  NUMBER = "number",
  TEL = "tel",
}

interface ThemeInputProps {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  type?: InputType | string;

  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;

  required?: boolean;
  disabled?: boolean;

  error?: boolean;
  errorMessage?: string;

  icon?: React.ReactNode;

  className?: string;

  autoComplete?: string;

  maxLength?: number;
}

const ThemeInput = forwardRef<HTMLInputElement, ThemeInputProps>(
  (
    {
      id,
      name,
      label,
      placeholder,
      type = InputType.TEXT,

      value,
      onChange,
      onBlur,

      required = false,
      disabled = false,

      error = false,
      errorMessage,

      icon,

      className = "",

      autoComplete,

      maxLength,
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const normalizedType = useMemo(
      () => String(type).toLowerCase(),
      [type],
    );

    const isPassword = normalizedType === "password";

    const inputType = isPassword
      ? showPassword
        ? "text"
        : "password"
      : normalizedType;

    return (
      <div className={`w-full ${className}`}>
        {/* Label */}

        {label && (
          <label
            htmlFor={id}
            className="block mb-2 leading-7 text-black font-manrope font-semibold text-[18px]"
          >
            {label}

            {required && (
              <span className="text-[#b32b49] ml-1">*</span>
            )}
          </label>
        )}

        {/* Input */}

        <div className="relative">

          {/* Left Icon */}

          {icon && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            id={id}
            name={name}
            type={inputType}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            autoComplete={autoComplete}
            maxLength={maxLength}
            placeholder={placeholder}
            className={`
              w-full
              bg-transparent

              text-[22px]
              font-normal
              leading-[160%]
              font-montserrat
              text-black

              placeholder:font-manrope
              placeholder:font-normal
              placeholder:text-[16px]
              placeholder:leading-6
              placeholder:text-neutral-400

              pb-3

              outline-none

              border-0
              border-b-2

              ${
                error
                  ? "border-red-500"
                  : "border-black"
              }

              focus:border-[#B32B49]

              transition-all
              duration-200

              ${icon ? "pl-14" : "pl-0"}

              ${isPassword ? "pr-12" : ""}

              ${
                disabled
                  ? "opacity-60 cursor-not-allowed"
                  : ""
              }
            `}
          />
        </div>

        {/* Error */}

        {error && errorMessage && (
          <p className="mt-2 text-sm text-red-500 font-medium">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

ThemeInput.displayName = "ThemeInput";

export default ThemeInput;