# Briefing — Site Catálogo da Peter (Claude Code)

Cole este documento no início do projeto no Claude Code. Ele define o conceito, a experiência, a estrutura e o escopo do site catálogo da Peter Brinquedos Educativos. Materiais de marca (manual, logos, aplicações, artes de produto) e a base de produtos extraída dos PDFs dos fornecedores entram junto.

---

## 1. O que é este site (visão)

Não é um e-commerce comum. É a **vitrine digital da Peter**: um ambiente de marca, quente e curado, que faz a pessoa sentir que entrou na loja física da Peter (madeira clara, luz suave, prateleiras iluminadas, o urso presidindo, chão navy, detalhes verde-água). A referência visual é loja premium de brinquedo de madeira, não site de sistema.

Dois objetivos, nesta ordem:

1 - **Reforço de marca.** A pessoa navega e sente a Peter: curadoria, cuidado, propósito. Cada tela respira a identidade nova.
2 - **Navegação e orçamento fáceis.** A pessoa explora o catálogo por idade e por curadoria, monta um orçamento e vai pro WhatsApp com o pedido pronto.

Não vende dentro do site. O fechamento é uma conversa no WhatsApp.

## 2. Princípios de experiência (inegociáveis)

1 - **Sem pedido mínimo.** Ninguém é barrado. A pessoa entra pra explorar.
2 - **Sem checkout de pagamento.** O carrinho é um "orçamento", não uma compra.
3 - **Sem formulário.** A pessoa não preenche dados. Do carrinho, vai direto pro WhatsApp com a mensagem montada.
4 - **Navegação acima de tudo.** O site tem que ser gostoso e fácil de percorrer. A curadoria guia a pessoa, em vez de despejar uma grade enorme de produtos.
5 - **Conceitual, fora do padrão.** Nada de template genérico. Micro-interações sutis, o urso espiando nos cantos, texturas quentes, muito respiro. Divertido sem virar camelô.

## 3. Público e fluxo

1 - **Foco principal: escolas** (rede pública e particular de ensino infantil). É a força e a confiança da Peter. A comunicação e a curadoria falam com quem compra pra escola.
2 - **Consumidor final: aberto, mas secundário.** Hoje a entrega é feita pela própria Peter, então não há logística para muitos pedidos pulverizados. A entrega para consumidor final via parceiro está em desenvolvimento. Por isso, neste primeiro momento, todos (escola ou consumidor) seguem o mesmo fluxo simples: montar orçamento e falar no WhatsApp. Sem distinção de fluxo agora.

## 4. Arquitetura de navegação

Três eixos de descoberta, combináveis como filtros:

1 - **Por idade (eixo principal, herói da home):** 0-2 anos, 3-5 anos, 6+ anos. É o jeito mais natural de quem compra pra criança escolher. Na home, esses três viram "portas" grandes e quentes, como caminhar até as prateleiras da loja.
2 - **Por categoria:** as categorias reais dos catálogos (blocos e encaixe, alfabetização, madeira, jogos, motores/ride-on, faz de conta, música, etc.). Definidas a partir da base extraída dos PDFs.
3 - **Por curadoria (o diferencial da Peter):**
   - O que desenvolve: coordenação, lógica, linguagem, criatividade, socialização.
   - Tipo de brincadeira: encaixar, construir, faz de conta, jogos, ar livre.
   - Material: madeira, EVA, plástico.

Extra que vale muito: um selo **"usado por escolas"** em produtos que escolas usam, reforçando confiança.

## 5. Páginas

1 - **Home.** Entrada imersiva na "loja Peter". Topo com o emblema/mascote e uma chamada curta da marca. Abaixo, as três portas de idade (0-2 / 3-5 / 6+) grandes e convidativas. Depois, uma faixa de destaques em formato de "prateleira" (scroll horizontal), uma seção curta contando a curadoria da Peter (diversão com propósito), e o selo de confiança das escolas. CTA de WhatsApp sempre acessível.
2 - **Catálogo / categoria.** Grade de produtos com os filtros de idade, categoria e curadoria na lateral ou topo. Cards de produto no padrão de arte da marca (ver seção 7). Busca por nome.
3 - **Produto.** Foto grande (arte co-branded), nome, descrição, faixa de idade, o que desenvolve, material, preço, e botão "adicionar ao orçamento". Sugestões relacionadas por idade ou habilidade.
4 - **Meu orçamento (carrinho).** Lista dos itens, quantidades ajustáveis, subtotal calculado. Botão grande "enviar orçamento no WhatsApp". Opcional: régua de desconto por quantidade (ver seção 6).
5 - **Sobre a Peter.** Página curta de marca: quem é a Peter, a curadoria, o compromisso com escolas, o slogan. Pode usar as aplicações da marca como galeria.

## 6. Do carrinho para o WhatsApp

O carrinho vive no navegador da pessoa (localStorage). O botão de finalizar monta um link `https://wa.me/<numero>?text=<mensagem>` com o pedido pronto. O número já está configurado no projeto da Peter no Claude Code.

Formato sugerido da mensagem:

```
Olá! Montei um orçamento no site da Peter 🧸

- [Nome do produto] (cód. XXXX) — Qtd: 2
- [Nome do produto] (cód. XXXX) — Qtd: 1

Subtotal: R$ XXX,XX
Gostaria de finalizar ou tirar dúvidas!
```

**Desconto por quantidade (opcional, pode entrar em fase 2):** por total de itens no carrinho, algo como 3+ itens 5%, 5+ itens 10%, 8+ itens 15%, com um empurrão visível ("faltam 2 itens pra 10%"). Os percentuais são calibrados com a margem da Peter antes de ligar.

## 7. Identidade visual aplicada

Base da marca (do manual): azul-marinho **#00355D**, verde-água **#00E4AB**, apoios azul **#0071C7** e verde **#00BA8B**. Tipografia: **Molypop** (nome e títulos) e **Montserrat** (textos). Emblema (urso no arco) e logotipo conforme o manual, sem inventar terceira forma.

Para o ambiente quente da "loja", estender a paleta com neutros:

1 - Base creme / off-white para os fundos, no lugar de branco puro, pra dar calor.
2 - Tons de madeira clara como textura de apoio (prateleiras, cards, seções), inspirados nas fotos da loja.
3 - Seções em navy cheio como respiro e contraste, com verde-água pontual.

Motivos recorrentes: o urso espiando em cantos e transições, o arco do emblema como forma de moldura, luz suave e sombras leves. Micro-interações sutis no hover e ao adicionar item.

## 8. Estrutura de dados do produto

Cada produto na base (um JSON) tem:

```
{
  "sku": "1060",
  "nome": "Cross Up",
  "descricao": "Quadriciclo de passeio, guiar e pedalar.",
  "preco": 000.00,
  "idade": "12-24m",          // mapeada para a faixa 0-2 / 3-5 / 6+
  "categoria": "ride-on",
  "desenvolve": ["coordenacao", "equilibrio"],
  "brincadeira": ["ar-livre"],
  "material": "plastico",
  "fornecedor": "calesita",
  "usado_por_escolas": true,
  "imagem": "cross-up.jpg",        // arte co-branded (site/redes)
  "imagem_limpa": "cross-up-feed.jpg" // versão limpa (feed Meta)
}
```

A base sai da extração dos PDFs dos fornecedores (ver seção 10). Faixa de idade do produto mapeia para as três portas da home.

## 9. Stack técnica

1 - **Site estático**, sem backend e sem banco. Produtos num JSON, carrinho no localStorage.
2 - **Deploy** no domínio já configurado da Peter (www.peterbrinquedos.com.br) no mesmo esquema atual (Vercel). Subdomínio/host conforme já definido no projeto do Claude Code.
3 - **WhatsApp** via link wa.me com a mensagem montada. Número já no projeto.
4 - Responsivo, mobile-first (a maioria vai acessar pelo celular).
5 - Performático: imagens otimizadas, carregamento leve.

## 10. Reaproveitamento (já existe, usar)

1 - **Manual da marca** (cores, fontes, logo, regras) — fonte de verdade visual.
2 - **Mais de 20 aplicações da marca** — usar nas seções de marca e na página Sobre.
3 - **Motor de artes de produto** (padrão já aprovado: produto nítido, fundo borrado e escurecido, badge de idade, faixa de co-branding Peter + fornecedor). Ele gera as duas versões de cada produto (co-branded pro site, limpa pro feed).
4 - **Base de produtos dos PDFs** — extrair nome, descrição, preço, foto, idade, categoria e as tags de curadoria. É o passo que dá mais trabalho e destrava o site inteiro. Fazer primeiro.

## 11. Fora de escopo agora (e fases futuras)

Não construir neste momento:

1 - Pagamento / checkout no site.
2 - Formulário de cadastro ou login.
3 - Pedido mínimo.
4 - Integração de logística / frete (entrega para consumidor final via parceiro está em desenvolvimento).

Fases futuras possíveis: desconto por quantidade automático, modo "sou escola" com orçamento em volume, busca por presente, kits por idade, favoritos, e integração de entrega quando o parceiro estiver definido.

## 12. Ordem de construção sugerida

1 - Extrair e limpar a base de produtos dos PDFs (nome, preço, foto, idade, categoria, curadoria) num JSON.
2 - Rodar o motor de artes em lote sobre a base (as duas versões por produto).
3 - Montar o sistema visual do site (cores, fontes, componentes, o ambiente quente).
4 - Home com as portas de idade e as seções de marca.
5 - Catálogo com filtros (idade, categoria, curadoria) e busca.
6 - Página de produto.
7 - Carrinho / orçamento com o envio pro WhatsApp.
8 - Página Sobre.
9 - Responsivido, otimização e deploy no domínio da Peter.

---

**Resumo do espírito:** a pessoa entra, sente a Peter, explora sem atrito por idade e curadoria, monta um orçamento e cai no WhatsApp com tudo pronto. Marca em primeiro lugar, navegação sem fricção, zero burocracia.
