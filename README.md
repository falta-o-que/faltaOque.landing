# 🥗 FaltaOquê? — Landing Page Oficial (TCC SENAI)

Landing page responsiva e interativa desenvolvida para o projeto **FaltaOquê?** — Sistema Inteligente de Gerenciamento de Despensa, Listas de Compras Automáticas e Dashboards Financeiros.

Construído estritamente de acordo com as especificações: **Next.js + Sass puro (SCSS Modules) em TypeScript**, com suporte completo a build estático (`output: 'export'`).

---

## 🎨 Identidade Visual & Design System

A identidade visual foi extraída diretamente das telas e da documentação do aplicativo:
- **Cor Primária**: Tons de Verde Vibrante e Esmeralda (`#16a34a`, `#22c55e`, `#15803d`, `#f0fdf4`) representando frescor dos alimentos, organização e sustentabilidade.
- **Tons de Contraste & Estrutura**: Deep Slate / Navy (`#0f172a`, `#1e293b`) presentes no cabeçalho e avatares do app.
- **Cores Semânticas**:
  - 🟢 **Verde (`#16a34a`)**: Em dia / Validade segura.
  - 🟡 **Amarelo / Âmbar (`#d97706`)**: Validade próxima / Atenção (RF 07).
  - 🔴 **Vermelho / Coral (`#dc2626`)**: Em falta / Transferido automaticamente para a lista de compras (RF 14).
- **Tipografia**: Família moderna sem serifa (*Inter* e *Plus Jakarta Sans*) com alto contraste e acessibilidade (RNF 05).
- **Logotipo Vetorial**: Shopping basket com indicador de validade e frescor em SVG de alta resolução.

---

## 🚀 Seções e Recursos Interativos

1. **Header Fixo com Glassmorphism**:
   - Barra de anúncio com selo do SENAI.
   - Navegação suave por âncoras (`#recursos`, `#simulador`, `#calculadora`, `#telas`, `#faq`).
   - Botões de ação para App e Versão Web.
   - Menu hambúrguer animado para dispositivos móveis.

2. **Hero com Smartphone Mockup Interativo**:
   - Releitura fidedigna da tela do app FaltaOquê?.
   - Interatividade real: o visitante pode alterar quantidades de leite, café e azeite com botões `+` e `-`.
   - Se a quantidade chega a 0, ganha badge vermelho "Em Falta" e vai para a lista.
   - Botão para simular escaneamento de Nota Fiscal Eletrônica (NFC-e) via QR Code com animação.
   - Alternância entre aba "Despensa" e "Lista de Compras".

3. **ValueStats (Impacto Mensurável)**:
   - -35% de desperdício alimentar.
   - R$ 380+ de economia média familiar.
   - 5 segundos para cadastrar nota fiscal via QR Code.
   - 100% colaborativo em tempo real.

4. **Funcionalidades Completas com Filtro por Abas**:
   - Despensa Viva & Alertas de Validade (RF 05 a 08).
   - Entrada Inteligente por NFC-e / Barcode / OCR (RF 09 a 12).
   - Lista de Compras Automatizada (RF 14 e 16).
   - Dashboards de Gastos e Variação de Preços (RF 17).
   - Múltiplas Despensas com Cores e Convites via Link (RF 02, 03, 04 e Regras de Negócio).
   - Calculadora Integrada de Preço por Peso / Litro.

5. **Simulador Interativo da Despensa (Arena de Demonstração)**:
   - Permite ao visitante testar a lógica central do sistema:
   - Ao zerar um item na despensa, ele automaticamente aparece na lista da próxima compra.
   - Ao clicar em "Comprei", ele é reabastecido na despensa.
   - Visão lado a lado ou foco em painel único.

6. **Calculadora Nativa de Economia**:
   - **Aba 1 (Comparador de Preço por Kg / Litro)**: Compare produtos de tamanhos diferentes (ex: refil vs pote) e descubra qual compensa mais por grama/ml.
   - **Aba 2 (Simulador de Desperdício Familiar)**: Ajuste número de moradores e gastos mensais para ver quanto dinheiro é resgatado por ano.

7. **Galeria de Telas Reais do Aplicativo**:
   - Mockup do app exibindo as telas reais desenvolvidas no projeto: Login, Criação de Despensa com Cores, Despensa Principal, Cadastro de Produtos e Dashboards.
   - Cards explicativos correlacionando cada tela com os Requisitos Funcionais (RFs).

8. **Como Funciona (3 Passos)**:
   - 01: Crie sua despensa e convide quem mora com você.
   - 02: Escaneie o QR Code da nota fiscal.
   - 03: Alertas automáticos e listas geradas no piloto automático.

9. **Tabela Comparativa ("Sem o FaltaOquê vs. Com o FaltaOquê")**:
   - Destaque claro do valor agregado e fim da dor de cabeça das compras manuais.

10. **Depoimentos & Avaliações**:
    - Casos de uso de casais, famílias e repúblicas de estudantes.
    - Citação especial: *"review da sarah: topzera"* (conforme documento).

11. **FAQ Sanfonado (Accordion)**:
    - Perguntas técnicas e práticas com regras de negócio, criptografia de senhas (RNF 02) e funcionamento multiplataforma (RNF 01).

12. **Call To Action & Captura de E-mails**:
    - Formulário para solicitação de acesso antecipado.
    - Links para download do APK Android e acesso Web.

13. **Rodapé Completo**:
    - Créditos ao TCC SENAI, Miguel Silva e equipe.
    - Diretrizes de engenharia e convenções Git seguidas.

---

## 🛠️ Tecnologias Utilizadas

- **Framework**: Next.js 15 (App Router, estático)
- **Linguagem**: TypeScript puro com tipagem estrita
- **Estilização**: Sass Puro (`.scss` com variáveis, mixins e CSS Modules)
- **Ícones**: Lucide React
- **Build**: Estático com exportação direta para pasta `/out`

---

## 💻 Como Rodar Localmente

### Pré-requisitos
- Node.js (v18+)
- npm

### Passos:
```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev

# 3. Acessar no navegador:
# http://localhost:3000
```

### Para Gerar o Build Estático:
```bash
npm run build
```
Os arquivos HTML/CSS/JS estáticos prontos para deploy (Vercel, GitHub Pages, Netlify, Cloudflare Pages ou qualquer servidor Nginx/Apache) estarão na pasta `/out`.

---

## 📌 Padrões de Código e Versionamento (TCC)
- **Commits**: `feat: message`, `fix: message` (Inglês)
- **Branches**: `develop` (desenvolvimento ativo) e `main` (versão estável de produção)
- **Código**: Nomes de componentes e funções em inglês, comentários e textos em português brasileiro.
