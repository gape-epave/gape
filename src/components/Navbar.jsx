import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../App';

export default function Navbar({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detecta redimensionamento da janela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fecha o menu ao navegar
  const handleNav = (key) => {
    setPage(key);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
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
          justifyContent: 'space-between',
          height: 64,
        }}>

          {/* Logo / Brand */}
          <button
            onClick={() => handleNav('home')}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 10,
              flexShrink: 0, padding: 0,
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

          {/* Links desktop */}
          {!isMobile && (
            <div style={{ display: 'flex', gap: 2 }}>
              {NAV_LINKS.map(({ label, key }) => (
                <button
                  key={key}
                  onClick={() => handleNav(key)}
                  style={{
                    background: page === key ? 'rgba(255,255,255,0.15)' : 'none',
                    border: 'none',
                    color: '#fff',
                    padding: '8px 14px',
                    borderRadius: 4,
                    fontSize: 14,
                    fontWeight: page === key ? 600 : 400,
                    opacity: page === key ? 1 : 0.85,
                    cursor: 'pointer',
                    transition: 'background .15s, opacity .15s',
                    whiteSpace: 'nowrap',
                    borderBottom: page === key ? '2px solid var(--teal)' : '2px solid transparent',
                  }}
                  onMouseEnter={e => { if (page !== key) e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                  onMouseLeave={e => { if (page !== key) e.currentTarget.style.background = 'none'; }}
                >
                  {label}
                </button>
              ))}
            </div>
          )}

          {/* Botão hamburger mobile */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'center', alignItems: 'center',
                gap: 5, width: 40, height: 40, padding: 4,
              }}
            >
              {/* 3 barras animadas */}
              <span style={{
                display: 'block', width: 24, height: 2,
                background: '#fff', borderRadius: 2,
                transition: 'transform .25s, opacity .25s',
                transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              }} />
              <span style={{
                display: 'block', width: 24, height: 2,
                background: '#fff', borderRadius: 2,
                transition: 'opacity .25s',
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                display: 'block', width: 24, height: 2,
                background: '#fff', borderRadius: 2,
                transition: 'transform .25s, opacity .25s',
                transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }} />
            </button>
          )}
        </div>

        {/* Menu dropdown mobile */}
        {isMobile && (
          <div style={{
            overflow: 'hidden',
            maxHeight: menuOpen ? 400 : 0,
            transition: 'max-height .3s ease',
            background: 'var(--navy)',
            borderTop: menuOpen ? '1px solid rgba(255,255,255,0.1)' : 'none',
          }}>
            <div style={{ padding: '8px 1rem 16px' }}>
              {NAV_LINKS.map(({ label, key }) => (
                <button
                  key={key}
                  onClick={() => handleNav(key)}
                  style={{
                    display: 'block', width: '100%', textAlign: 'left',
                    background: page === key ? 'rgba(255,255,255,0.12)' : 'none',
                    border: 'none',
                    borderLeft: page === key ? '3px solid var(--teal)' : '3px solid transparent',
                    color: '#fff',
                    padding: '12px 16px',
                    borderRadius: 4,
                    fontSize: 15,
                    fontWeight: page === key ? 600 : 400,
                    cursor: 'pointer',
                    marginBottom: 4,
                    transition: 'background .15s',
                  }}
                  onMouseEnter={e => { if (page !== key) e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
                  onMouseLeave={e => { if (page !== key) e.currentTarget.style.background = 'none'; }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Overlay escuro ao abrir o menu */}
      {isMobile && menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.3)',
            zIndex: 99,
          }}
        />
      )}
    </>
  );
}
