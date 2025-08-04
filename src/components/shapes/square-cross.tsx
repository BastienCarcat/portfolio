interface SquareCrossProps {
  size?: number;
  className?: string;
  stroke?: string;
}

export default function SquareCross({
  size = 100,
  className = "",
  stroke = "currentColor",
}: SquareCrossProps) {
  const scale = size / 100;
  const center = 50;

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <path
        d="M 50,20 L 80,50 L 50,80 L 20,50 Z"
        fill="none"
        stroke={stroke}
        strokeWidth={3 * scale}
      />
      <line
        x1="20"
        y1="50"
        x2="80"
        y2="50"
        stroke={stroke}
        strokeWidth={2 * scale}
      />
      {/* <line
        x1="50"
        y1="20"
        x2="50"
        y2="80"
        stroke={stroke}
        strokeWidth={2 * scale}
      /> */}
    </svg>
  );
}
