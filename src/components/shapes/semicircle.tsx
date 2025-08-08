interface SemicircleProps {
  size?: number;
  className?: string;
  fill?: string;
}

export default function Semicircle({
  size = 100,
  className = "",
  fill = "currentColor",
}: SemicircleProps) {
  return (
    <svg
      width={size}
      height={size / 2}
      viewBox={`0 0 ${size} ${size / 2}`}
      className={className}
    >
      <path
        d={`M 0 ${size / 2} A ${size / 2} ${size / 2} 0 0 1 ${size} ${size / 2} Z`}
        fill={fill}
      />
    </svg>
  );
}
