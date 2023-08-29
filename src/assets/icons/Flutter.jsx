export function Flutter({ width = 64, height = 64 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
    >
      <g transform="matrix(.061615 0 0 .061615 -1.430818 -1.2754)">
        <defs>
          <path
            id="A"
            d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"
          />
        </defs>
        <clipPath id="B">
          <use xlinkHref="#A" />
        </clipPath>
        <g clipPath="url(#B)">
          <path d="M360.3 779.7L520 939.5 959.4 500H639.9z" fill="#39cefd" />
        </g>
        <defs>
          <path
            id="C"
            d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"
          />
        </defs>
        <clipPath id="D">
          <use xlinkHref="#C" />
        </clipPath>
        <path
          clipPath="url(#D)"
          d="M639.9 20.7h319.5l-679 679.1L120.6 540z"
          fill="#39cefd"
        />
        <defs>
          <path
            id="E"
            d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"
          />
        </defs>
        <clipPath id="F">
          <use xlinkHref="#E" />
        </clipPath>
        <path
          clipPath="url(#F)"
          d="M520 939.5l119.9 119.8h319.5L679.8 779.7z"
          fill="#03569b"
        />
        <defs>
          <path
            id="G"
            d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"
          />
        </defs>
        <clipPath id="H">
          <use xlinkHref="#G" />
        </clipPath>
        <linearGradient
          id="I"
          gradientUnits="userSpaceOnUse"
          x1="566.635"
          y1="970.339"
          x2="685.65"
          y2="851.324"
        >
          <stop offset={0} stopColor="#1a237e" stopOpacity=".4" />
          <stop offset={1} stopColor="#1a237e" stopOpacity={0} />
        </linearGradient>
        <path
          clipPath="url(#H)"
          d="M757 857.4l-77.2-77.7L520 939.5z"
          fill="url(#I)"
        />
        <defs>
          <path
            id="J"
            d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"
          />
        </defs>
        <clipPath id="K">
          <use xlinkHref="#J" />
        </clipPath>
        <g clipPath="url(#K)">
          <path
            d="M360.282 779.645L520.086 619.84 679.9 779.645 520.086 939.45z"
            fill="#16b9fd"
          />
        </g>
        <radialGradient
          id="L"
          cx="7824.659"
          cy="-2855.979"
          r="5082.889"
          gradientTransform="matrix(0.25,0,0,-0.25,-1812,-622.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" stopOpacity=".1" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
        <path
          d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"
          fill="url(#L)"
        />
      </g>
    </svg>
  );
}
