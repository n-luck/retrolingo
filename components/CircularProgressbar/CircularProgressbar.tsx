import React from "react";

type Props = {
  value: number;
  strokeWidth?: number;
  sqSize?: number;
};

export const CircularProgressbar = ({
  value,
  strokeWidth = 10,
  sqSize = 100,
}: Props) => {
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * (value || 0)) / 100;

  return (
    <>
      <svg width={sqSize} height={sqSize} viewBox={viewBox}>
        <circle
          className="fill-none stroke-gray-200"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />

        <circle
          className="fill-none stroke-green-400 transition-all delay-200 ease-in"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeLinecap="round"
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
      </svg>
    </>
  );
};
