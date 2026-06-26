import { useState, useEffect } from 'react';
import './index.css';
import Navbar        from './components/Navbar';
import Footer        from './components/Footer';
import Home          from './components/Home';
import Servicos      from './components/Servicos';
import Profissionais from './components/Profissionais';
import Documentacao  from './components/Documentacao';
import FaleConnosco  from './components/FaleConnosco';
// Descomenta quando criares o componente Historico:
// import Historico  from './components/Historico';

export const NAV_LINKS = [
  { label: 'Página Inicial',     key: 'home' },
  { label: 'Serviços',           key: 'servicos' },
  { label: 'Profissionais',      key: 'profissionais' },
  { label: 'Documentação',       key: 'documentacao' },
  { label: 'Fale Connosco',      key: 'faleconnosco' },
  // Descomenta quando criares o componente Historico:
  // { label: 'História',         key: 'historico' },
];

export default function App() {
  const [page, setPage] = useState('home');

  // Scroll ao topo sempre que muda de página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const pages = {
    home:          <Home setPage={setPage} />,
    servicos:      <Servicos />,
    profissionais: <Profissionais setPage={setPage} />,
    documentacao:  <Documentacao />,
    faleconnosco:  <FaleConnosco />,
    // historico:  <Historico />,
  };

  // Página 404 para rotas inválidas
  const currentPage = pages[page] ?? (
    <div style={{
      minHeight: '60vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '2rem', textAlign: 'center',
    }}>
      <div style={{ fontSize: 64, marginBottom: 16 }}>404</div>
      <h2 style={{ fontFamily: 'Google Sans', fontSize: 24, color: 'var(--navy)', marginBottom: 12 }}>
        Página não encontrada
      </h2>
      <p style={{ color: 'var(--gray-text)', marginBottom: 24 }}>
        A página que procura não existe.
      </p>
      <button
        onClick={() => setPage('home')}
        style={{
          background: 'var(--teal)', color: '#fff',
          border: 'none', borderRadius: 4,
          padding: '11px 28px', fontSize: 14,
          fontWeight: 500, cursor: 'pointer',
        }}
      >
        Voltar ao início
      </button>
    </div>
  );

  return (
    <>
      {/* Estilos globais de responsividade */}
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        body {
          margin: 0;
          -webkit-text-size-adjust: 100%;
        }

        img, video {
          max-width: 100%;
          height: auto;
        }

        /* Grids responsivos usados nos componentes */
        .grid-2col {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 48px;
        }

        .grid-3col {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .grid-auto {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        /* Mobile: ecrãs até 767px */
        @media (max-width: 767px) {
          .grid-2col {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .grid-3col {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          section {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          h1 { font-size: 26px !important; }
          h2 { font-size: 20px !important; }
        }

        /* Tablet: ecrãs de 768px a 1023px */
        @media (min-width: 768px) and (max-width: 1023px) {
          .grid-3col {
            grid-template-columns: repeat(2, 1fr);
          }
          .grid-2col {
            gap: 32px;
          }
        }
      `}</style>

      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar page={page} setPage={setPage} />
        <main style={{ flex: 1 }}>{currentPage}</main>
        <Footer setPage={setPage} />
      </div>
    </>
  );
}
