# kenzie_agenda_backend

## Endpoints
### **POST/users**
* Cria um usuário contendo os seguintes dados: 
  * **nome completo**,
  * **email**,
  * **telefone**,
  * **senha**
* Não é possível criar um novo usuário com email já cadastrado.

### **POST/login**
* Realiza login de usuário cadastrado com os seguintes dados:
  * **email**
  * **senha**

### **GET/users/:id**
* Retorna o usuário passado por 'id'.

### **PATCH/users/:id**
* Atualiza os dados do usuário passado por 'id'.
  
### **DELETE/users/:id**
 * Exclui o usuário passado por 'id'.
 
### **POST/contacts**
* Cria um novo contato para usuário logado com os seguintes dados: 
  * **nome completo**,
  * **email**,
  * **telefone**

### **GET/contacts**
* Retorna uma lista com todos os contatos do usuário logado.

### **GET/contacts/:id**
* Retorna o contato passado por 'id'.

### **PATCH/contacts/:id**
* Atualiza o contato passado por 'id'.

### **DELETE/contacts/:id**
* Exclui o contato passado por 'id'.
