import { useState } from 'react';

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  border: '1px solid #DADCE0',
  borderRadius: 4,
  fontSize: 14,
  fontFamily: 'Roboto, sans-serif',
  color: '#202124',
  outline: 'none',
  background: '#fff',
  transition: 'border-color .15s',
};

const labelStyle = {
  display: 'block',
  fontSize: 13,
  fontWeight: 500,
  color: '#5F6368',
  marginBottom: 6,
};

export default function FaleConnosco() {
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' });
  const [sent, setSent] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  if (sent) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: 460 }}>
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            background: 'var(--teal-light)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px', fontSize: 32,
          }}>✓</div>
          <h2 style={{ fontFamily: 'Google Sans', fontSize: 26, fontWeight: 600, color: 'var(--navy)', marginBottom: 12 }}>
            Mensagem enviada!
          </h2>
          <p style={{ color: 'var(--gray-text)', lineHeight: 1.7, marginBottom: 28 }}>
            Obrigado pelo seu contacto. A equipa GAPE responderá em breve para o e-mail indicado.
          </p>
          <button
            onClick={() => { setSent(false); setForm({ nome: '', email: '', assunto: '', mensagem: '' }); }}
            style={{
              background: 'var(--teal)', color: '#fff', border: 'none',
              borderRadius: 4, padding: '11px 28px', fontSize: 14, fontWeight: 500,
            }}
          >
            Nova mensagem
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div style={{ background: 'var(--navy)', color: '#fff', padding: '48px 2rem 52px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Google Sans', fontSize: 34, fontWeight: 700, marginBottom: 14 }}>
            Fale Connosco
          </h1>
          <p style={{ fontSize: 16, opacity: 0.85, lineHeight: 1.7 }}>
            Estamos disponíveis para responder a todas as suas questões
          </p>
        </div>
      </div>

      <section style={{ maxWidth: 960, margin: '0 auto', padding: '56px 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 48 }}>

          {/* Contact info */}
          <div>
            <h2 style={{ fontFamily: 'Google Sans', fontSize: 20, fontWeight: 600, color: 'var(--navy)', marginBottom: 24 }}>
              Informações de Contacto
            </h2>
            {[
              ['📍', 'Morada', 'Escola Profissional do Alto Ave - EPAVE\nRua Principal, s/n\n4970-000 Arcos de Valdevez'],
              ['📞', 'Telefone', '258 000 000'],
              ['📧', 'E-mail', 'gape@epave.pt'],
              ['🕐', 'Horário de Atendimento', 'Segunda a Sexta\n09h00 – 12h30 | 13h30 – 17h00'],
            ].map(([icon, label, val]) => (
              <div key={label} style={{ display: 'flex', gap: 14, marginBottom: 24, alignItems: 'flex-start' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'var(--teal-light)', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                }}>
                  {icon}
                </div>
                <div>
                  <div style={{ fontSize: 12, color: 'var(--gray-text)', fontWeight: 500, marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {label}
                  </div>
                  <div style={{ fontSize: 14, color: 'var(--dark-text)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                    {val}
                  </div>
                </div>
              </div>
            ))}

            <div style={{
              background: 'var(--teal-light)', borderRadius: 8,
              padding: '16px 18px', marginTop: 8,
              borderLeft: '4px solid var(--teal)',
            }}>
              <p style={{ fontSize: 13, color: 'var(--gray-text)', lineHeight: 1.6 }}>
                Pode também deslocar-se diretamente ao gabinete durante o horário de atendimento,
                situado no piso 0 do edifício principal.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div style={{
            background: 'var(--white)',
            border: '1px solid var(--gray-mid)',
            borderRadius: 8,
            padding: '32px 28px',
            boxShadow: 'var(--card-shadow)',
          }}>
            <h2 style={{ fontFamily: 'Google Sans', fontSize: 20, fontWeight: 600, color: 'var(--navy)', marginBottom: 24 }}>
              Enviar Mensagem
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div>
                <label style={labelStyle}>Nome completo *</label>
                <input
                  style={inputStyle}
                  value={form.nome}
                  onChange={e => set('nome', e.target.value)}
                  placeholder="O seu nome"
                />
              </div>
              <div>
                <label style={labelStyle}>E-mail *</label>
                <input
                  style={inputStyle}
                  type="email"
                  value={form.email}
                  onChange={e => set('email', e.target.value)}
                  placeholder="email@exemplo.pt"
                />
              </div>
              <div>
                <label style={labelStyle}>Assunto</label>
                <select
                  style={{ ...inputStyle }}
                  value={form.assunto}
                  onChange={e => set('assunto', e.target.value)}
                >
                  <option value="">Selecione um assunto</option>
                  <option>Apoio Psicológico</option>
                  <option>Apoio Social</option>
                  <option>Apoio Pedagógico</option>
                  <option>Orientação Vocacional</option>
                  <option>Documentação</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Mensagem *</label>
                <textarea
                  style={{ ...inputStyle, minHeight: 110, resize: 'vertical' }}
                  value={form.mensagem}
                  onChange={e => set('mensagem', e.target.value)}
                  placeholder="Descreva a sua questão ou pedido..."
                />
              </div>
              <button
                onClick={() => { if (form.nome && form.email && form.mensagem) setSent(true); }}
                disabled={!form.nome || !form.email || !form.mensagem}
                style={{
                  background: 'var(--teal)', color: '#fff',
                  border: 'none', borderRadius: 4,
                  padding: '12px', fontSize: 15, fontWeight: 500,
                  opacity: (!form.nome || !form.email || !form.mensagem) ? 0.45 : 1,
                  transition: 'opacity .15s',
                }}
              >
                Enviar Mensagem
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
