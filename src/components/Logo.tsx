import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'horizontal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  inverted?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  inverted = true, // default for dark theme (white text, red accent)
}) => {
  const textColor = inverted ? '#ffffff' : '#111111';
  const subtextColor = inverted ? 'rgba(255, 255, 255, 0.7)' : '#555555';
  const dividerColor = inverted ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.2)';
  const primaryColor = '#FF2E2E'; // Signature UNB Red

  if (variant === 'mark') {
    const sizeMap = {
      sm: 'w-7 h-7',
      md: 'w-10 h-10',
      lg: 'w-14 h-14',
      xl: 'w-20 h-20',
    };

    return (
      <div className={`inline-flex items-center justify-center ${sizeMap[size]} ${className}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer Stylized U shape */}
          <path
            d="M20 20 C20 16 23 13 27 13 L38 13 C42 13 45 16 45 20 L45 52 C45 61 52 68 61 68 C70 68 77 61 77 52 L77 20 C77 16 80 13 84 13 L95 13 C99 13 102 16 102 20 L102 54 C102 76 84 94 61 94 C38 94 20 76 20 54 Z"
            fill={textColor}
            transform="translate(-11, -3)"
          />
          {/* Inner Red Geometric Arrow / Home Marker */}
          <path
            d="M42 28 L66 42 L66 62 L50 54 L42 62 Z"
            fill={primaryColor}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        <div className="w-9 h-9 flex-shrink-0">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Outer Stylized U */}
            <path
              d="M22 18 C22 14 25 11 29 11 L39 11 C43 11 46 14 46 18 L46 52 C46 61 53 67 61 67 C69 67 76 61 76 52 L76 18 C76 14 79 11 83 11 L93 11 C97 11 100 14 100 18 L100 54 C100 75 83 91 61 91 C39 91 22 75 22 54 Z"
              fill={textColor}
              transform="translate(-11, -1)"
            />
            {/* Inner Red Geometric Polygon */}
            <path
              d="M42 27 L66 41 L66 61 L50 53 L42 61 Z"
              fill={primaryColor}
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <span
            className="font-black text-xl tracking-tight leading-none uppercase"
            style={{ color: textColor }}
          >
            UNB<span style={{ color: primaryColor }}>.</span>
          </span>
          <span
            className="text-[9px] font-mono uppercase tracking-[0.35em] leading-none mt-1 font-bold"
            style={{ color: subtextColor }}
          >
            MEDIA IND
          </span>
        </div>
      </div>
    );
  }

  // Full Stacked Logo (Matching exact uploaded image)
  return (
    <div className={`inline-flex flex-col items-center text-center ${className}`}>
      {/* Icon Mark */}
      <div className="w-14 h-14 mb-2">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Stylized U */}
          <path
            d="M22 18 C22 14 25 11 29 11 L39 11 C43 11 46 14 46 18 L46 52 C46 61 53 67 61 67 C69 67 76 61 76 52 L76 18 C76 14 79 11 83 11 L93 11 C97 11 100 14 100 18 L100 54 C100 75 83 91 61 91 C39 91 22 75 22 54 Z"
            fill={textColor}
            transform="translate(-11, -1)"
          />
          {/* Inner Red Geometric Marker */}
          <path
            d="M42 27 L66 41 L66 61 L50 53 L42 61 Z"
            fill={primaryColor}
          />
        </svg>
      </div>

      {/* Thin Horizontal Divider */}
      <div
        className="w-20 h-[1.5px] mb-2"
        style={{ backgroundColor: dividerColor }}
      />

      {/* Brand Text */}
      <span
        className="font-black text-2xl tracking-normal leading-none lowercase"
        style={{ color: textColor }}
      >
        unb
      </span>
      <span
        className="text-[10px] font-sans uppercase tracking-[0.45em] leading-none mt-1 font-medium"
        style={{ color: subtextColor }}
      >
        MEDIA IND
      </span>
    </div>
  );
};
