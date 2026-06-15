const TEAM = [
  {
    initials: 'IA',
    name: 'Dra. Inês Almeida',
    role: 'Responsável do GAPE',
    area: 'Coordenação e Gestão',
    desc: 'Técnica do projeto “Povoarte Educa” integrado no PIPSE e estagiária do Mestrado em Educação com especialização em Mediação Educacional -Responsável pela coordenação geral do gabinete e articulação com a direção pedagógica.',
    color: '#6B2D8C',
  },
  {
    initials: 'AO',
    name: 'Dra. Ana Oliveira',
    role: 'Psicóloga',
    area: 'Psicologia',
    desc: 'Especialista em Psicologia Clínica e Educacional, Orientação Vocacional e Avaliação Psicológica.',
    color: '#9B4DCA',
  },
  {
    initials: 'PG',
    name: 'Dra. Patrícia Grandinho',
    role: 'Psicológa',
    area: 'Psicologia',
    desc: 'Responsável pelo apoio social a alunos e famílias, sinalização e articulação com entidades externas.',
    color: '#8B3DA9',
  },
];

export default function Profissionais() {
  return (
    <div>
      {/* Header */}
      <div style={{ background: 'var(--navy)', color: '#fff', padding: '48px 2rem 52px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Google Sans', fontSize: 34, fontWeight: 700, marginBottom: 14 }}>
            A Nossa Equipa
          </h1>
          <p style={{ fontSize: 16, opacity: 0.85, lineHeight: 1.7 }}>
            Profissionais especializados ao serviço da comunidade escolar
          </p>
        </div>
      </div>

      {/* Team cards */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '56px 2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {TEAM.map((p, i) => (
            <div key={i} style={{
              background: 'var(--white)',
              border: '1px solid var(--gray-mid)',
              borderRadius: 8,
              padding: '28px 32px',
              boxShadow: 'var(--card-shadow)',
              display: 'flex', alignItems: 'center', gap: 28,
            }}>
              {/* Avatar */}
              <div style={{
                width: 72, height: 72, borderRadius: '50%', flexShrink: 0,
                background: p.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Google Sans', fontWeight: 700, fontSize: 22, color: '#fff',
                letterSpacing: 1,
              }}>
                {p.initials}
              </div>

              {/* Info */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
                  <h3 style={{ fontFamily: 'Google Sans', fontSize: 20, fontWeight: 600, color: 'var(--navy)' }}>
                    {p.name}
                  </h3>
                  <span style={{
                    fontSize: 12, fontWeight: 500,
                    background: 'var(--teal-light)', color: 'var(--teal-dark)',
                    padding: '3px 10px', borderRadius: 12,
                  }}>
                    {p.role}
                  </span>
                </div>
                <div style={{ fontSize: 13, color: 'var(--teal)', fontWeight: 500, margin: '4px 0 8px' }}>
                  {p.area}
                </div>
                <p style={{ fontSize: 14, color: 'var(--gray-text)', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact note */}
        <div style={{
          marginTop: 40, background: 'var(--teal-light)',
          borderRadius: 8, padding: '20px 24px',
          borderLeft: '4px solid var(--teal)',
        }}>
          <p style={{ fontSize: 14, color: 'var(--gray-text)', lineHeight: 1.6 }}>
            Para marcar uma consulta ou obter mais informações sobre a equipa, utilize
            a página <strong style={{ color: 'var(--navy)' }}>Fale Connosco</strong> ou dirija-se ao gabinete durante o horário de atendimento.
          </p>
        </div>
      </section>
    </div>
  );
}
