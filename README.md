
<h1 align="center">
  Stock Price App
</h1>

<h4 align="center">Aplicação desenvolvida utilizando typescript/react para consultar informações sobre ações americanas</h4>
<p align="center">
  <a href="#como-executar">Como executar</a> •
  <a href="#funcionalidades">Funcionalidades</a> •
  <a href="#a-desenvolver">A desenvolver</a>
</p>

## Link demo
https://stock-price-app-five.vercel.app/

![](https://github.com/razevedocosta/stock-price-app/blob/master/src/assets/login.png)

![](https://github.com/razevedocosta/stock-price-app/blob/master/src/assets/dashboard.png)

![](https://github.com/razevedocosta/stock-price-app/blob/master/src/assets/company.png)

## Como executar
- fazer um clone do projeto para o seu computador
- no diretório raiz, executar **yarn install** para baixar todas as dependências
- **yarn start** para rodar a aplicação e acessar pelo navegador

## Funcionalidades
- consulta à api externa (https://iexcloud.io/)
- busca por ações e listagem de notícias
- tratamento de erros do input
- plotagem do preço usando recharts (http://recharts.org/en-US)
- navegação entre rotas
- salvar na local storage do navegador
- criação de componentes (https://styled-components.com)
- modal para cadastro de ordens de compra/venda
- listagem de ordens a partir do arquivo db.json

## A desenvolver
- ajustes de layout para versão mobile (react native)
- exibir preços atualizados, variação percentual, banner de cotação
- selecionar intervalos para exibição no gráfico (dia, semana, mês, ano)
- páginas de Profile e Configurações
- funcionalidade de login/logout e cadastro de usuário
- sumário da carteira com valor de custo, atual e porcentagem 
