import { NAV_LINKS } from '../App';

export default function Navbar({ page, setPage }) {
  return (
    <nav style={{
      background: 'var(--navy)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        height: 64,
      }}>
        {/* Logo / Brand */}
        <button
          onClick={() => setPage('home')}
          style={{
            background: 'none', border: 'none',
            display: 'flex', alignItems: 'center', gap: 10,
            marginRight: 24, flexShrink: 0,
          }}
        >
          <div style={{
            width: 38, height: 38,
            background: 'var(--teal)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Google Sans', fontWeight: 700, fontSize: 16, color: '#fff',
            letterSpacing: '-0.5px',
          }}>
            G
          </div>
          <span style={{
            fontFamily: 'Google Sans', fontWeight: 700,
            fontSize: 20, color: '#fff', letterSpacing: 0.5,
          }}>
            GAPE
          </span>
        </button>

        {/* Nav links */}
        <div style={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          {NAV_LINKS.map(({ label, key }) => (
            <button
              key={key}
              onClick={() => setPage(key)}
              style={{
                background: page === key ? 'rgba(255,255,255,0.15)' : 'none',
                border: 'none',
                color: '#fff',
                padding: '8px 14px',
                borderRadius: 4,
                fontSize: 14,
                fontWeight: page === key ? 500 : 400,
                opacity: page === key ? 1 : 0.85,
                transition: 'background .15s, opacity .15s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { if (page !== key) e.target.style.background = 'rgba(255,255,255,0.08)'; }}
              onMouseLeave={e => { if (page !== key) e.target.style.background = 'none'; }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
