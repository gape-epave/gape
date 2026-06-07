const CARD_LINKS = [
  {
    key: 'profissionais',
    icon: '👥',
    title: 'Quem Somos',
    desc: 'Conheça a equipa multidisciplinar do GAPE e as suas áreas de especialização.',
  },
  {
    key: 'servicos',
    icon: '🎓',
    title: 'Serviços Prestados',
    desc: 'Apoio psicológico, social, pedagógico e de orientação vocacional.',
  },
  {
    key: 'documentacao',
    icon: '📄',
    title: 'Material de Apoio',
    desc: 'Documentos, formulários e recursos úteis para alunos e encarregados.',
  },
];

export default function Home({ setPage }) {
  return (
    <div>
      {/* ── Hero ── */}
      <section style={{
        background: 'var(--navy)',
        color: '#fff',
        padding: '72px 2rem 80px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h1 style={{
            fontFamily: 'Google Sans', fontSize: 40, fontWeight: 700,
            lineHeight: 1.25, marginBottom: 16,
          }}>
            Gabinete de Apoio à<br />Proximidade Educativa - GAPE
          </h1>
          <p style={{ fontSize: 18, opacity: 0.85, lineHeight: 1.7, marginBottom: 36 }}>
            O Gabinete de Apoio à Proximidade Educativa é um espaço de apoio, escuta e acompanhamento destinado 
            a toda a comunidade educativa da EPAVE. 
            Tem como objetivo promover o bem-estar escolar, fortalecer relações positivas e contribuir para um 
            ambiente escolar mais saudável, inclusivo e colaborativo.
          </p>
          <button
            onClick={() => setPage('faleconnosco')}
            style={{
              background: 'var(--teal)', color: '#fff',
              border: 'none', borderRadius: 4,
              padding: '12px 32px', fontSize: 15, fontWeight: 500,
              letterSpacing: 0.3,
              transition: 'background .15s',
            }}
            onMouseEnter={e => e.target.style.background = 'var(--teal-dark)'}
            onMouseLeave={e => e.target.style.background = 'var(--teal)'}
          >
            Fale Connosco
          </button>
        </div>
      </section>

      {/* ── Missão ── */}
      <section style={{ background: 'var(--white)', padding: '56px 2rem', borderTop: '1px solid var(--gray-mid)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Google Sans', fontSize: 28, fontWeight: 600,
            color: 'var(--navy)', marginBottom: 24, textAlign: 'center',
          }}>
            Missão
          </h2>
          <div style={{
            background: 'var(--teal-light)',
            borderLeft: '4px solid var(--teal)',
            borderRadius: 8,
            padding: '28px 32px',
          }}>
            <p style={{
              fontSize: 18, color: 'var(--gray-text)', lineHeight: 1.8, textAlign: 'justify',
            }}>
              A missão do GAPE passa por promover o diálogo, a mediação, o bem-estar e as relações
              positivas em contexto escolar, através de espaços de escuta, apoio e acompanhamento à
              comunidade educativa, contribuindo para um ambiente escolar mais inclusivo e promotor
              do sucesso escolar.
            </p>
          </div>
        </div>
      </section>

      {/* ── Encontre ajuda ── */}
      <section style={{ background: 'var(--off-white)', padding: '56px 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center', fontSize: 24, fontWeight: 500,
            color: 'var(--dark-text)', marginBottom: 36,
          }}>
            Encontre ajuda para os tópicos abaixo
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}>
            {CARD_LINKS.map(({ key, icon, title, desc }) => (
              <button
                key={key}
                onClick={() => setPage(key)}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--gray-mid)',
                  borderRadius: 8,
                  padding: '28px 24px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  boxShadow: 'var(--card-shadow)',
                  transition: 'box-shadow .2s, transform .2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 14 }}>{icon}</div>
                <h3 style={{
                  fontFamily: 'Google Sans', fontSize: 18, fontWeight: 600,
                  color: 'var(--navy)', marginBottom: 10,
                }}>
                  {title}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--gray-text)', lineHeight: 1.6 }}>{desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sobre o GAPE ── */}
      <section style={{ padding: '56px 2rem' }}>
        <div style={{
          maxWidth: 900, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48, alignItems: 'center',
        }}>
          <div style={{
            background: 'var(--teal-light)',
            borderRadius: 12,
            padding: 32,
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 64, marginBottom: 12 }}>🏫</div>
            <div style={{
              fontFamily: 'Google Sans', fontSize: 22, fontWeight: 700,
              color: 'var(--teal-dark)',
            }}>GAPE</div>
            <div style={{ fontSize: 13, color: 'var(--gray-text)', marginTop: 6 }}>
              Escola Profissional do Alto Ave
            </div>
          </div>
          <div>
            <h2 style={{
              fontFamily: 'Google Sans', fontSize: 26, fontWeight: 600,
              color: 'var(--navy)', marginBottom: 16,
            }}>
              Sobre o Gabinete
            </h2>
            <p style={{ fontSize: 15, color: 'var(--gray-text)', lineHeight: 1.8, marginBottom: 16 }}>
              O Gabinete de Apoio à Proximidade Educativa (GAPE) é uma estrutura multidisciplinar
              de apoio à comunidade escolar. Através da sua ação, procura-se identificar,
              sinalizar e intervir nas problemáticas que, de alguma forma, condicionam o acesso
              ao conhecimento em particular e ao desenvolvimento psicossocial em geral.
            </p>
            <p style={{ fontSize: 15, color: 'var(--gray-text)', lineHeight: 1.8 }}>
              A nossa equipa é composta por profissionais especializados em psicologia,
              educação social e apoio pedagógico, prontos a acompanhar alunos e famílias
              ao longo do seu percurso escolar.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
