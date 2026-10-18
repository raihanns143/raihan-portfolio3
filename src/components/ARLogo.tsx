import React from 'react';

interface ARLogoProps {
  className?: string;
  size?: number;
}

export const ARLogo: React.FC<ARLogoProps> = ({ className = '', size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background shape / stylized A & R */}
      <path
        d="M20 80L45 20L62 60L52 60L45 42L32 75H20Z"
        fill="currentColor"
      />
      <path
        d="M48 20H72C82 20 88 26 88 36C88 44 83 50 74 52L88 80H74L62 55H50V80H38V20H48ZM50 30V45H68C73 45 76 42 76 37C76 33 73 30 68 30H50Z"
        fill="currentColor"
      />
      {/* Dynamic Red Swoosh from uploaded image */}
      <path
        d="M22 78C35 68 55 52 75 42C68 47 48 64 28 82L22 78Z"
        fill="#DE4A20"
      />
    </svg>
  );
};
