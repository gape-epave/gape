import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE  = 'service_hkzukf9';
const EMAILJS_TEMPLATE = 'template_i4x1lyo';
const EMAILJS_KEY      = '4yWaQ-OPXcYdFU1qr';

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
  boxSizing: 'border-box',
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
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro]       = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const enviar = async () => {
    if (!form.nome || !form.email || !form.mensagem) return;
    setLoading(true);
    setErro('');
    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          from_name:  form.nome,
          from_email: form.email,
          assunto:    form.assunto || 'Sem assunto',
          mensagem:   form.mensagem,
          to_email:   'gape.epave@gmail.com',
        },
        EMAILJS_KEY
      );
      setSent(true);
    } catch (err) {
      setErro('Erro ao enviar. Tente novamente ou contacte-nos diretamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  /* ── Ecrã de sucesso ── */
  if (sent) {
    return (
      <div style={{
        minHeight: '60vh', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        padding: '2rem',
      }}>
        <div style={{ textAlign: 'center', maxWidth: 460, width: '100%' }}>
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
              borderRadius: 4, padding: '11px 28px', fontSize: 14,
              fontWeight: 500, cursor: 'pointer',
            }}
          >
            Nova mensagem
          </button>
        </div>
      </div>
    );
  }

  /* ── Página principal ── */
  return (
    <div>
      {/* Header */}
      <div style={{ background: 'var(--navy)', color: '#fff', padding: isMobile ? '36px 1.25rem 40px' : '48px 2rem 52px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Google Sans', fontSize: isMobile ? 26 : 34, fontWeight: 700, marginBottom: 14 }}>
            Fale Connosco
          </h1>
          <p style={{ fontSize: isMobile ? 14 : 16, opacity: 0.85, lineHeight: 1.7 }}>
            Estamos disponíveis para responder a todas as suas questões
          </p>
        </div>
      </div>

      <section style={{ maxWidth: 960, margin: '0 auto', padding: isMobile ? '32px 1.25rem' : '56px 2rem' }}>
        <div style={{
          display: 'grid',
          // Mobile: 1 coluna | Desktop: 2 colunas
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1.6fr',
          gap: isMobile ? 32 : 48,
        }}>

          {/* ── Informações de contacto ── */}
          <div>
            <h2 style={{ fontFamily: 'Google Sans', fontSize: 20, fontWeight: 600, color: 'var(--navy)', marginBottom: 24 }}>
              Informações de Contacto
            </h2>

            {[
              ['📍', 'Morada', 'Escola Profissional do Alto Ave - EPAVE\nRua Principal, s/n\n4830-000 Póvoa de Lanhoso'],
              ['📞', 'Telefone', '258 000 000'],
              ['📧', 'E-mail', 'gape.epave@gmail.com'],
              ['🕐', 'Horário de Atendimento', 'Segunda a Sexta\n09h00 – 12h30 | 13h30 – 17h00'],
            ].map(([icon, label, val]) => (
              <div key={label} style={{ display: 'flex', gap: 14, marginBottom: 20, alignItems: 'flex-start' }}>
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

            {/* Botões de ação rápida — úteis no mobile */}
            {isMobile && (
              <div style={{ display: 'flex', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
                <a
                  href="tel:258000000"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    background: 'var(--teal)', color: '#fff',
                    padding: '10px 18px', borderRadius: 4,
                    fontSize: 14, fontWeight: 500, textDecoration: 'none',
                    flex: 1, justifyContent: 'center',
                  }}
                >
                  📞 Ligar
                </a>
                <a
                  href="mailto:gape.epave@gmail.com"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    background: 'var(--navy)', color: '#fff',
                    padding: '10px 18px', borderRadius: 4,
                    fontSize: 14, fontWeight: 500, textDecoration: 'none',
                    flex: 1, justifyContent: 'center',
                  }}
                >
                  📧 Email
                </a>
              </div>
            )}

            <div style={{
              background: 'var(--teal-light)', borderRadius: 8,
              padding: '16px 18px', marginTop: 4,
              borderLeft: '4px solid var(--teal)',
            }}>
              <p style={{ fontSize: 13, color: 'var(--gray-text)', lineHeight: 1.6, margin: 0 }}>
                Pode também deslocar-se diretamente ao gabinete durante o horário de atendimento,
                situado no piso 0 do edifício principal.
              </p>
            </div>
          </div>

          {/* ── Formulário ── */}
          <div style={{
            background: 'var(--white)',
            border: '1px solid var(--gray-mid)',
            borderRadius: 8,
            padding: isMobile ? '24px 18px' : '32px 28px',
            boxShadow: 'var(--card-shadow)',
            boxSizing: 'border-box',
          }}>
            <h2 style={{ fontFamily: 'Google Sans', fontSize: 20, fontWeight: 600, color: 'var(--navy)', marginBottom: 24 }}>
              Enviar Mensagem
            </h2>

            {erro && (
              <div style={{
                background: '#fce8e6', color: '#c5221f',
                borderRadius: 4, padding: '10px 14px',
                fontSize: 13, marginBottom: 16,
              }}>
                {erro}
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div>
                <label htmlFor="nome" style={labelStyle}>Nome completo *</label>
                <input
                  id="nome"
                  style={inputStyle}
                  value={form.nome}
                  onChange={e => set('nome', e.target.value)}
                  placeholder="O seu nome"
                  autoComplete="name"
                />
              </div>

              <div>
                <label htmlFor="email" style={labelStyle}>E-mail *</label>
                <input
                  id="email"
                  style={inputStyle}
                  type="email"
                  value={form.email}
                  onChange={e => set('email', e.target.value)}
                  placeholder="email@exemplo.pt"
                  autoComplete="email"
                  inputMode="email"
                />
              </div>

              <div>
                <label htmlFor="assunto" style={labelStyle}>Assunto</label>
                <select
                  id="assunto"
                  style={inputStyle}
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
                <label htmlFor="mensagem" style={labelStyle}>Mensagem *</label>
                <textarea
                  id="mensagem"
                  style={{ ...inputStyle, minHeight: isMobile ? 120 : 110, resize: 'vertical' }}
                  value={form.mensagem}
                  onChange={e => set('mensagem', e.target.value)}
                  placeholder="Descreva a sua questão ou pedido..."
                />
              </div>

              <button
                onClick={enviar}
                disabled={!form.nome || !form.email || !form.mensagem || loading}
                style={{
                  background: 'var(--teal)', color: '#fff',
                  border: 'none', borderRadius: 4,
                  padding: '14px', fontSize: 15, fontWeight: 500,
                  cursor: loading ? 'wait' : 'pointer',
                  opacity: (!form.nome || !form.email || !form.mensagem || loading) ? 0.45 : 1,
                  transition: 'opacity .15s',
                  width: '100%',
                  // Tamanho mínimo recomendado para toque no mobile
                  minHeight: 48,
                }}
              >
                {loading ? 'A enviar...' : 'Enviar Mensagem'}
              </button>

              <p style={{ fontSize: 12, color: 'var(--gray-text)', textAlign: 'center', margin: 0 }}>
                * Campos obrigatórios
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
