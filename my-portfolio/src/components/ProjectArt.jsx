// Original illustrated thumbnails for the featured project cards.
const frame = (id, children) => (
  <svg className="project-art" viewBox="0 0 120 152" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <radialGradient id={`${id}-bg`} cx="50%" cy="45%" r="75%">
        <stop offset="0" stopColor="#16407e" />
        <stop offset="1" stopColor="#071329" />
      </radialGradient>
      <linearGradient id={`${id}-accent`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#5ec8ff" />
        <stop offset="1" stopColor="#1f6fe8" />
      </linearGradient>
    </defs>
    <rect width="120" height="152" fill={`url(#${id}-bg)`} />
    <g stroke="#3a7bd5" strokeOpacity=".18">
      <path d="M0 40h120M0 80h120M0 120h120M30 0v152M60 0v152M90 0v152" />
    </g>
    {children}
  </svg>
)

const art = {
  code: () => frame('code', (
    <g>
      <rect x="16" y="40" width="88" height="58" rx="5" fill="#081a38" stroke="url(#code-accent)" strokeWidth="2.5" />
      <text x="60" y="78" textAnchor="middle" fontFamily="monospace" fontWeight="700" fontSize="26" fill="url(#code-accent)">&lt;/&gt;</text>
      <path d="M8 104h104l-8 10H16z" fill="#0d2a57" stroke="#3a8cf0" strokeWidth="1.5" />
      <rect x="44" y="106" width="32" height="3" rx="1.5" fill="#5ec8ff" opacity=".7" />
    </g>
  )),
  calendar: () => frame('cal', (
    <g>
      <rect x="18" y="34" width="84" height="82" rx="9" fill="#0a1f44" stroke="url(#cal-accent)" strokeWidth="2.5" />
      <path d="M18 56h84" stroke="url(#cal-accent)" strokeWidth="2.5" />
      <rect x="18" y="34" width="84" height="22" rx="9" fill="#1b5fcc" opacity=".55" />
      <path d="M38 28v14M82 28v14" stroke="#9fd8ff" strokeWidth="3.5" strokeLinecap="round" />
      <g fill="#5ec8ff" opacity=".75">
        <rect x="28" y="64" width="12" height="10" rx="2" /><rect x="46" y="64" width="12" height="10" rx="2" /><rect x="64" y="64" width="12" height="10" rx="2" /><rect x="82" y="64" width="12" height="10" rx="2" />
        <rect x="28" y="80" width="12" height="10" rx="2" /><rect x="64" y="80" width="12" height="10" rx="2" /><rect x="82" y="80" width="12" height="10" rx="2" />
        <rect x="28" y="96" width="12" height="10" rx="2" /><rect x="46" y="96" width="12" height="10" rx="2" />
      </g>
      <rect x="46" y="80" width="12" height="10" rx="2" fill="#fff" />
    </g>
  )),
  shield: () => frame('shd', (
    <g>
      <path d="M60 28 94 40v32c0 24-15 38-34 48C41 110 26 96 26 72V40z" fill="#0b2554" stroke="url(#shd-accent)" strokeWidth="3" />
      <path d="M60 38 84 47v25c0 17-10 28-24 36-14-8-24-19-24-36V47z" fill="#1b5fcc" opacity=".35" />
      <rect x="47" y="64" width="26" height="22" rx="4" fill="#cfeaff" />
      <path d="M52 64v-6a8 8 0 0 1 16 0v6" fill="none" stroke="#cfeaff" strokeWidth="4" />
      <circle cx="60" cy="74" r="3" fill="#0b2554" /><path d="M60 75v6" stroke="#0b2554" strokeWidth="2.5" />
    </g>
  )),
  chart: () => frame('cht', (
    <g>
      <rect x="14" y="36" width="92" height="66" rx="5" fill="#081a38" stroke="url(#cht-accent)" strokeWidth="2.5" />
      <g fill="url(#cht-accent)">
        <rect x="26" y="74" width="9" height="20" rx="2" /><rect x="40" y="62" width="9" height="32" rx="2" /><rect x="54" y="68" width="9" height="26" rx="2" /><rect x="68" y="52" width="9" height="42" rx="2" /><rect x="82" y="58" width="9" height="36" rx="2" />
      </g>
      <path d="M26 56 44 48l14 6 18-12 16 4" fill="none" stroke="#9fe0ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M52 102h16l4 10H48z" fill="#0d2a57" stroke="#3a8cf0" strokeWidth="1.5" />
    </g>
  )),
}

export default function ProjectArt({ name }) {
  const render = art[name]
  return render ? render() : null
}
