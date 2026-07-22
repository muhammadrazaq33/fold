"use client";

import React from "react";

interface SelectOption {
  label: string;
  value: string;
}

interface ThemeSelectProps {
  id?: string;
  name?: string;

  label?: string;
  placeholder?: string;

  required?: boolean;
  disabled?: boolean;

  value?: string;

  options: SelectOption[];

  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;

  error?: boolean;
  errorMessage?: string;

  className?: string;

}

const ThemeSelect = ({
  id,
  name,

  label,
  placeholder = "Select",

  required = false,
  disabled = false,

  value,

  options,

  onChange,
  onBlur,

  error = false,
  errorMessage,

  className = "",
}: ThemeSelectProps) => {
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
            <span className="ml-1 text-[#B32B49]">*</span>
          )}
        </label>
      )}

      {/* Select */}

      <div className="relative">

        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className={`
            w-full

            bg-transparent

            pb-3

            border-0
            border-b-2

            ${
              error
                ? "border-red-500"
                : "border-black"
            }

            outline-none

            appearance-none

             font-manrope
    font-normal
    text-[16px]
    leading-6
cursor-pointer
            ${
              value
                ? "text-black"
                : "text-[#A3A3A3]"
            }

            focus:border-[#B32B49]

            transition-all
            duration-200

            pr-10

            ${
              disabled
                ? "opacity-60 cursor-not-allowed"
                : ""
            }
          `}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Arrow */}

        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="#333333"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Error */}

      {error && errorMessage && (
        <p className="mt-2 text-sm font-medium text-red-500">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default ThemeSelect;