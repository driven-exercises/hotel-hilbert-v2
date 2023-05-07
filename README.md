# Hotel Hilbert v2

### Antes de iniciar

Prepare seu ambiente para executar os códigos da API, para isso, abra o terminal na pasta desse exercício e digite o comando:
```
npm install
```
Isso irá instalar as dependencias do projeto.

Ainda no terminal digite o comando:
```
cd database-join-7a7ce1c6/
```
Para entrar na pasta de criação do banco de dados, agora nessa pasta, digite o seguinte comando para criar o banco:
```
sudo bash ./create-database
```
Para finalizar, volte uma pasta no terminal:
```
cd ..
```

Entre manualmente na pasta database em src e acesse o arquivo database.js. Nele altere a senha do banco de "SUA_SENHA_TOP" para a senha que você criou para o seu banco de dados local
> Pronto, agora você está pronto(a) para ajudar o hotel!

### Enunciado

Refatore a rota **GET** `/allocations` para utilizar JOINs encadeados no lugar de fazer três queries diferentes.
