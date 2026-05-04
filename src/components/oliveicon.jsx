const OliveIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none"
       xmlns="http://www.w3.org/2000/svg" aria-label="Olive mascot">
    {/* Outer olive body */}
    <ellipse cx="18" cy="22" rx="11" ry="13" fill="#3d5a1e" />
    {/* Inner lighter body */}
    <ellipse cx="18" cy="22" rx="7" ry="9" fill="#4a6f25" />
    {/* Left eye */}
    <circle cx="14" cy="19" r="2.5" fill="#2a3e12" />
    <circle cx="14" cy="19" r="1"   fill="white" />
    {/* Right eye */}
    <circle cx="22" cy="19" r="2.5" fill="#2a3e12" />
    <circle cx="22" cy="19" r="1"   fill="white" />
    {/* Smile */}
    <path d="M15 25 Q18 27 21 25" stroke="#2a3e12" strokeWidth="1.5"
          strokeLinecap="round" fill="none" />
    {/* Leaf / stem */}
    <path d="M18 9 Q20 4 25 3 Q22 8 18 9Z" fill="#5a8a2a" />
  </svg>
);

export default OliveIcon;