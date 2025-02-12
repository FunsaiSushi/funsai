const NewLogo = ({
  size = 40, // Default size
  color = "#07F", // Default color for the rectangle
  strokeColor = "#fff", // Default color for the stroke
  className = "", // Tailwind or additional CSS classes
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    className={className}
  >
    <g clipPath="url(#a)">
      <rect width={200} height={200} fill={color} rx={60} />
      <path
        fill={strokeColor}
        d="M83.28 165.92H63.4V99.14c0-20.86 15.96-36.4 37.52-36.4 21.42 0 37.52 16.52 37.52 36.4 0 21.7-14.84 36.82-36.4 36.82-7 0-13.58-2.52-18.76-6.44v36.4Zm17.64-48.72c10.22 0 17.64-8.12 17.64-17.92 0-9.8-7.42-17.78-17.64-17.78s-17.64 7.98-17.64 17.78 7.42 17.92 17.64 17.92Z"
      />
      <path
        fill={strokeColor}
        d="M34.08 116.72v19.88h66.78c20.86 0 36.4-15.96 36.4-37.52 0-21.42-16.52-37.52-36.4-37.52-21.7 0-36.82 14.84-36.82 36.4 0 7 2.52 13.58 6.44 18.76h-36.4ZM82.8 99.08c0-10.22 8.12-17.64 17.92-17.64 9.8 0 17.78 7.42 17.78 17.64s-7.98 17.64-17.78 17.64S82.8 109.3 82.8 99.08Z"
      />
      <path
        stroke={strokeColor}
        strokeWidth={20}
        d="M99.816 156C131.195 156 159 130.033 159 98c0-34.327-27.805-58-59.184-58C68.437 40 43 65.968 43 98"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill={strokeColor} d="M0 0h200v200H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default NewLogo;
