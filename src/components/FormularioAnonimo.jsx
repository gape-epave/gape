"use client";

import { useState } from "react";
import styles from "./FormularioAnonimo.module.css";

const CATEGORIAS = [
  { id: "bullying", label: "Bullying ou Conflito", icone: "⚠️" },
  { id: "pessoal", label: "Problema Pessoal", icone: "💬" },
  { id: "familiar", label: "Situação Familiar", icone: "🏠" },
  { id: "academico", label: "Assunto Académico", icone: "📚" },
  { id: "outro", label: "Outro", icone: "•••" },
];

const URGENCIAS = [
  { id: "baixa", label: "Quando Possível" },
  { id: "media", label: "Esta Semana" },
  { id: "alta", label: "Com Urgência" },
];

export default function FormularioAnonimo() {
  const [passo, setPasso] = useState("formulario"); // formulario | enviado | erro
  const [enviando, setEnviando] = useState(false);
  const [dados, setDados] = useState({
    categoria: "",
    urgencia: "baixa",
    mensagem: "",
    contactoOpcional: "",
  });
  const [erros, setErros] = useState({});

  function validar() {
    const novosErros = {};
    if (!dados.categoria) novosErros.categoria = "Escolhe um tipo de situação.";
    if (!dados.mensagem || dados.mensagem.trim().length < 20)
      novosErros.mensagem = "Escreve pelo menos 20 caracteres.";
    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validar()) return;
    setEnviando(true);
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
      if (!res.ok) throw new Error("Falha no envio");
      setPasso("enviado");
    } catch {
      setPasso("erro");
    } finally {
      setEnviando(false);
    }
  }

  if (passo === "enviado") {
    return (
      <div className={styles.card}>
        <div className={styles.confirmacao}>
          <div className={styles.confirmacaoIcone}>✓</div>
          <h2 className={styles.confirmacaoTitulo}>Mensagem recebida</h2>
          <p className={styles.confirmacaoTexto}>
            A equipa do GAPE recebeu o teu pedido e vai dar atenção à tua
            situação. Não precisas de fazer mais nada.
          </p>
          {dados.urgencia === "alta" && (
            <p className={styles.urgenciaAviso}>
              Marcaste como urgente — um técnico irá ver a tua mensagem com
              prioridade.
            </p>
          )}
          <button
            className={styles.botaoSecundario}
            onClick={() => {
              setPasso("formulario");
              setDados({
                categoria: "",
                urgencia: "baixa",
                mensagem: "",
                contactoOpcional: "",
              });
            }}
          >
            Enviar outra mensagem
          </button>
        </div>
      </div>
    );
  }

  if (passo === "erro") {
    return (
      <div className={styles.card}>
        <div className={styles.confirmacao}>
          <div className={`${styles.confirmacaoIcone} ${styles.erroIcone}`}>
            !
          </div>
          <h2 className={styles.confirmacaoTitulo}>Não foi possível enviar</h2>
          <p className={styles.confirmacaoTexto}>
            Ocorreu um erro. Podes tentar de novo ou contactar diretamente o
            GAPE.
          </p>
          <button
            className={styles.botaoPrimario}
            onClick={() => setPasso("formulario")}
          >
            Tentar de novo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      {/* Aviso de anonimato — visível antes de escrever */}
      <div className={styles.avisoAnonimato}>
        <span className={styles.avisoIcone}>🔒</span>
        <span>
          A tua identidade está protegida. Não registamos nome, email, turma nem
          endereço IP.
        </span>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Passo 1: Categoria */}
        <fieldset className={styles.fieldset}>
          <legend className={styles.legenda}>
            Qual é o tipo de situação?
          </legend>
          <div className={styles.categoriasGrelha}>
            {CATEGORIAS.map((cat) => (
              <label
                key={cat.id}
                className={`${styles.categoriaOpcao} ${
                  dados.categoria === cat.id ? styles.categoriaAtiva : ""
                }`}
              >
                <input
                  type="radio"
                  name="categoria"
                  value={cat.id}
                  checked={dados.categoria === cat.id}
                  onChange={(e) =>
                    setDados({ ...dados, categoria: e.target.value })
                  }
                  className={styles.radioOculto}
                />
                <span className={styles.categoriaIcone}>{cat.icone}</span>
                <span className={styles.categoriaLabel}>{cat.label}</span>
              </label>
            ))}
          </div>
          {erros.categoria && (
            <p className={styles.erro}>{erros.categoria}</p>
          )}
        </fieldset>

        {/* Passo 2: Mensagem */}
        <div className={styles.campo}>
          <label htmlFor="mensagem" className={styles.rotulo}>
            Descreve o que se passa
          </label>
          <textarea
            id="mensagem"
            className={`${styles.textarea} ${erros.mensagem ? styles.campoInvalido : ""}`}
            placeholder="Escreve ao teu ritmo. Quanto mais detalhes deres, melhor conseguimos ajudar."
            rows={6}
            value={dados.mensagem}
            onChange={(e) => setDados({ ...dados, mensagem: e.target.value })}
          />
          <div className={styles.contadorLinha}>
            <span>{dados.mensagem.length} caracteres</span>
            {erros.mensagem && (
              <span className={styles.erro}>{erros.mensagem}</span>
            )}
          </div>
        </div>

        {/* Passo 3: Urgência */}
        <div className={styles.campo}>
          <span className={styles.rotulo}>Com que urgência queres apoio?</span>
          <div className={styles.urgenciaOpcoes}>
            {URGENCIAS.map((u) => (
              <label
                key={u.id}
                className={`${styles.urgenciaOpcao} ${
                  dados.urgencia === u.id ? styles.urgenciaAtiva : ""
                }`}
              >
                <input
                  type="radio"
                  name="urgencia"
                  value={u.id}
                  checked={dados.urgencia === u.id}
                  onChange={(e) =>
                    setDados({ ...dados, urgencia: e.target.value })
                  }
                  className={styles.radioOculto}
                />
                {u.label}
              </label>
            ))}
          </div>
        </div>

        {/* Contacto opcional */}
        <div className={styles.campo}>
          <label htmlFor="contacto" className={styles.rotulo}>
            Contacto (opcional)
          </label>
          <p className={styles.ajuda}>
            Se quiseres receber uma resposta, podes deixar um email ou número.
            Não é obrigatório.
          </p>
          <input
            id="contacto"
            type="text"
            className={styles.input}
            placeholder="email@exemplo.com ou telemóvel"
            value={dados.contactoOpcional}
            onChange={(e) =>
              setDados({ ...dados, contactoOpcional: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          className={styles.botaoPrimario}
          disabled={enviando}
        >
          {enviando ? "A enviar…" : "Enviar em segurança"}
        </button>
      </form>
    </div>
  );
}
