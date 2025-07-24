import React from 'react';

interface DouglasLogoProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
  colors?: string[]; // Array of colors for each part: [DO, UG, LAS, DOUGLAS COLLEGE]
  showFullName?: boolean; // Whether to show "DOUGLAS COLLEGE" text
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xlsm'; // Predefined sizes
}

const DouglasLogo: React.FC<DouglasLogoProps> = ({
  width,
  height,
  className = '',
  color = '#7be3da',
  colors,
  showFullName = true,
  size = 'md'
}) => {
  // Predefined size configurations
  const sizeConfig = {
    sm: { width: 200, height: 100 },
    md: { width: 400, height: 200 },
    lg: { width: 600, height: 300 },
    xl: { width: 800, height: 400 },
    xlsm: { width: 100, height: 50 }
  };

  // Use size config if width/height not explicitly provided
  const finalWidth = width || sizeConfig[size].width;
  const finalHeight = height || sizeConfig[size].height;

  // Extract individual colors or use default
  const doColor = colors?.[0] || color;
  const ugColor = colors?.[1] || color;
  const lasColor = colors?.[2] || color;
  const collegeColor = colors?.[3] || color;

  // Adjust viewBox height based on whether full name is shown
  const viewBoxHeight = showFullName ? 400 : 320;

  return (
    <svg
      width={finalWidth}
      height={finalHeight}
      viewBox={`0 0 800 ${viewBoxHeight}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* DOUGLAS text arranged in stacked format with overlapping */}
      <g>
        {/* DO */}
        <text
          x="50"
          y="120"
          fontFamily="Arial Black, sans-serif"
          fontSize="140"
          fontWeight="900"
          letterSpacing="-15px"
          fill={doColor}
        >
          DO
        </text>
        
        {/* UG (overlapping with DO) */}
        <text
          x="155"
          y="200"
          fontFamily="Arial Black, sans-serif"
          fontSize="140"
          fontWeight="900"
          letterSpacing="-18px"
          fill={ugColor}
        >
          UG
        </text>
        
        {/* LAS (overlapping with UG) */}
        <text
          x="50"
          y="290"
          fontFamily="Arial Black, sans-serif"
          fontSize="140"
          fontWeight="900"
          letterSpacing="-8px"
          fill={lasColor}
        >
          LAS
        </text>
      </g>
      
      {/* DOUGLAS COLLEGE text below - conditionally rendered */}
      {showFullName && (
        <text
          x="50"
          y="340"
          fontFamily="Arial, sans-serif"
          fontSize="32"
          fontWeight="bold"
          letterSpacing="6px"
          fill={collegeColor}
        >
          DOUGLAS COLLEGE
        </text>
      )}
    </svg>
  );
};

export default DouglasLogo;