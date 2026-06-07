# 🚀 Guia Visual: Publicar seu site no Vercel

---

## 📋 **Passo 1: Preparar o GitHub**

### **1.1 - Abra o Terminal (PowerShell)**
- Abra a pasta do projeto: `D:\gape-site\gape-site`
- Clique com botão direito → **"Abrir no Terminal"**

### **1.2 - Criar repositório GitHub**

```bash
git init
git add .
git commit -m "Inicial commit - GAPE site"
git branch -M main
```

### **1.3 - Criar repositório no GitHub**
1. Acesse [github.com](https://github.com)
2. Clique em **"+"** (canto superior direito)
3. Selecione **"New repository"**

```
┌─────────────────────────────────┐
│ Create a new repository         │
├─────────────────────────────────┤
│ Repository name:                │
│ [gape-site                    ] │
│                                 │
│ Description (optional):         │
│ [Site GAPE - React + Vite    ] │
│                                 │
│ ☉ Public                        │
│ ○ Private                       │
│                                 │
│ [✓] Add a README file           │
│                                 │
│        [Create repository]      │
└─────────────────────────────────┘
```

### **1.4 - Copiar o comando do GitHub**
Depois de criar, aparece uma tela com:

```bash
git remote add origin https://github.com/SEU_USUARIO/gape-site.git
git push -u origin main
```

**Copie e cole no seu Terminal PowerShell**

### **1.5 - Enviar código**
```bash
git push -u origin main
```

✅ **Seu código agora está no GitHub!**

---

## 🎯 **Passo 2: Criar Conta no Vercel**

### **2.1 - Acessar Vercel**
1. Vá para [vercel.com](https://vercel.com)
2. Clique em **"Sign Up"** (canto superior direito)

```
┌──────────────────────────────────┐
│ VERCEL                           │
├──────────────────────────────────┤
│ Vercel makes frontend            │
│ development faster               │
│                                  │
│     [Sign Up]  [Login]           │
└──────────────────────────────────┘
```

### **2.2 - Escolher opção de login**
- Clique em **"Continue with GitHub"**

```
┌──────────────────────────────────┐
│ Sign Up                          │
├──────────────────────────────────┤
│ [🐙 Continue with GitHub]       │
│ [📧 Continue with Email]        │
│ [🔗 Continue with GitLab]       │
└──────────────────────────────────┘
```

### **2.3 - Autorizar Vercel no GitHub**
- Uma janela aparece pedindo permissão
- Clique em **"Authorize Vercel"**

✅ **Conta criada!**

---

## 📂 **Passo 3: Importar seu Projeto**

### **3.1 - Dashboard do Vercel**
Você verá esta tela:

```
┌────────────────────────────────────────┐
│ VERCEL Dashboard                       │
├────────────────────────────────────────┤
│                                        │
│ Welcome! Let's create something new    │
│                                        │
│ [+ Add New]                            │
│     └─ Project                         │
│        Integrations                    │
│        Team                            │
│                                        │
│ My Projects (empty)                    │
│                                        │
└────────────────────────────────────────┘
```

### **3.2 - Clicar em "Add New"**
- Clique em **"Add New"** → **"Project"**

### **3.3 - Selecionar seu repositório**
Verá uma lista dos seus repositórios GitHub:

```
┌────────────────────────────────────────┐
│ Import Git Repository                  │
├────────────────────────────────────────┤
│ Recent Repositories:                   │
│                                        │
│ ☑ gape-site                           │
│   github.com/SEU_USUARIO/gape-site    │
│   [Import]                             │
│                                        │
│ ☐ outro-projeto                       │
│                                        │
└────────────────────────────────────────┘
```

Clique em **"Import"** no seu projeto.

### **3.4 - Configurar o projeto**
Uma tela de configuração abre:

```
┌──────────────────────────────────────────┐
│ Configure Project                        │
├──────────────────────────────────────────┤
│                                          │
│ Project Name:                            │
│ [gape-site                            ]  │
│                                          │
│ Root Directory:                          │
│ [.                                    ]  │
│                                          │
│ Framework Preset:                        │
│ [Vite                 ▼]                │
│                                          │
│ Build and Output Settings                │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                          │
│ Build Command:                           │
│ [npm run build                        ]  │
│                                          │
│ Output Directory:                        │
│ [dist                                 ]  │
│                                          │
│ Install Command:                         │
│ [npm install                          ]  │
│                                          │
│                 [Deploy]                 │
│                                          │
└──────────────────────────────────────────┘
```

**Verifique que está assim:**
- ✅ **Build Command:** `npm run build`
- ✅ **Output Directory:** `dist`
- ✅ **Framework Preset:** `Vite`

---

## 🎉 **Passo 4: Deploy (Publicar)**

### **4.1 - Clicar em Deploy**
Clique no botão **"Deploy"** na tela anterior.

### **4.2 - Aguardando deploy**
Verá uma tela assim:

```
┌────────────────────────────────────────┐
│ Deploying...                           │
├────────────────────────────────────────┤
│                                        │
│ ⟳ Building...                          │
│   └─ npm run build                     │
│      └─ Running install script...      │
│      └─ Compiling source code...       │
│                                        │
│ ⟲ Uploading [████████░░░░░░] 60%      │
│                                        │
│ Estimated time: 2 minutes              │
│                                        │
└────────────────────────────────────────┘
```

### **4.3 - Sucesso! 🎉**
Quando terminar, verá:

```
┌────────────────────────────────────────┐
│ ✅ Production Deployment Success       │
├────────────────────────────────────────┤
│                                        │
│ Your site is live!                     │
│                                        │
│ URL:                                   │
│ 🔗 https://gape-site.vercel.app      │
│                                        │
│ Visit Site  │  View Deployments       │
│                                        │
└────────────────────────────────────────┘
```

✅ **Pronto! Seu site está online!**

---

## 🔄 **Atualizações Futuras (Automáticas)**

Toda vez que você fizer mudanças:

```bash
git add .
git commit -m "Descrever mudança"
git push
```

O Vercel **automaticamente**:
1. Detecta o push
2. Faz build
3. Publica a nova versão

Sem precisar fazer nada mais! ✨

---

## 🆘 **Problemas Comuns**

### **❌ "Build failed"**
- Verifique se não tem erros em `npm run dev`
- Rode: `npm run build` localmente para testar

### **❌ "Página em branco"**
- Verifique se os arquivos em `public/` existem
- Confirm `vite.config.js` está correto

### **❌ "Pages não carregam"**
- Isso é normal em React Router
- Você pode precisar de configuração especial de rotas

---

## 📊 **Seu Site Agora tem:**

✅ URL pública: `gape-site.vercel.app`  
✅ SSL/HTTPS automático  
✅ Deploy automático com cada `git push`  
✅ Analytics e logs grátis  
✅ Domínio customizado (opcional)  

---

## 🎓 **Próximos Passos (Opcional)**

### **Usar domínio próprio:**
1. No Vercel → Project Settings → Domains
2. Adicione seu domínio (ex: `gape.com`)
3. Configure DNS conforme instruções

### **Variáveis de ambiente:**
Se precisar de chaves API secretas:
1. Settings → Environment Variables
2. Adicione suas chaves

---

**Pronto! Seu site GAPE está publicado! 🚀**

---

*Dúvidas? Veja a documentação completa em [vercel.com/docs](https://vercel.com/docs)*
