# SDD — Landing page FaltaOquê?

**Status:** primeira versão consolidada com o usuário; conteúdo final e implementação devem ser conferidos contra o aplicativo mobile.

## 1. Objetivo deste documento

Registrar a arquitetura e os requisitos da landing page do FaltaOquê? em um documento próprio, separando o que já é observável no código do que ainda precisa de confirmação. O documento será ampliado por etapas com o usuário.

## 2. Contexto e fontes

- **Este projeto:** `faltaOque.landing`, landing page em Next.js.
- **Projeto referenciado:** `C:\Users\Miguelz\Documents\Codes\Senai\TCC\faltaoque.Mobile`. O app mobile é a referência funcional e visual do produto; seu código, documentação e assets podem ser consultados para conferir telas, marca e comportamento.
- **Assets mobile úteis:** `faltaoque.Mobile/src/assets/branding/` (ícone, logo e foreground do ícone), `faltaoque.Mobile/src/assets/grocery/` (imagem de alimentos) e `faltaoque.Mobile/src/assets/icons/` (ícones React Native). Os recursos usados pela landing ficam em `src/assets/`; capturas atuais do app ainda precisam ser preparadas para a galeria.
- **Fontes consultadas no mobile:** `README.md`, `docs/project/overview.md`, `docs/project/decisions.md`, `docs/project/current-state.md` e `docs/architecture/mobile.md`. Esses documentos descrevem o app mobile; não definem automaticamente os requisitos da landing.
- **Catálogo de referência de design:** [UI Skills](https://www.ui-skills.com/), de onde foi escolhida a skill `frontend-design`.

## 3. Produto e objetivo da página

O FaltaOquê? é um aplicativo para organizar despensas, produtos e listas de compras, com acompanhamento de estoque, validade, histórico e gastos. A landing existente apresenta o produto, demonstra partes da experiência do aplicativo e encaminha visitantes para ações relacionadas ao app.

O público principal são pessoas que desejam organizar a despensa e as compras de casa. A conversão principal é o download do aplicativo Android. A comunicação apresenta os benefícios do produto; o contexto acadêmico fica em segundo plano. Mensagem central: **organizar a despensa e as compras em um só lugar**.

## 4. Estado atual observado

### 4.1 Stack e entrega

- Next.js 15 com App Router, React 19 e TypeScript.
- Sass/SCSS Modules para estilos e ícones como componentes TSX em `src/assets/icons/`.
- Configuração `output: 'export'`, com imagens não otimizadas para permitir exportação estática.
- Fontes declaradas: Inter e Plus Jakarta Sans.

### 4.2 Composição da página

`src/app/page.tsx` renderiza a landing com cabeçalho, apresentação, funcionalidades, explicação de funcionamento, informações sobre o projeto e equipe, FAQ, chamada para download e rodapé.

### 4.3 Integração e conteúdo

- A landing usa a marca e a ilustração de compras do aplicativo; a galeria de capturas reais continua pendente.
- O app mobile usa React Native e Expo; sua arquitetura organiza interface, serviços, domínio e repositórios. A landing é um frontend separado e não compartilha componentes React Native.
- Afirmações de impacto, economia, avaliações, disponibilidade, links de download e funcionalidades apresentadas na landing precisam ser confirmadas antes de serem tratadas como fatos do produto.

## 5. Decisões para a primeira versão

### Conteúdo e conversão

1. Apresentação do benefício central e chamada para download.
2. Benefícios e funcionalidades do aplicativo.
3. Telas reais e atuais do app.
4. Explicação de como usar.
5. Seção discreta sobre as tecnologias relevantes do app e da landing.
6. FAQ, incluindo orientações para instalar o APK no Android.
7. Chamada final para download e rodapé com o [repositório do app](https://github.com/falta-o-que/faltaoque.Mobile).

O destino informado para os botões de download é `https://github.com/falta-o-que/faltaoque.Mobile/releases/download/v1.0.0/FaltaOque.apk`. Explicar que o Android pode solicitar autorização para instalar aplicativos da fonte usada. A publicação na Vercel ficará a cargo do usuário. A primeira versão será em português brasileiro; organizar os textos para facilitar futuras traduções.

Apresentar a organização da despensa e validade, listas de compras, leitura do QR Code de nota fiscal, dashboard e sugestões de mercado. Explicar que as comparações usam preços estimados a partir do histórico de compras e que os valores podem variar. Incluir compartilhamento de despensas e listas conforme solicitado: a documentação mobile consultada registra que a função ainda depende de backend, e o usuário prevê sua implementação na próxima semana. Conferir a disponibilidade antes da publicação.

Podem ser usados relatos breves e anônimos, fiéis às respostas recebidas. O formulário fornecido em `C:\Users\Miguelz\Downloads\TCC_FaltaOquê_.PDF` registra cinco respostas; o usuário relata que mais de 20 pessoas testaram o app. Não estender os resultados do formulário a todas elas nem inventar depoimentos ou índices de satisfação. Estatísticas externas podem contextualizar o problema com fonte, data e escopo, sem atribuir ao produto efeitos não medidos. Por exemplo, a [UNEP](https://www.unep.org/en/news-and-stories/press-release/world-squanders-over-1-billion-meals-day-un-report) estima que domicílios responderam por 60% do desperdício medido em domicílios, serviços de alimentação e varejo em 2022.

### Design e experiência

- Reformular a página para uma apresentação limpa e objetiva, com menos informação por seção. Usar marca, cores e telas do mobile como referências principais, adaptadas à web.
- Avaliar os componentes e assets atuais antes de aproveitá-los e buscar os recursos necessários no projeto mobile. Selecionar capturas atuais de despensa, listas, nota fiscal, dashboard e sugestões de mercado, com dados adequados à divulgação.
- Construir uma interface responsiva para celulares, tablets e computadores, com textos legíveis e controles fáceis de usar. Garantir navegação por teclado, foco visível, textos alternativos úteis, contraste legível e respeito à preferência por movimento reduzido.
- O simulador fica para uma etapa posterior; se incluído, deve corresponder ao aplicativo visualmente e em funcionamento.

### Arquitetura e código

- Manter Next.js 15, React 19, TypeScript, Sass com SCSS Modules e exportação estática. Organizar a aplicação em `src/app`, `src/components`, `src/styles` e `src/assets`, com imagens em `src/assets/images` e ícones TSX em `src/assets/icons`.
- Centralizar cores e outros valores compartilhados em variáveis, componentizar e reutilizar componentes quando fizer sentido, sem criar abstrações artificiais para pequenas repetições. Componentes React Native não são diretamente reutilizáveis na web.
- Nomear novos identificadores em inglês, de forma clara e consistente com as convenções do projeto. Booleanos devem expressar a condição; evitar abreviações e prefixos redundantes, inclusive `is` e `has` quando não acrescentarem significado.
- Não renomear automaticamente identificadores existentes em português; fazê-lo apenas quando necessário e com aprovação, preservando a compatibilidade.
- Evitar comentários, exceto para decisões técnicas, comportamentos não evidentes ou exigências legais. Evitar verificações defensivas redundantes e duplicações desnecessárias.
- Adicionar implementações ao final da estrutura correspondente, respeitando a organização existente; não deslocar métodos existentes sem necessidade técnica.
- Não incluir analytics nesta versão; a medição de visitas e cliques pode ser avaliada depois.

## 6. Critérios de aceite

- A página apresenta o benefício central e oferece o download do APK em destaque no início e no encerramento.
- Explica as funcionalidades e apresenta telas atuais, tecnologias, FAQ e orientações de instalação.
- A disponibilidade do compartilhamento é conferida antes da publicação, e estimativas de mercado são identificadas como tais.
- Relatos são anônimos e fundamentados; estatísticas externas incluem contexto e fonte.
- A interface funciona em celular, tablet e desktop, incluindo navegação por teclado e foco visível.
- A implementação segue a stack e os padrões definidos neste documento e gera uma exportação estática compatível com a publicação prevista.

## 7. Limites conhecidos

- Este SDD cobre a landing page; não especifica nem altera a arquitetura do aplicativo mobile.
- A presença de uma seção ou interação no código atual registra o estado implementado, não necessariamente um requisito aprovado.
- O contrato de backend, captura de leads, domínio e links legais da landing ainda não foram definidos neste documento. Analytics fica fora da primeira versão; a publicação será feita pelo usuário na Vercel.

## 8. Pendências para implementação

1. Selecionar e preparar capturas atuais, relatos e texto final do FAQ.
2. Confirmar a disponibilidade do compartilhamento e validar o link do APK na versão a ser publicada.
3. Definir composição, tipografia, cores e interações a partir da identidade mobile.
4. Confirmar o domínio e eventuais links legais necessários para a publicação.
