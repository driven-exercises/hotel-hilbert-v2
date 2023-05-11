# Hotel Hilbert v2

### Antes de começar

1. Entre na pasta `database-join-7a7ce1c6` e abra um terminal nela.
        
2. Execute o seguinte comando para criar o banco de dados no seu computador:
        
    ```sql
    sudo bash ./create-database
    ```
        
3. Agora abra um terminal na pasta do back-end e execute o seguinte comando:
        
    ```bash
    npm i # para instalar todas as dependências
    ```

### Enunciado

Refatore a rota **GET** `/allocations` para utilizar JOINs encadeados no lugar de fazer três queries diferentes.

Estrutura das tabelas:

- `rooms`: quartos do hotel
    - `id`, inteiro gerado automaticamente pelo banco de dados
    - `name`, string que representa o nome do quarto
- `guests`: pessoas que já se hospedaram/estão hospedadas
    - `id`, inteiro gerado automaticamente pelo banco de dados
    - `name`, string que representa o nome do hóspede
- `allocations`: histórico de hospedagem que liga um quarto a um cliente num determinado período de tempo
    - `id`, inteiro gerado automaticamente pelo banco de dados
    - `roomId`, inteiro com id do quarto usado
    - `guestId`, inteiro com id do hóspede
    - `startDate`, data com início da hospedagem
    - `endDate`, data com final da hospedagem
