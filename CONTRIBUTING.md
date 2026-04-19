# Guia de contribuição

Obrigado por contribuir com o projeto HR Colchões.

## Fluxo de trabalho

1. **Crie uma branch** a partir de `main`:
   ```bash
   git checkout -b feat/minha-feature
   ```
   Prefixos sugeridos: `feat/`, `fix/`, `refactor/`, `docs/`, `chore/`.

2. **Rode localmente** antes de enviar:
   ```bash
   npm install
   npm run lint
   npm run test
   npm run build
   ```

3. **Abra um Pull Request** para `main` seguindo o template. Descreva:
   - O que mudou e por quê.
   - Como testar (golden path e edge cases).
   - Screenshots/GIFs para mudanças visuais.

## Padrões

### Dados de produto

Sempre edite `src/data/products.ts` — **nunca** hardcode produtos em componentes.

### SEO

Toda página deve usar o componente `SEOHead`. Se a rota for nova, atualize o sitemap via `npm run generate:sitemap`.

### Estilos

- Tailwind utility classes + variáveis HSL (`--primary`, `--border`, etc.).
- Use `cn()` de `@/lib/utils` para classes condicionais.
- Não edite arquivos em `src/components/ui/` manualmente — são primitivos shadcn/ui.

### CTA

Todo CTA comercial vai para WhatsApp: `https://wa.me/5551984910838`.

### Commits

Mensagens curtas no imperativo. Exemplos:

- `feat: adiciona página de privacidade LGPD`
- `fix: corrige alt text do hero`
- `chore: atualiza dependências menores`

## Checklist de PR

- [ ] Lint passando (`npm run lint`)
- [ ] Testes passando (`npm run test`)
- [ ] Build passando (`npm run build`)
- [ ] SEO: título e descrição definidos em nova rota
- [ ] Acessibilidade: alt em imagens, contraste adequado, hierarquia de headings
- [ ] Sem segredos / chaves no código

## Dúvidas

Abra uma issue ou chame o responsável técnico.
