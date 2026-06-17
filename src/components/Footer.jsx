import { NAV_LINKS } from '../App';

export default function Footer({ setPage }) {
  return (
    <footer style={{ background: 'var(--navy)', color: 'rgba(255,255,255,0.75)', padding: '40px 2rem 24px', marginTop: 'auto' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 40, marginBottom: 36 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'var(--teal)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Google Sans', fontWeight: 700, fontSize: 15, color: '#fff',
              }}>G</div>
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
            {['Política de Privacidade', 'RGPD', 'Acessibilidade'].map(item => (
              <div key={item} style={{ fontSize: 13, marginBottom: 8, cursor: 'pointer', opacity: 0.8 }}>{item}</div>
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
