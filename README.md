# MyPhonebook
- Autor: Guilherme Icaro F Real [@GitHub](https://www.github.com/guilhermeicarofr) [@LinkedIn](https://www.linkedin.com/in/guilhermeicarofr/)
- Tecnologias utilizadas: React.js, Typescript, Next.js, UUID, Styled-Components, MaterialUI, MaterialIcons, Eslint, React-Toastify

#

## Como rodar:
- Primeiro passo - clonar este mesmo repositório para sua máquina:
````
git clone "https://github.com/guilhermeicarofr/front-junior-creativecode-2023"
````
- Segundo passo - dentro da pasta do projeto, criar um arquivo com nome ".env.local" da seguinte forma:
````
USERNAME={insira aqui seu nome de usuario}
PASSWORD={insira aqui sua senha}
````

- As credenciais inseridas no arquivo serão usadas para realizar o login

### Rodar localmente:
- Necessário instalação do Node e NPM na máquina (v19+ recomendado) (veja: https://heynode.com/tutorial/install-nodejs-locally-nvm/)


```bash
npm run dev
```
- A aplicação estará disponível no endpoint http://localhost:3000/

#

## Como utilizar:
- Acesse a tela inicial de login e use as credenciais preenchidas no arquivo .env.local
- Navegue para a lista de contatos usando o botão no inferior da página ou usando a rota [ /contacts ]

- A página de contatos é protegida contra usuários não autorizados, será impossível acessá-la caso não seja um usuário logado

- Na lista de contatos, adicione um novo contato através do botão [CREATE NEW CONTACT]
- Cada contato é composto por:
```
name: string

country code: string iniciada em + e númerica, 1 a 2 digitos

state code: string númerica de 2 digitos

phone number: string númerica de 8 ou mais digitos
```
- Todos os contatos serão exibidos na lista
- Cada contato é armazenado através de um ID único no armazenamento do seu navegador (Local Storage)
- Você pode pesquisar contatos por nome na barra de busca no topo da página, apenas contatos cuja propriedade NAME inicia com a busca digitada serão mostrados na lista
- Para editar um contato, utilize o icone de edição ao lado dos dados do contato
- Para deletar um contato, clique no icone de edição, e na tela de edição selecione o ícone de deletar
