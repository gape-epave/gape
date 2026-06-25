import { Resend } from "resend";

// Instanciar Resend com a chave de API das variáveis de ambiente
const resend = new Resend(process.env.RESEND_API_KEY);

// Destino das mensagens (definir em .env.local e em Vercel → Environment Variables)
const EMAIL_DESTINO = process.env.GAPE_EMAIL_DESTINO;
const EMAIL_REMETENTE = process.env.GAPE_EMAIL_REMETENTE || "gape@seudominio.com";

export async function POST(request) {
  try {
    const corpo = await request.json();
    const { categoria, urgencia, mensagem, contactoOpcional } = corpo;

    // Validação básica no servidor
    if (!categoria || !mensagem || mensagem.trim().length < 20) {
      return Response.json(
        { erro: "Dados inválidos." },
        { status: 400 }
      );
    }

    // Mapeamento de labels
    const categoriasMap = {
      bullying: "Bullying ou Conflito",
      pessoal: "Problema Pessoal",
      familiar: "Situação Familiar",
      academico: "Assunto Académico",
      outro: "Outro",
    };

    const urgenciaMap = {
      baixa: "Quando Possível",
      media: "Esta semana",
      alta: "⚠️ COM URGÊNCIA",
    };

    const assunto =
      urgencia === "alta"
        ? `[URGENTE] Novo pedido anónimo — ${categoriasMap[categoria] || categoria}`
        : `Novo pedido anónimo GAPE — ${categoriasMap[categoria] || categoria}`;

    // HTML do email
    const htmlEmail = `
<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; color: #2c2c2a; margin: 0; padding: 0; background: #f5f4f0; }
    .wrapper { max-width: 560px; margin: 32px auto; background: #fff; border-radius: 12px; overflow: hidden; border: 1px solid #e8e6df; }
    .header { background: #2d7a56; color: white; padding: 24px 28px; }
    .header h1 { margin: 0; font-size: 18px; font-weight: 500; }
    .header p { margin: 6px 0 0; font-size: 13px; opacity: 0.85; }
    .body { padding: 24px 28px; }
    .badge { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; margin-bottom: 16px; }
    .badge-alta { background: #fdf0ee; color: #c0392b; border: 1px solid #f0c4be; }
    .badge-media { background: #fef9ed; color: #92600a; border: 1px solid #f5d990; }
    .badge-baixa { background: #f0faf5; color: #1a6640; border: 1px solid #c8ead8; }
    .campo { margin-bottom: 20px; }
    .campo-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: #888780; margin-bottom: 6px; }
    .campo-valor { font-size: 14px; color: #2c2c2a; line-height: 1.6; }
    .mensagem-caixa { background: #fafaf8; border: 1px solid #e8e6df; border-radius: 8px; padding: 14px 16px; font-size: 14px; line-height: 1.7; color: #3d3d3a; white-space: pre-wrap; }
    .footer { padding: 16px 28px; background: #fafaf8; border-top: 1px solid #e8e6df; font-size: 12px; color: #888780; }
    .anonimato { font-size: 12px; color: #1a6640; background: #f0faf5; border: 1px solid #c8ead8; border-radius: 8px; padding: 10px 14px; margin-bottom: 20px; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>GAPE — Novo pedido de apoio</h1>
      <p>Escola Profissional do Alto Ave · Gabinete de Apoio à Proximidade Educativa</p>
    </div>
    <div class="body">
      <div class="anonimato">
        🔒 Esta mensagem foi enviada de forma anónima. Nenhum dado de identificação foi registado.
      </div>

      <span class="badge badge-${urgencia}">
        Urgência: ${urgenciaMap[urgencia] || urgencia}
      </span>

      <div class="campo">
        <div class="campo-label">Tipo de situação</div>
        <div class="campo-valor">${categoriasMap[categoria] || categoria}</div>
      </div>

      <div class="campo">
        <div class="campo-label">Mensagem</div>
        <div class="mensagem-caixa">${mensagem.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
      </div>

      ${
        contactoOpcional
          ? `<div class="campo">
        <div class="campo-label">Contacto opcional (deixado pelo utilizador)</div>
        <div class="campo-valor">${contactoOpcional.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
      </div>`
          : `<div class="campo">
        <div class="campo-label">Contacto</div>
        <div class="campo-valor" style="color:#888780;font-style:italic">Não fornecido — resposta não possível</div>
      </div>`
      }
    </div>
    <div class="footer">
      Recebido em ${new Date().toLocaleString("pt-PT", { timeZone: "Europe/Lisbon" })} · Sistema GAPE EPAVE
    </div>
  </div>
</body>
</html>`;

    const { error } = await resend.emails.send({
      from: EMAIL_REMETENTE,
      to: [EMAIL_DESTINO],
      subject: assunto,
      html: htmlEmail,
      // Para pedidos urgentes, adicionar headers de prioridade
      ...(urgencia === "alta" && {
        headers: {
          "X-Priority": "1",
          "X-MSMail-Priority": "High",
          Importance: "High",
        },
      }),
    });

    if (error) {
      console.error("Erro Resend:", error);
      return Response.json({ erro: "Falha no envio do email." }, { status: 500 });
    }

    return Response.json({ sucesso: true });
  } catch (err) {
    console.error("Erro na API /contacto:", err);
    return Response.json({ erro: "Erro interno." }, { status: 500 });
  }
}
