import React from "react";

type Props = {
    className?: string;
    style?: React.CSSProperties;
}

export default function SystemInfo({ className, style }: Props) {
  return (
    <svg
      className={className}
      style={style}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8C13 8.552 12.552 9 12 9C11.448 9 11 8.552 11 8ZM11 11C11 10.448 11.448 10 12 10C12.552 10 13 10.448 13 11V16C13 16.552 12.552 17 12 17C11.448 17 11 16.552 11 16V11ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.522 22 22 17.523 22 12C22 6.477 17.522 2 12 2Z"
        fill="currentColor"
      />
      <mask
        id="mask0_6_45"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="20"
        height="20"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8C13 8.552 12.552 9 12 9C11.448 9 11 8.552 11 8ZM11 11C11 10.448 11.448 10 12 10C12.552 10 13 10.448 13 11V16C13 16.552 12.552 17 12 17C11.448 17 11 16.552 11 16V11ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.522 22 22 17.523 22 12C22 6.477 17.522 2 12 2Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_6_45)"></g>
    </svg>
  );
}