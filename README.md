# kenzie_agenda_backend
A Kenzie Agenda é uma API que simula uma agenda desenvolvida em Express.JS, utilizando TypeORM.

## Instalando dependências
```bash
# Caso use npm
npm run i

# Caso use yarn
yarn
```

## Aplicando migrações e gerando tabelas
```bash
# caso use npm
npm run typeorm migration:run -- -d ./src/data-source.ts

# caso use yarn
yarn typeorm migration:run -d ./src/data-source.ts
```

## Rodando a aplicação localmente
```bash
# caso use npm
npm run dev

# caso use yarn
yarn dev
```

## Rodando a documentação do projeto
```bash
# acessando a pasta da documentação
cd docs

# rode o comando abaixo e acesse o endpoint para visualizar a documentação
npx serve
```

## Endpoints
### **[POST]/users**
* Cria um usuário contendo os seguintes dados: 
  * **nome completo**,
  * **email**,
  * **telefone**,
  * **senha**
* Não é possível criar um novo usuário com email já cadastrado.

### **[POST]/login**
* Realiza login de usuário cadastrado com os seguintes dados:
  * **email**
  * **senha**

### **[GET]/users/:id**
* Retorna o usuário passado por 'id'.

### **[PATCH]/users/:id**
* Atualiza os dados do usuário passado por 'id'.
  
### **[DELETE]/users/:id**
 * Exclui o usuário passado por 'id'.
 
### **[POST]/contacts**
* Cria um novo contato para usuário logado com os seguintes dados: 
  * **nome completo**,
  * **email**,
  * **telefone**

### **[GET]/contacts**
* Retorna uma lista com todos os contatos do usuário logado.

### **[GET]/contacts/:id**
* Retorna o contato passado por 'id'.

### **[PATCH]/contacts/:id**
* Atualiza o contato passado por 'id'.

### **[DELETE]/contacts/:id**
* Exclui o contato passado por 'id'.
