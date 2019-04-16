![Logo of the project](./src/assets/logo_mgb.png)

# Metodologia Gustavo Borges &middot; [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)
> Teste Criação de Formulário

Teste feito em Vuejs com ECMA6+.

## Installing / Getting started

Para fazer a instalação do projeto rode o seguinte comando no seu terminal como administrador.

```shell
#install dependecies
npm install
```

É instalada todas as dependências necessárias para a compilação do projeto. É criado o diretório `node_modules`, esse diretório não é versionado pelo Git.

## Em desenvolvimento

### Construindo com
Utilizamos a framework `Vuejs v2.0` para compilação do `JS`. Utilizamos também as bibliotecas de estilo `Bootstrap v4.3.1` e de fonte `Fonte Awesome Free v5.8.1`.

### Pré-requisitos
Para começar a desenvolver esse projeto você precisa ter algumas instalações na sua máquina, são elas:
[1]: [npm](https://www.npmjs.com/package/npm),
[2]: [guia webpack](http://vuejs-templates.github.io/webpack/),
[3]: [vue](https://vuejs.org/),
[4]: [docs for vue-loader](http://vuejs.github.io/vue-loader),
[5]: [node](https://nodejs.org/en/),
[6]: [sass](https://sass-lang.com/)

### Configurando o Desenvolvimento

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone git@github.com:ligiaas/teste-metod-gb.git
cd teste-metod-gb/
npm install
```

Após a instalação rode o comando abaixo para iniciar o programa:
```shell
npm run dev
```
Esse comando informa que o projeto está rodando no `localhost:8080`.

### Building

Para fazer a minificação do projeto para deploy você roda seguinte comando que será salvo na pasta:

```shell
npm run build
./dist
```

Uma versão minificada do projeto é gerada, essa versão que você deverá subir no seu servidor de produção.

### Deploying / Publicando
Após ter gerado o arquivo minificado em `./dist` você deve subir esse diretório no seu servidor de produção. É sugerido que você renomeie a pasta para o nome do projeto ao publicá-la no seu servidor.

```shell
packagemanager deploy your-project -s server.com -u username -p password
```

## Versionamento

Você pode verificar o repositório do projeto em [GitHub](https://github.com/ligiaas/teste-metod-gb) for versioning. For the versions available, see the [vuejs, javascript, localstorage](/tags).


## Configuração

Foram utilizadas as configurações padrões dos pacotes de dependências do projeto. Para mais informações verifique a seção [Pré-requisitos](#Pré-requisitos).

## Testes

Foram feitos testes nos 3 browsers mais utilizados no mercado `Google Chrome Versão 73.0.3683.103 (Versão oficial) 64 bits`, `FireFox Quantum Version 67.0b11 (64-bit)`, `Microsoft Edge v42.17134.1.0`. Todos obtiveram satisfatório.

## Guia de estilos

Foram poucas as alterações do estilo, mantivemos o mais próximo a biblioteca `Bootstrap` por ser poderosa na responsividade. Para manter o conceito de componentização que o `Vuejs` oferece o estilo foi declarado no mesmo fonte. O projeto está responsivo com breakpoint inicial de 488px. Devido a listagem solicitada e a quantidade de dados o projeto está com rolagem horizontal.

## Referências Api

Foram utilizadas as chamadas para consumo de `localStorage`. São elas:

```javascript
const parsed = JSON.stringify(this.alunosList) // Foi utilizado um JSON para que a lista de registro respeitasse a condição do localStorage que só aceita valores em string.
localStorage.setItem('alunosList', parsed) // chamada que você insere dados no localStorage passando chave e valor como parâmetro.

JSON.parse(localStorage.getItem('alunosList')), // chamada que você pega os dados do localStorage passando chave como parâmetro. Como foi inserida como string é preciso fazer a desserialização desse valor para a sua manipulação.
```

## Database

Foi utilizado o `localStorage` para o armazenamento temporário das informações geradas pelo formulário. Foi utilizado também métodos `JSON` para serialização e desserialização dos valores respeitando assim a condição de armazenamento somente de string.