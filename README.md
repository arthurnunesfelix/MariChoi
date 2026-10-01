# Mari Choi — Estética & Dermatologia

Landing page premium da clínica Mari Choi em São Paulo.

**Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript · Drizzle ORM (PostgreSQL opcional)

## Deploy na Vercel

### Opção 1 — Pelo painel da Vercel (recomendado)

1. Suba este projeto para um repositório no GitHub:

   ```bash
   git remote add origin https://github.com/SEU-USUARIO/mari-choi.git
   git push -u origin main
   ```

2. Acesse [vercel.com](https://vercel.com) → **Add New → Project** → **Import** o repositório.
3. A Vercel detecta o Next.js automaticamente — não precisa alterar nada em Build Settings.
4. (Opcional) Em **Environment Variables**, adicione:

   | Variável | Obrigatória? | Descrição |
   | --- | --- | --- |
   | `DATABASE_URL` | Não | Connection string do PostgreSQL (Neon, Supabase ou Vercel Postgres). Sem ela o site funciona normalmente. |
   | `NEXT_PUBLIC_SITE_URL` | Não | URL final do site (ex.: `https://marichoi.com.br`) — melhora o preview de compartilhamento. |

5. Clique em **Deploy**. Em ~1 minuto o site está no ar.

### Opção 2 — Pela CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Domínio personalizado

Depois do deploy: **Project → Settings → Domains** → adicione seu domínio e siga as instruções de DNS. Em seguida, defina `NEXT_PUBLIC_SITE_URL` com o domínio final e faça um novo deploy.

## Desenvolvimento local

```bash
npm install
cp .env.example .env   # opcional
npm run dev            # http://localhost:3000
```

Outros comandos:

```bash
npm run build        # build de produção
npm run typecheck    # checagem de tipos
npm run lint         # lint
```

## Estrutura

```
src/
├── app/
│   ├── page.tsx            # landing page (todas as seções)
│   ├── layout.tsx          # metadados, fontes e idioma
│   ├── globals.css         # tokens de design + animações
│   ├── icon.svg            # favicon
│   └── api/health/route.ts # healthcheck (banco opcional)
├── components/
│   ├── site-header.tsx     # header fixo + menu mobile imersivo
│   ├── faq-accordion.tsx   # FAQ animado
│   └── reveal-controller.tsx # animações de scroll
└── db/                     # Drizzle ORM (opcional)
public/images/              # imagens do site (self-hosted)
```

## Observações

- O site é estático — não depende de banco de dados. O PostgreSQL é usado apenas por `/api/health`.
- Todos os CTAs apontam para o WhatsApp configurado em `src/app/page.tsx` (constante `wa`).
