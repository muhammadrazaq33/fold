import React from 'react'

type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const RightArrow = ({width=15, height=12, color}: Props) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 15 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.4612 5.78991H0.641113M8.29062 10.939L13.4612 5.78991L8.29062 0.641006"
          stroke={color}
          strokeWidth="1.28201"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default RightArrow
