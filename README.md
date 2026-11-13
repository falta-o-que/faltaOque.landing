# FaltaOquê? — Landing page

Landing page do aplicativo FaltaOquê?, que apresenta os recursos do app e oferece o download para Android.

O aplicativo mobile e sua documentação estão em [falta-o-que/faltaoque.Mobile](https://github.com/falta-o-que/faltaoque.Mobile).

## Tecnologias

- Next.js 15 com App Router e exportação estática
- React 19 e TypeScript
- Sass com SCSS Modules
- Ícones em componentes TSX, com licença em `src/assets/icons/LICENSE.txt`

## Estrutura

```text
src/
├── app/                    Página, layout e estilos globais
├── assets/
│   ├── icons/              Um componente TSX por ícone e export.ts
│   └── images/             Marca e ilustração otimizadas e export.ts
├── components/LandingPage/ Componentes, navegação e animações
└── styles/                 Variáveis de estilo compartilhadas
docs/SDD.md                 Decisões e requisitos da landing
```

As imagens incluem a marca, a ilustração de compras e o favicon quadrado para navegadores e mecanismos de busca. Importe esses recursos por `src/assets/images/export.ts` e os ícones por `src/assets/icons/export.ts`.

## Executar localmente

Requisitos: Node.js e npm.

```bash
npm ci
npm run dev
```

Acesse http://localhost:3000.

## Build de produção

```bash
npm run build
```

A página estática é gerada em `out/`. Para medir desempenho com Lighthouse, use essa versão de produção servida por HTTP; o servidor de desenvolvimento inclui ferramentas e código adicionais.

O compartilhamento de despensas e listas depende da implementação no aplicativo mobile. Confirme sua disponibilidade e o link do APK antes da publicação.

## Equipe

- [Manuela Vitória Barbosa de Andrade](https://github.com/Manuela0894)
- [Miguel Zacharias da Silva](https://github.com/miguelzack)
- [Nikollas Oliveira Andrade dos Santos](https://github.com/nikidsy)
- [Sarah Santos de Jesus](https://github.com/sarahsj-dot)
- [Thiago Soares Coelho da Costa](https://github.com/th-cs)
