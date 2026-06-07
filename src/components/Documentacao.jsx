const DOCS = [
  {
    category: 'Formulários',
    color: '#6B2D8C',
    icon: '📋',
    items: [
      { name: 'Pedido de Apoio Psicológico', type: 'PDF', desc: 'Formulário para solicitar acompanhamento psicológico individual.', url: '/docs/formularios/pedido-apoio-psicologico.pdf' },
      { name: 'Autorização de Atendimento (Menores)', type: 'PDF', desc: 'Documento de consentimento informado para alunos menores de 18 anos.', url: '/docs/formularios/autorizacao-atendimento.pdf' },
      { name: 'Ficha de Sinalização Interna', type: 'PDF', desc: 'Para uso dos docentes na sinalização de situações de risco.', url: '/docs/formularios/ficha-sinalizacao.pdf' },
    ],
  },
  {
    category: 'Regulamentos',
    color: '#9B4DCA',
    icon: '📜',
    items: [
      { name: 'Regulamento do GAPE', type: 'PDF', desc: 'Normas de funcionamento, horários e procedimentos do gabinete.', url: '/docs/regulamentos/regulamento-gape.pdf' },
      { name: 'Política de Confidencialidade', type: 'PDF', desc: 'Termos de tratamento de dados pessoais e sigilo profissional.', url: '/docs/regulamentos/politica-confidencialidade.pdf' },
      { name: 'Protocolo de Sinalização à CPCJ', type: 'PDF', desc: 'Procedimentos para sinalização de crianças em risco.', url: '/docs/regulamentos/protocolo-cpcj.pdf' },
    ],
  },
  {
    category: 'Material de Apoio',
    color: '#6B2D8C',
    icon: '📚',
    items: [
      { name: 'Guia de Estudo Eficaz', type: 'PDF', desc: 'Técnicas e estratégias para melhorar o rendimento académico.', url: '/docs/apoio/guia-estudo-eficaz.pdf' },
      { name: 'Gestão do Stress e Ansiedade', type: 'PDF', desc: 'Recursos práticos para lidar com a pressão escolar e exames.', url: '/docs/apoio/gestao-stress-ansiedade.pdf' },
      { name: 'Guia de Orientação Vocacional', type: 'PDF', desc: 'Apoio na escolha de percursos académicos e profissionais.', url: '/docs/apoio/guia-orientacao-vocacional.pdf' },
    ],
  },
];

export default function Documentacao() {
  return (
    <div>
      {/* Header */}
      <div style={{ background: 'var(--navy)', color: '#fff', padding: '48px 2rem 52px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Google Sans', fontSize: 34, fontWeight: 700, marginBottom: 14 }}>
            Documentação
          </h1>
          <p style={{ fontSize: 16, opacity: 0.85, lineHeight: 1.7 }}>
            Formulários, regulamentos e materiais de apoio disponíveis para download
          </p>
        </div>
      </div>

      {/* Sections */}
      <section style={{ maxWidth: 1000, margin: '0 auto', padding: '56px 2rem' }}>
        {DOCS.map((group, gi) => (
          <div key={gi} style={{ marginBottom: 48 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{ fontSize: 24 }}>{group.icon}</span>
              <h2 style={{
                fontFamily: 'Google Sans', fontSize: 20, fontWeight: 600,
                color: 'var(--navy)',
              }}>
                {group.category}
              </h2>
              <div style={{ flex: 1, height: 1, background: 'var(--gray-mid)', marginLeft: 8 }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {group.items.map((doc, di) => (
                <div key={di} style={{
                  background: 'var(--white)',
                  border: '1px solid var(--gray-mid)',
                  borderRadius: 8,
                  padding: '16px 20px',
                  display: 'flex', alignItems: 'center', gap: 16,
                  boxShadow: 'var(--card-shadow)',
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 6,
                    background: group.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: 11, fontWeight: 700, color: '#fff', letterSpacing: 0.5,
                  }}>
                    {doc.type}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 500, fontSize: 15, color: 'var(--dark-text)', marginBottom: 3 }}>
                      {doc.name}
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--gray-text)' }}>{doc.desc}</div>
                  </div>
                  <a href={doc.url} download style={{
                    background: 'none',
                    border: '1px solid var(--teal)',
                    color: 'var(--teal)',
                    borderRadius: 4,
                    padding: '7px 16px',
                    fontSize: 13, fontWeight: 500,
                    cursor: 'pointer', flexShrink: 0,
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}>
                    ⬇ Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
