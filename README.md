
# Terrenistas - Plataforma de Negociação de Terrenos

**URL**: https://www.terrenistas.com

## Sobre o Projeto

A Terrenistas é uma plataforma que conecta proprietários de terrenos com incorporadores imobiliários, facilitando negociações seguras e transparentes com assessoria jurídica especializada.

### Modalidades de Negociação
- **Venda Direta**: Negocie a venda do seu terreno diretamente
- **Permuta por Unidades**: Troque seu terreno por unidades no empreendimento
- **Sociedade em Conta de Participação**: Forme parceria com incorporadores

## Deploy

O site é automaticamente deployado no GitHub Pages através do GitHub Actions sempre que há mudanças na branch main.

### Configuração do Deploy

1. O workflow está configurado em `.github/workflows/deploy.yml`
2. O domínio customizado `www.terrenistas.com` está configurado no CNAME
3. O build é gerado na pasta `dist` e deployado automaticamente

## Desenvolvimento Local

Para rodar o projeto localmente:

```sh
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Gerar build de produção
npm run build
```

## Tecnologias

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router DOM
- React Query

## Estrutura do Projeto

```
src/
├── components/     # Componentes React
├── pages/         # Páginas da aplicação
├── lib/           # Utilitários
└── hooks/         # Custom hooks
```
