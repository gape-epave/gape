const SERVICOS = [
  {
    icon: '🧠',
    title: 'Apoio Psicológico',
    desc: 'Acompanhamento individual a alunos em situação de vulnerabilidade emocional, dificuldades de aprendizagem ou necessidade de orientação.',
    items: ['Consultas individuais', 'Avaliação psicológica', 'Orientação vocacional', 'Gestão de ansiedade e stress'],
  },
  {
    icon: '🤝',
    title: 'Apoio Social',
    desc: 'Intervenção junto de alunos e famílias em situação de risco ou carência socioeconómica.',
    items: ['Diagnóstico social', 'Candidatura a apoios', 'Articulação com entidades externas', 'Acompanhamento familiar'],
  },
  {
    icon: '📚',
    title: 'Apoio Pedagógico',
    desc: 'Estratégias e recursos para superar dificuldades académicas e melhorar o desempenho escolar.',
    items: ['Planos de recuperação', 'Técnicas de estudo', 'Apoio a NEE', 'Tutoria entre pares'],
  },
  {
    icon: '🎯',
    title: 'Orientação Vocacional',
    desc: 'Exploração de interesses, aptidões e oportunidades para apoiar a tomada de decisão sobre o futuro.',
    items: ['Testes de aptidão', 'Exploração de carreiras', 'Visitas a entidades', 'Sessões de grupo'],
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Apoio à Família',
    desc: 'Envolvimento e capacitação das famílias no acompanhamento do percurso escolar dos educandos.',
    items: ['Atendimento a EE', 'Sessões de parentalidade', 'Mediação escola-família', 'Encaminhamentos'],
  },
  {
    icon: '⚠️',
    title: 'Prevenção e Sinalização',
    desc: 'Identificação precoce de situações de risco e articulação com os serviços competentes.',
    items: ['Sinalização a CPCJ', 'Prevenção do abandono', 'Programas de prevenção', 'Acompanhamento de casos'],
  },
];

export default function Servicos() {
  return (
    <div>
      {/* Page header */}
      <div style={{ background: 'var(--navy)', color: '#fff', padding: '48px 2rem 52px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Google Sans', fontSize: 34, fontWeight: 700, marginBottom: 14 }}>
            Serviços Prestados
          </h1>
          <p style={{ fontSize: 16, opacity: 0.85, lineHeight: 1.7 }}>
            O GAPE disponibiliza um conjunto de serviços especializados para apoiar
            alunos, famílias e a comunidade escolar em geral.
          </p>
        </div>
      </div>

      {/* Cards grid */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {SERVICOS.map((s, i) => (
            <div key={i} style={{
              background: 'var(--white)',
              border: '1px solid var(--gray-mid)',
              borderRadius: 8,
              padding: 28,
              boxShadow: 'var(--card-shadow)',
              borderTop: '4px solid var(--teal)',
            }}>
              <div style={{ fontSize: 36, marginBottom: 14 }}>{s.icon}</div>
              <h3 style={{
                fontFamily: 'Google Sans', fontSize: 18, fontWeight: 600,
                color: 'var(--navy)', marginBottom: 10,
              }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--gray-text)', lineHeight: 1.6, marginBottom: 16 }}>
                {s.desc}
              </p>
              <ul style={{ paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {s.items.map((item, j) => (
                  <li key={j} style={{ fontSize: 13, color: 'var(--dark-text)' }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
