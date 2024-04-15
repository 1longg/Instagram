import React from "react";

type Props = {
    className?: string;
    style?: React.CSSProperties;
}

export default function SystemWarning({ className, style }: Props) {
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
      <g id="system/warning">
        <path
          id="Icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 9C11 8.448 11.448 8 12 8C12.552 8 13 8.448 13 9V13C13 13.552 12.552 14 12 14C11.448 14 11 13.552 11 13V9ZM11 16C11 15.448 11.448 15 12 15C12.552 15 13 15.448 13 16C13 16.552 12.552 17 12 17C11.448 17 11 16.552 11 16ZM20.8647 18.353C20.6357 18.758 20.1897 19 19.6717 19H4.3277C3.8097 19 3.3637 18.758 3.1357 18.353C3.0277 18.163 2.8857 17.776 3.1527 17.336L10.8237 4.618C11.2907 3.844 12.7087 3.844 13.1757 4.618L20.8477 17.336C21.1137 17.776 20.9727 18.163 20.8647 18.353ZM22.5607 16.303L14.8887 3.584C14.2897 2.592 13.2097 2 11.9997 2C10.7897 2 9.7097 2.592 9.1117 3.584L1.4397 16.303C0.870699 17.246 0.853699 18.38 1.3937 19.336C1.9727 20.363 3.0977 21 4.3277 21H19.6717C20.9027 21 22.0267 20.363 22.6067 19.336C23.1467 18.38 23.1297 17.246 22.5607 16.303Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
