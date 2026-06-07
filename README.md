# GAPE — Site React

Versão otimizada em React do site GAPE (Gabinete de Apoio e Proximidade Educacional),
preservando as cores originais do Google Sites.

## Cores utilizadas

| Variável         | Hex       | Uso                          |
|------------------|-----------|------------------------------|
| `--navy`         | `#1B2A4A` | Navbar, hero, cabeçalhos     |
| `--teal`         | `#00897B` | Botões, destaques, ícones    |
| `--teal-light`   | `#E0F2F1` | Fundos suaves, badges        |
| `--blue-link`    | `#1a73e8` | Links                        |

## Arrancar

```bash
npm install
npm run dev
```

Abre em http://localhost:5173

## Estrutura

```
src/
├── main.jsx
├── App.jsx               # Router + navegação
├── index.css             # Variáveis CSS e reset
└── components/
    ├── Navbar.jsx
    ├── Footer.jsx
    ├── Home.jsx
    ├── Servicos.jsx
    ├── Profissionais.jsx
    ├── Documentacao.jsx
    └── FaleConnosco.jsx  # Formulário de contacto
```

## Personalização

- Editar nomes, cargos e contactos diretamente nos ficheiros de cada componente
- Ajustar cores em `src/index.css` na secção `:root`
- Adicionar documentos reais na lista em `Documentacao.jsx`
