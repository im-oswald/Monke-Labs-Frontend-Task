import { SVGProps } from "react";

export default function PlusCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 24H32M24 32V16M24 44C35 44 44 35 44 24C44 13 35 4 24 4C13 4 4 13 4 24C4 35 13 44 24 44Z"
        stroke="#E74C1B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
