import { NAV_LINKS } from '../App';

export default function Footer({ setPage }) {
  return (
    <footer style={{ background: 'var(--navy)', color: 'rgba(255,255,255,0.75)', padding: '40px 2rem 24px', marginTop: 'auto' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="footer-grid" style={{ display: 'grid', gap: 40, marginBottom: 36 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <a href="https://epave.pt/" target="_blank" rel="noopener noreferrer" aria-label="Abrir o site da EPAVE (novo separador)" title="Ir para epave.pt" style={{ display: 'flex' }}>
                <img src="/images/epave-logo-branco.png" alt="EPAVE" style={{ height: 30, width: 'auto', display: 'block' }} />
              </a>
              <span aria-hidden="true" style={{ width: 1, height: 26, background: 'rgba(255,255,255,0.35)' }} />
              <span style={{ fontFamily: 'Google Sans', fontWeight: 700, fontSize: 18, color: '#fff' }}>GAPE</span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 280 }}>
              Gabinete de Apoio à Proximidade Educativa<br />
              Escola Profissional do Alto Ave - EPAVE
            </p>
            <p style={{ fontSize: 12, marginTop: 10, opacity: 0.6 }}>gape@epave.pt · 253 634 811</p>
          </div>

          {/* Nav */}
          <div>
            <div style={{ fontFamily: 'Google Sans', fontWeight: 600, fontSize: 13, color: '#fff', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
              Navegação
            </div>
            {NAV_LINKS.map(({ label, key }) => (
              <div
                key={key}
                onClick={() => setPage(key)}
                style={{ fontSize: 13, marginBottom: 8, cursor: 'pointer', opacity: 0.8 }}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Legal */}
          <div>
            <div style={{ fontFamily: 'Google Sans', fontWeight: 600, fontSize: 13, color: '#fff', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
              Informação
            </div>
            {[
              { label: 'Política de Privacidade', href: 'https://epave.pt/politica-de-privacidade/' },
              { label: 'RGPD',                     href: 'https://epave.pt/politica-de-privacidade/' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', fontSize: 13, marginBottom: 8, opacity: 0.8, color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.opacity = 1}
                onMouseLeave={e => e.target.style.opacity = 0.8}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 18, fontSize: 12, textAlign: 'center', opacity: 0.55 }}>
          © {new Date().getFullYear()} GAPE — Escola Profissional do Alto Ave - EPAVE. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
