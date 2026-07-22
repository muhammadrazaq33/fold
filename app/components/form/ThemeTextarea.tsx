"use client";

import React, { forwardRef } from "react";

interface ThemeTextareaProps {
  id?: string;
  name?: string;

  label?: string;
  placeholder?: string;

  value?: string;

  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;

  required?: boolean;
  disabled?: boolean;

  rows?: number;
  maxLength?: number;

  error?: boolean;
  errorMessage?: string;

  className?: string;
}

const ThemeTextarea = forwardRef<
  HTMLTextAreaElement,
  ThemeTextareaProps
>(
  (
    {
      id,
      name,

      label,
      placeholder,

      value,

      onChange,
      onBlur,

      required = false,
      disabled = false,

      rows = 4,

      maxLength,

      error = false,
      errorMessage,

      className = "",
    },
    ref,
  ) => {
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

        {/* Textarea */}
        <textarea
          ref={ref}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          rows={rows}
          maxLength={maxLength}
          disabled={disabled}
          className={`
            w-full

            bg-transparent

            resize-none

            pb-3

            border-0
            border-b-2

            ${
              error
                ? "border-red-500"
                : "border-black"
            }

            outline-none

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

            focus:border-[#B32B49]

            transition-all
            duration-200

            ${
              disabled
                ? "opacity-60 cursor-not-allowed"
                : ""
            }

            ${className}
          `}
        />

        {/* Error */}
        {error && errorMessage && (
          <p className="mt-2 text-sm font-medium text-red-500">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

ThemeTextarea.displayName = "ThemeTextarea";

export default ThemeTextarea;