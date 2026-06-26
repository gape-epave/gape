import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE  = 'service_hkzukf9';
const EMAILJS_TEMPLATE = 'template_i4x1lyo';
const EMAILJS_KEY      = '4yWaQ-OPXcYdFU1qr';

const CATEGORIAS = [
  { id: 'bullying',  label: 'Bullying ou Conflito' },
  { id: 'pessoal',   label: 'Problema Pessoal' },
  { id: 'familiar',  label: 'Situação Familiar' },
  { id: 'academico', label: 'Assunto Académico' },
  { id: 'outro',     label: 'Outro' },
];

const URGENCIAS = [
  { id: 'baixa', label: 'Quando Possível' },
  { id: 'media', label: 'Esta Semana' },
  { id: 'alta',  label: 'Com urgência' },
];

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

/* ── Formulário normal (com identificação) ── */
function FormularioNormal({ isMobile }) {
  const [form, setForm]     = useState({ nome: '', email: '', assunto: '', mensagem: '' });
  const [sent, setSent]     = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro]     = useState('');

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

  if (sent) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        <div style={{
          width: 64, height: 64, borderRadius: '50%',
          background: 'var(--teal-light)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px', fontSize: 28, color: 'var(--teal)',
        }}>✓</div>
        <h3 style={{ fontFamily: 'Google Sans', fontSize: 20, color: 'var(--navy)', marginBottom: 10 }}>
          Mensagem enviada!
        </h3>
        <p style={{ color: '#5F6368', lineHeight: 1.7, marginBottom: 20, fontSize: 14 }}>
          A equipa GAPE responderá em breve para o e-mail indicado.
        </p>
        <button
          onClick={() => { setSent(false); setForm({ nome: '', email: '', assunto: '', mensagem: '' }); }}
          style={{ background: 'var(--teal)', color: '#fff', border: 'none', borderRadius: 4, padding: '10px 24px', fontSize: 14, fontWeight: 500, cursor: 'pointer' }}
        >
          Nova mensagem
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      {erro && (
        <div style={{ background: '#fce8e6', color: '#c5221f', borderRadius: 4, padding: '10px 14px', fontSize: 13 }}>
          {erro}
        </div>
      )}
      <div>
        <label htmlFor="nome" style={labelStyle}>Nome completo *</label>
        <input id="nome" style={inputStyle} value={form.nome} onChange={e => set('nome', e.target.value)} placeholder="O seu nome" autoComplete="name" />
      </div>
      <div>
        <label htmlFor="email" style={labelStyle}>E-mail *</label>
        <input id="email" style={inputStyle} type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="email@exemplo.pt" autoComplete="email" />
      </div>
      <div>
        <label htmlFor="assunto" style={labelStyle}>Assunto</label>
        <select id="assunto" style={inputStyle} value={form.assunto} onChange={e => set('assunto', e.target.value)}>
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
          background: 'var(--teal)', color: '#fff', border: 'none', borderRadius: 4,
          padding: '14px', fontSize: 15, fontWeight: 500,
          cursor: loading ? 'wait' : 'pointer',
          opacity: (!form.nome || !form.email || !form.mensagem || loading) ? 0.45 : 1,
          transition: 'opacity .15s', width: '100%', minHeight: 48,
        }}
      >
        {loading ? 'A enviar...' : 'Enviar Mensagem'}
      </button>
      <p style={{ fontSize: 12, color: '#9AA0A6', textAlign: 'center', margin: 0 }}>* Campos obrigatórios</p>
    </div>
  );
}

/* ── Formulário anónimo ── */
function FormularioAnonimo({ isMobile }) {
  const [categoria, setCategoria] = useState('');
  const [urgencia, setUrgencia]   = useState('baixa');
  const [mensagem, setMensagem]   = useState('');
  const [contacto, setContacto]   = useState('');
  const [passo, setPasso]         = useState('form'); // form | enviado | erro
  const [loading, setLoading]     = useState(false);
  const [erroMsg, setErroMsg]     = useState('');

  const categoriasMap = { bullying: 'Bullying ou conflito', pessoal: 'Problema pessoal', familiar: 'Situação familiar', academico: 'Assunto académico', outro: 'Outro' };
  const urgenciaMap   = { baixa: 'Quando puderem', media: 'Esta semana', alta: '⚠️ COM URGÊNCIA' };

  const enviar = async () => {
    if (!categoria) { setErroMsg('Escolhe um tipo de situação.'); return; }
    if (mensagem.trim().length < 20) { setErroMsg('Escreve pelo menos 20 caracteres.'); return; }
    setErroMsg('');
    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          from_name:  'Utilizador Anónimo',
          from_email: contacto || 'anonimo@gape',
          assunto:    `[ANÓNIMO] ${categoriasMap[categoria]} — ${urgenciaMap[urgencia]}`,
          mensagem:   mensagem,
          message:    mensagem,
          to_email:   'gape.epave@gmail.com',
        },
        EMAILJS_KEY
      );
      setPasso('enviado');
    } catch (err) {
      setPasso('erro');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (passo === 'enviado') {
    return (
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        <div style={{
          width: 64, height: 64, borderRadius: '50%', background: '#E8F5E9',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px', fontSize: 28, color: '#2E7D32',
        }}>✓</div>
        <h3 style={{ fontFamily: 'Google Sans', fontSize: 20, color: 'var(--navy)', marginBottom: 10 }}>
          Mensagem recebida
        </h3>
        <p style={{ color: '#5F6368', lineHeight: 1.7, marginBottom: 8, fontSize: 14 }}>
          A equipa GAPE recebeu o teu pedido e vai dar atenção à tua situação.
        </p>
        {urgencia === 'alta' && (
          <p style={{ fontSize: 13, color: '#2E7D32', background: '#E8F5E9', borderRadius: 6, padding: '8px 14px', marginBottom: 16 }}>
            Marcaste como urgente — um técnico irá ver a tua mensagem com prioridade.
          </p>
        )}
        <button
          onClick={() => { setPasso('form'); setCategoria(''); setUrgencia('baixa'); setMensagem(''); setContacto(''); }}
          style={{ background: 'transparent', color: 'var(--teal)', border: '1px solid var(--teal)', borderRadius: 4, padding: '9px 22px', fontSize: 14, fontWeight: 500, cursor: 'pointer' }}
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  if (passo === 'erro') {
    return (
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        <p style={{ color: '#c5221f', marginBottom: 16 }}>Não foi possível enviar. Tenta de novo.</p>
        <button onClick={() => setPasso('form')} style={{ background: 'var(--teal)', color: '#fff', border: 'none', borderRadius: 4, padding: '10px 24px', fontSize: 14, cursor: 'pointer' }}>
          Tentar de novo
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Aviso de anonimato */}
      <div style={{
        display: 'flex', alignItems: 'flex-start', gap: 10,
        background: '#E8F5E9', border: '1px solid #A5D6A7',
        borderRadius: 8, padding: '12px 14px', fontSize: 13, color: '#1B5E20', lineHeight: 1.5,
      }}>
        <span style={{ fontSize: 18, flexShrink: 0 }}>🔒</span>
        <span>A tua identidade está protegida. Não registamos nome, email, turma nem endereço IP.</span>
      </div>

      {/* Categoria */}
      <div>
        <p style={{ ...labelStyle, marginBottom: 10 }}>Qual é o tipo de situação?</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {CATEGORIAS.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategoria(cat.id)}
              style={{
                padding: '7px 14px', borderRadius: 20, fontSize: 13, cursor: 'pointer',
                border: `1px solid ${categoria === cat.id ? 'var(--teal)' : '#DADCE0'}`,
                background: categoria === cat.id ? 'var(--teal-light)' : '#fff',
                color: categoria === cat.id ? '#00695C' : '#5F6368',
                fontWeight: categoria === cat.id ? 500 : 400,
                transition: 'all .15s',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
        {erroMsg && categoria === '' && (
          <p style={{ fontSize: 12, color: '#c5221f', margin: '6px 0 0' }}>{erroMsg}</p>
        )}
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="anon-mensagem" style={labelStyle}>Descreve o que se passa</label>
        <textarea
          id="anon-mensagem"
          style={{ ...inputStyle, minHeight: isMobile ? 120 : 110, resize: 'vertical' }}
          value={mensagem}
          onChange={e => setMensagem(e.target.value)}
          placeholder="Escreve ao teu ritmo. Quanto mais detalhes deres, melhor conseguimos ajudar."
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#9AA0A6', marginTop: 4 }}>
          <span>{mensagem.length} caracteres</span>
          {erroMsg && mensagem.trim().length < 20 && <span style={{ color: '#c5221f' }}>{erroMsg}</span>}
        </div>
      </div>

      {/* Urgência */}
      <div>
        <p style={{ ...labelStyle, marginBottom: 10 }}>Com que urgência queres apoio?</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {URGENCIAS.map(u => (
            <button
              key={u.id}
              onClick={() => setUrgencia(u.id)}
              style={{
                padding: '7px 16px', borderRadius: 20, fontSize: 13, cursor: 'pointer',
                border: `1px solid ${urgencia === u.id ? 'var(--teal)' : '#DADCE0'}`,
                background: urgencia === u.id ? 'var(--teal-light)' : '#fff',
                color: urgencia === u.id ? '#00695C' : '#5F6368',
                fontWeight: urgencia === u.id ? 500 : 400,
                transition: 'all .15s',
              }}
            >
              {u.label}
            </button>
          ))}
        </div>
      </div>

      {/* Contacto opcional */}
      <div>
        <label htmlFor="anon-contacto" style={labelStyle}>Contacto (opcional)</label>
        <p style={{ fontSize: 12, color: '#9AA0A6', margin: '0 0 8px', lineHeight: 1.5 }}>
          Se quiseres receber uma resposta, podes deixar um email ou número. Não é obrigatório.
        </p>
        <input
          id="anon-contacto"
          style={inputStyle}
          value={contacto}
          onChange={e => setContacto(e.target.value)}
          placeholder="email@exemplo.com ou telemóvel"
        />
      </div>

      <button
        onClick={enviar}
        disabled={loading}
        style={{
          background: 'var(--teal)', color: '#fff', border: 'none', borderRadius: 4,
          padding: '14px', fontSize: 15, fontWeight: 500,
          cursor: loading ? 'wait' : 'pointer',
          opacity: loading ? 0.6 : 1,
          transition: 'opacity .15s', width: '100%', minHeight: 48,
        }}
      >
        {loading ? 'A enviar…' : '🔒 Enviar em segurança'}
      </button>
    </div>
  );
}

/* ── Componente principal ── */
export default function FaleConnosco() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [modo, setModo]         = useState('normal'); // normal | anonimo

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

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
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1.6fr',
          gap: isMobile ? 32 : 48,
        }}>

          {/* ── Coluna esquerda: informações ── */}
          <div>
            <h2 style={{ fontFamily: 'Google Sans', fontSize: 20, fontWeight: 600, color: 'var(--navy)', marginBottom: 24 }}>
              Informações de Contacto
            </h2>

            {[
              ['📍', 'Morada', 'Escola Profissional do Alto Ave - EPAVE\nRua Principal, s/n\n4830-000 Póvoa de Lanhoso'],
              ['📞', 'Telefone', '253 634 811'],
              ['📧', 'E-mail', 'gape@epave.pt'],
              ['🕐', 'Horário de Atendimento', 'Quintas-feiras\n09h00 – 18h00'],
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
                  <div style={{ fontSize: 12, color: '#5F6368', fontWeight: 500, marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {label}
                  </div>
                  <div style={{ fontSize: 14, color: '#202124', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                    {val}
                  </div>
                </div>
              </div>
            ))}

            {isMobile && (
              <div style={{ display: 'flex', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
                <a href="tel:253634811" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--teal)', color: '#fff', padding: '10px 18px', borderRadius: 4, fontSize: 14, fontWeight: 500, textDecoration: 'none', flex: 1, justifyContent: 'center' }}>
                  📞 Ligar
                </a>
                <a href="mailto:gape.epave@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--navy)', color: '#fff', padding: '10px 18px', borderRadius: 4, fontSize: 14, fontWeight: 500, textDecoration: 'none', flex: 1, justifyContent: 'center' }}>
                  📧 Email
                </a>
              </div>
            )}

            <div style={{ background: 'var(--teal-light)', borderRadius: 8, padding: '16px 18px', marginTop: 4, borderLeft: '4px solid var(--teal)' }}>
              <p style={{ fontSize: 13, color: '#5F6368', lineHeight: 1.6, margin: 0 }}>
                Pode também deslocar-se diretamente ao gabinete durante o horário de atendimento,
                situado no piso 0 do edifício principal.
              </p>
            </div>
          </div>

          {/* ── Coluna direita: formulário com tabs ── */}
          <div style={{
            background: '#fff',
            border: '1px solid #DADCE0',
            borderRadius: 8,
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0,0,0,.08)',
            boxSizing: 'border-box',
          }}>
            {/* Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid #DADCE0' }}>
              {[
                { key: 'normal',   label: '✉️  Enviar mensagem' },
                { key: 'anonimo',  label: '🔒  Falar anonimamente' },
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setModo(tab.key)}
                  style={{
                    flex: 1, padding: '14px 8px',
                    fontSize: isMobile ? 12 : 13, fontWeight: modo === tab.key ? 600 : 400,
                    color: modo === tab.key ? 'var(--teal)' : '#5F6368',
                    background: 'none', border: 'none', cursor: 'pointer',
                    borderBottom: modo === tab.key ? '2px solid var(--teal)' : '2px solid transparent',
                    transition: 'all .15s',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div style={{ padding: isMobile ? '24px 18px' : '28px 28px' }}>
              {modo === 'normal' ? (
                <>
                  <h2 style={{ fontFamily: 'Google Sans', fontSize: 18, fontWeight: 600, color: 'var(--navy)', marginBottom: 20, marginTop: 0 }}>
                    Enviar Mensagem
                  </h2>
                  <FormularioNormal isMobile={isMobile} />
                </>
              ) : (
                <>
                  <h2 style={{ fontFamily: 'Google Sans', fontSize: 18, fontWeight: 600, color: 'var(--navy)', marginBottom: 6, marginTop: 0 }}>
                    Falar Anonimamente
                  </h2>
                  <p style={{ fontSize: 13, color: '#5F6368', marginBottom: 20, lineHeight: 1.6 }}>
                    Podes partilhar qualquer situação sem te identificares. A equipa GAPE lê todas as mensagens.
                  </p>
                  <FormularioAnonimo isMobile={isMobile} />
                </>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
