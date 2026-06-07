import { useState } from 'react';
import './index.css';
import Navbar   from './components/Navbar';
import Footer   from './components/Footer';
import Home     from './components/Home';
import Servicos from './components/Servicos';
import Profissionais from './components/Profissionais';
import Documentacao  from './components/Documentacao';
import FaleConnosco  from './components/FaleConnosco';

export const NAV_LINKS = [
  { label: 'Página inicial',   key: 'home' },
  { label: 'Serviços Prestados', key: 'servicos' },
  { label: 'Profissionais',    key: 'profissionais' },
  { label: 'Documentação',     key: 'documentacao' },
  { label: 'Fale Connosco',    key: 'faleconnosco' },
];

export default function App() {
  const [page, setPage] = useState('home');

  const pages = {
    home:          <Home setPage={setPage} />,
    servicos:      <Servicos />,
    profissionais: <Profissionais />,
    documentacao:  <Documentacao />,
    faleconnosco:  <FaleConnosco />,
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar page={page} setPage={setPage} />
      <main style={{ flex: 1 }}>{pages[page]}</main>
      <Footer setPage={setPage} />
    </div>
  );
}
