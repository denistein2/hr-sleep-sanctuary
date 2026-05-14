# Plano de Implementação: Reestruturação de Navegação e Catálogo

## Objetivo
Refatorar a arquitetura do menu de navegação para um modelo hierárquico, implementar uma barra de pesquisa funcional com sugestões no cabeçalho e reorganizar a exibição do catálogo de produtos para priorizar Colchões, Camas e Acessórios.

## Proposed Changes

### 1. Atualização dos Dados de Categorias e Navegação
#### [MODIFY] `src/data/categories.ts`
- Atualizar os nomes das categorias para o plural conforme solicitado (ex: "Colchão" para "Colchões", "Puff" para "Puffs").

#### [MODIFY] `src/data/navigation.ts`
- Substituir a lista simples por uma estrutura hierárquica baseada nas 4 famílias principais:
  - **Linha Dormir**: Colchões, Camas e Box, Cabeceiras e Travesseiros.
  - **Móveis**: Poltronas e Cadeiras.
  - **Acessórios**: Acessórios, Linha Têxtil, Puffs e Tapetes.
  - **Bem-estar & Estilo**: Linha Fitness, Linha Pet e Linha Íntima.

### 2. Header, Mobile Menu e Search Bar
#### [MODIFY] `src/components/Header.tsx`
- **Menu Desktop**: Implementar um "Mega Menu" (painel expandido) ao passar o mouse em "Produtos", exibindo as 4 famílias em colunas com seus respectivos subitens.
- **Menu Mobile**: Transformar a lista atual em um menu estilo acordeão (Accordion), onde tocar em "Produtos" expande as famílias, e tocar nas famílias revela os links.
- **Barra de Pesquisa**:
  - Adicionar um ícone de pesquisa (lupa) e um campo de input.
  - Implementar um estado local para a busca.
  - Exibir um painel de "Sugestões Rápidas" abaixo do input contendo os produtos que dão match com o texto digitado.
  - Caso o usuário aperte "Enter", ele será redirecionado para a página do catálogo filtrada (ex: `/colchoes?q=termo`).

### 3. Lógica do Catálogo
#### [MODIFY] `src/pages/CategoryPage.tsx`
- Alterar a lógica de ordenação das seções (atualmente baseada estritamente nas "Linhas" de produto).
- Criar grupos lógicos de exibição para garantir a prioridade solicitada:
  1. **Colchões** (Agrupando produtos das linhas Premium e Conforto).
  2. **Camas e Box** (Agrupando produtos da linha Cama).
  3. **Acessórios** (Agrupando produtos da linha Acessorio).
  4. **Demais linhas** (Caso haja produtos não classificados acima).
- Adicionar suporte a um parâmetro de URL (`?q=`) para filtrar o catálogo inteiro, servindo como a "página de resultados" da busca.

## User Review Required
> [!IMPORTANT]
> - O Menu Desktop será implementado em um formato "Mega Menu" (um painel que abre revelando todas as famílias e subitens de uma vez). Isso está de acordo com a sua visão para o "Dropdown Hierárquico"?
> - A pesquisa redirecionará para a página `/colchoes?q=termo` e filtrará os itens mostrados lá. Confirma se essa abordagem para a página de resultados é adequada?

## Verification Plan
1. Verificar no Desktop se o menu "Produtos" exibe as famílias corretamente.
2. Verificar no Mobile se o menu hambúrguer abre um acordeão organizado.
3. Testar a barra de pesquisa digitando um termo (ex: "Diamante" ou "Colchões") para ver as sugestões rápidas.
4. Navegar para o Catálogo e confirmar a ordem visual: Colchões primeiro, seguido de Camas e Acessórios.
