import React from 'react';

    interface LogoProps {
      className?: string;
      textClassName?: string;
      iconClassName?: string;
      showTagline?: boolean;
      size?: 'sm' | 'md' | 'lg' | 'xl';
    }

    const Logo: React.FC<LogoProps> = ({
      className = '',
      textClassName = '',
      iconClassName = '',
      showTagline = false,
      size = 'md'
    }) => {

      // Responsive size configurations that maintain design integrity
      const sizeConfig = {
        sm: {
          circle: 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8',
          circleText: 'text-xs sm:text-sm md:text-base',
          brandName: 'text-sm sm:text-base md:text-lg lg:text-xl',
          tagline: 'text-[10px] sm:text-xs md:text-sm',
          spacing: 'mt-1' // Changed to mt for vertical spacing
        },
        md: {
          circle: 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14',
          circleText: 'text-sm sm:text-base md:text-lg lg:text-xl',
          brandName: 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl',
          tagline: 'text-xs sm:text-sm md:text-base lg:text-lg',
          spacing: 'mt-1.5' // Changed to mt for vertical spacing
        },
        lg: {
          circle: 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18',
          circleText: 'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl',
          brandName: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl',
          tagline: 'text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl',
          spacing: 'mt-2' // Changed to mt for vertical spacing
        },
        xl: {
          circle: 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24',
          circleText: 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl',
          brandName: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl',
          tagline: 'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl',
          spacing: 'mt-2.5' // Changed to mt for vertical spacing
        }
      };

      const config = sizeConfig[size];

      return (
        <a href="#" className={`flex flex-col items-center group transition-all duration-300 ${className}`}>
          {/* Brand Name with Integrated Circle for 'H' */}
          <div className="flex items-center">
            <span className={`${config.brandName} font-serif font-light text-bandhvi-off-white tracking-widest uppercase leading-none ${textClassName}`}>
              Band
            </span>
            <div className={`${config.circle} bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 flex-shrink-0 mx-1 ${iconClassName}`}>
              <span className={`${config.circleText} font-serif font-light text-white tracking-wider leading-none`}>
                H
              </span>
            </div>
            <span className={`${config.brandName} font-serif font-light text-bandhvi-off-white tracking-widest uppercase leading-none ${textClassName}`}>
              vi
            </span>
          </div>

          {/* Tagline */}
          {showTagline && (
            <p className={`${config.tagline} font-sans font-light text-yellow-500 tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] uppercase opacity-80 ${config.spacing} whitespace-nowrap`}>
              Your Celebration, Your Confidence
            </p>
          )}
        </a>
      );
    };

    export default Logo;
