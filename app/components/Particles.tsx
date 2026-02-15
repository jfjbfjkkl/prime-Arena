export default function Particles() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
      {[...Array(25)].map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 20}s`,
          }}
        />
      ))}
    </div>
  );
}