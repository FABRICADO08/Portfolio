// Simplified, self-hosted technology marks (no external requests).
const icons = {
  mendix: (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="7" fill="#1f7ae8" />
      <text x="20" y="26" textAnchor="middle" fontFamily="Poppins, Inter, sans-serif" fontWeight="700" fontSize="17" fill="#fff">mx</text>
    </svg>
  ),
  react: (
    <svg viewBox="-14 -14 28 28" aria-hidden="true">
      <g fill="none" stroke="#61dafb" strokeWidth="1.3">
        <ellipse rx="11.5" ry="4.6" />
        <ellipse rx="11.5" ry="4.6" transform="rotate(60)" />
        <ellipse rx="11.5" ry="4.6" transform="rotate(120)" />
      </g>
      <circle r="2.1" fill="#61dafb" />
    </svg>
  ),
  java: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M13 3c3 3-3 4.5-.5 8M18 4c2.5 2.5-2.5 4-.5 7" fill="none" stroke="#f0883e" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 14h16v6a7 7 0 0 1-7 7h-2a7 7 0 0 1-7-7z" fill="#e8553a" />
      <path d="M22 15.5h2a3 3 0 0 1 0 6h-2.4" fill="none" stroke="#f0883e" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 28.5h14" stroke="#4a9be8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  azure: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <defs>
        <linearGradient id="az-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#35b4ff" />
          <stop offset="1" stopColor="#0a66e0" />
        </linearGradient>
      </defs>
      <path d="M13.5 3 4 27h7.2l2.6-6.6 7.4 6.6H28L19.3 9.4z" fill="url(#az-a)" />
      <path d="M13.5 3 4 27h7.2L19.6 5.6z" fill="#7fd1ff" opacity=".85" />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path id="py-half" d="M15 3C9.5 3 9 5.2 9 7v3h7v1H7c-2.5 0-4 2-4 5s1.5 5 4 5h2v-3.4c0-2 1.5-3.6 3.5-3.6h6c1.5 0 2.5-1 2.5-2.5V7c0-2-2-4-5-4z" fill="#3b78b4" />
      <circle cx="12.5" cy="6.6" r="1.1" fill="#fff" />
      <use href="#py-half" transform="rotate(180 16 16)" fill="#ffd43b" style={{ fill: '#ffd43b' }} />
      <circle cx="19.5" cy="25.4" r="1.1" fill="#3b4a5a" />
    </svg>
  ),
  power: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <g fill="none" strokeLinecap="round" strokeWidth="3">
        <path d="M6 22c-2-5 1-10 6-10 4 0 5 3 7 5s5 2 7-1" stroke="#1ec8a5" />
        <path d="M6 12c2-5 8-6 11-3" stroke="#13a38a" opacity=".9" />
        <path d="M26 20c-2 5-8 6-11 3" stroke="#13a38a" opacity=".9" />
      </g>
      <circle cx="6" cy="22" r="2" fill="#1ec8a5" />
      <circle cx="26" cy="16" r="2" fill="#1ec8a5" />
    </svg>
  ),
  agile: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <g fill="none" stroke="#ffc928" strokeWidth="2.4" strokeLinecap="round">
        <path d="M16 4a12 12 0 0 1 11.4 8.3" />
        <path d="M16 28A12 12 0 0 1 4.6 19.7" />
      </g>
      <path d="m29 8.5-.3 5.2-5-1.2z" fill="#ffc928" />
      <path d="m3 23.5.3-5.2 5 1.2z" fill="#ffc928" />
      <circle cx="16" cy="12" r="2.2" fill="#ffc928" />
      <circle cx="10.5" cy="20" r="2.2" fill="#ffc928" />
      <circle cx="21.5" cy="20" r="2.2" fill="#ffc928" />
    </svg>
  ),
}

export default function TechIcon({ name }) {
  return <span className="tech-icon">{icons[name] || null}</span>
}
