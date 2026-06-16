# Coding Ferpa — Site da Comunidade

Landing page da [Coding Ferpa](https://codingferpa.org/), comunidade de tecnologia de Fernandópolis — SP.

**Slogan:** Além do código

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/) (ícones)
- TypeScript

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de produção
npm run lint    # lint
```

## Estrutura de componentes

```
src/
├── app/                        # Rotas e layout Next.js
│   ├── layout.tsx              # Layout raiz, metadata OG/Twitter
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Estilos globais + utilitários
│   └── CODE_OF_CONDUCT/        # Página do código de conduta
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navbar fixa com blur, âncoras e menu mobile
│   │   └── Footer.tsx          # Rodapé com navegação, redes e créditos
│   ├── sections/
│   │   ├── Hero.tsx            # Hero com slogan, CTA e foto da comunidade
│   │   ├── About.tsx           # Quem Somos com pills de valores
│   │   ├── Events.tsx          # Encontros com card do local e CTA WhatsApp
│   │   └── Talks.tsx           # Grid de palestras (dados de cards.json)
│   └── ui/
│       ├── Button.tsx          # Botão reutilizável (primary, secondary, whatsapp)
│       ├── SectionHeading.tsx  # Título de seção com label opcional
│       ├── ScrollReveal.tsx    # Animação de entrada via IntersectionObserver
│       ├── SocialLinks.tsx     # Ícones de redes sociais estilizados
│       ├── TalkCard.tsx        # Card de palestra com avatar/inicial
│       ├── ValuePill.tsx       # Pill visual para valores da comunidade
│       └── EmptyState.tsx      # Estado vazio para palestras
├── lib/
│   └── constants.ts            # URLs externas e dados estáticos centralizados
└── styles/
    └── tokens.css              # Design tokens (cores, tipografia, espaçamento)
```

## Design System

Tokens centralizados em `src/styles/tokens.css`:

| Categoria | Exemplos |
|-----------|----------|
| Cores | `--color-bg-primary` (#0d0d0d), `--color-accent` (#7c3aed), `--color-accent-secondary` (#22d3ee) |
| Tipografia | `--text-heading-1` a `--text-caption` |
| Espaçamento | Múltiplos de 8px (`--space-1` a `--space-7`) |
| Efeitos | `--shadow-glow`, `--radius-lg`, `--transition-base` |

O tema é **dark nativo** com paleta violeta/ciano. Animações respeitam `prefers-reduced-motion`.

## Seções da landing page

1. **Header** — Navbar fixa com links âncora e botão "Participe" (WhatsApp)
2. **Hero** — Logo, slogan "Além do código", CTA, redes sociais e foto da comunidade
3. **Quem Somos** — Missão, valores (Democratizar, Conectar, Crescer) e foto de evento
4. **Nossos Encontros** — Card do Dog King, badge mensal, botão Maps e CTA WhatsApp
5. **Palestras** — Grid de cards dinâmicos a partir de `src/app/assets/cards.json`
6. **Footer** — Navegação, redes sociais, código de conduta e crédito da comunidade

## Palestras

Edite `src/app/assets/cards.json` para atualizar o título da agenda e as palestras:

```json
{
  "title": "Palestras do dia 21/08",
  "talks": [
    {
      "id": 1,
      "title": "Título da palestra",
      "speaker": "Nome do palestrante",
      "description": "Descrição da palestra"
    }
  ]
}
```

Quando `talks` estiver vazio, a seção exibe um estado vazio estilizado.

## Deploy

O site é deployado via GitHub Pages (workflow em `.github/workflows/nextjs.yml`).
