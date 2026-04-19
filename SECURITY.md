# Política de Segurança

## Reportando vulnerabilidades

Se você identificar uma vulnerabilidade de segurança no site da HR Colchões, por favor **não abra uma issue pública**. Em vez disso:

1. Envie os detalhes via WhatsApp (51) 98491-0838 ou por mensagem direta ao responsável técnico.
2. Inclua passos para reproduzir, impacto potencial e, se possível, sugestão de mitigação.

Nosso compromisso:

- Resposta inicial em até **3 dias úteis**.
- Avaliação e plano de mitigação em até **10 dias úteis**.
- Divulgação coordenada após a correção estar em produção.

## Escopo

Em escopo:

- `hrcolchoes.steintechnology.com.br` e subdomínios operados pela HR Colchões.
- Este repositório.

Fora de escopo:

- Engenharia social, phishing contra funcionários.
- Ataques DDoS volumétricos.
- Relatórios automatizados sem evidência de impacto real.

## Versões suportadas

Este é um site estático com deploy contínuo. Apenas a versão atualmente publicada recebe correções.

## Dependências

- `npm audit` é parte do fluxo de manutenção.
- Dependabot monitora dependências em `.github/dependabot.yml`.
