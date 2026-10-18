import React, { useState } from 'react';

interface AvatarGraphicProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
}

export const AvatarGraphic: React.FC<AvatarGraphicProps> = ({
  className = '',
  src,
  alt = 'Abu Raihan',
  size = 'md',
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  // If a valid image src is passed and hasn't failed, render it
  if (src && !imageFailed) {
    return (
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setImageFailed(true)}
        className={`object-cover object-top ${className}`}
      />
    );
  }

  // High-fidelity vector artistic portrait matching Abu Raihan's uploaded photo:
  // Navy blue blazer, open-collar white shirt, styled short dark hair, goatee, confident expression
  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#2A2B36] to-[#12131A] ${className}`}>
      <svg
        viewBox="0 0 400 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
      >
        <defs>
          <linearGradient id="warmLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA675" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#DE4A20" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="blazerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E2838" />
            <stop offset="100%" stopColor="#101724" />
          </linearGradient>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C68B59" />
            <stop offset="100%" stopColor="#A46E42" />
          </linearGradient>
          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1C1817" />
            <stop offset="100%" stopColor="#0B0909" />
          </linearGradient>
        </defs>

        {/* Ambient warm glow behind */}
        <circle cx="200" cy="180" r="140" fill="url(#warmLight)" />

        {/* Shoulders / Body - Navy Suit Blazer */}
        <path
          d="M60 480C60 380 110 330 150 320L170 370L200 480H60Z"
          fill="url(#blazerGrad)"
        />
        <path
          d="M340 480C340 380 290 330 250 320L230 370L200 480H340Z"
          fill="url(#blazerGrad)"
        />

        {/* White Dress Shirt V-neck / Collar */}
        <path
          d="M165 320L200 410L235 320C210 335 190 335 165 320Z"
          fill="#F8FAFC"
        />
        {/* Collar wings */}
        <path d="M165 320L190 360L180 325Z" fill="#E2E8F0" />
        <path d="M235 320L210 360L220 325Z" fill="#E2E8F0" />

        {/* Blazer Lapels */}
        <path
          d="M140 330L185 430L165 480H120L100 370Z"
          fill="#161E2E"
        />
        <path
          d="M260 330L215 430L235 480H280L300 370Z"
          fill="#161E2E"
        />

        {/* Neck */}
        <path
          d="M172 230C172 280 178 330 200 330C222 330 228 280 228 230Z"
          fill="#9E683D"
        />

        {/* Head / Jaw */}
        <path
          d="M145 160C145 250 165 290 200 290C235 290 255 250 255 160C255 100 235 85 200 85C165 85 145 100 145 160Z"
          fill="url(#skinGrad)"
        />

        {/* Ears */}
        <ellipse cx="145" cy="180" rx="8" ry="18" fill="#B37849" />
        <ellipse cx="255" cy="180" rx="8" ry="18" fill="#B37849" />

        {/* Eyebrows & Eyes */}
        <path d="M162 152Q175 148 188 154" stroke="#1F1713" strokeWidth="3" strokeLinecap="round" />
        <path d="M212 154Q225 148 238 152" stroke="#1F1713" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="175" cy="165" rx="5" ry="4" fill="#1A1513" />
        <ellipse cx="225" cy="165" rx="5" ry="4" fill="#1A1513" />
        <circle cx="176" cy="164" r="1.5" fill="#FFFFFF" />
        <circle cx="226" cy="164" r="1.5" fill="#FFFFFF" />

        {/* Nose */}
        <path
          d="M200 162V195L208 198H192"
          stroke="#905D34"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Mustache & Goatee */}
        <path
          d="M185 212C193 208 207 208 215 212"
          stroke="#221C19"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M194 225C197 227 203 227 206 225"
          stroke="#B54A45"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <ellipse cx="200" cy="245" rx="7" ry="5" fill="#221C19" opacity="0.8" />

        {/* Dark Styled Hair */}
        <path
          d="M140 150C135 110 150 70 200 65C240 60 262 90 260 135C268 115 262 80 235 60C205 45 165 55 145 90C135 110 138 135 140 150Z"
          fill="url(#hairGrad)"
        />
        <path
          d="M145 120C155 75 190 70 215 72C245 74 258 95 255 125C250 95 230 82 205 82C170 82 152 98 145 120Z"
          fill="#2C2420"
        />
      </svg>
    </div>
  );
};
