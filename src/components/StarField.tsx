const Star = ({ x, y, size }: { x: number; y: number; size: number }) => {
  const animationDelay = -Math.random() * 3;
  const baseOpacity = Math.random() * 0.3 + 0.2;
  const lineLength = size * 0.5;

  return (
    <g>
      <circle
        cx={`${x}%`}
        cy={`${y}%`}
        r={size}
        fill="white"
        className="animate-twinkle"
        style={{
          opacity: baseOpacity,
          animationDelay: `${animationDelay}s`,
          animationDuration: `${2 + Math.random() * 3}s`,
        }}
      />
      <line
        x1={`${x}%`}
        y1={`${y - lineLength}%`}
        x2={`${x}%`}
        y2={`${y + lineLength}%`}
        stroke="white"
        strokeWidth={size / 4}
        opacity={baseOpacity / 4}
        className="animate-twinkle"
        style={{
          animationDelay: `${animationDelay}s`,
          animationDuration: `${2 + Math.random() * 3}s`,
        }}
      />
      <line
        x1={`${x - lineLength}%`}
        y1={`${y}%`}
        x2={`${x + lineLength}%`}
        y2={`${y}%`}
        stroke="white"
        strokeWidth={size / 4}
        opacity={baseOpacity / 4}
        className="animate-twinkle"
        style={{
          animationDelay: `${animationDelay}s`,
          animationDuration: `${2 + Math.random() * 3}s`,
        }}
      />
    </g>
  );
};

export const StarField = () => (
  <svg className="absolute inset-0 w-full h-full">
    {[...Array(100)].map((_, i) => (
      <Star
        key={i}
        x={Math.random() * 100}
        y={Math.random() * 100}
        size={Math.random() * 1.5 + 0.5}
      />
    ))}
  </svg>
);
