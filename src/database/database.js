import pg from "pg";
const { Pool } = pg;

const configDatabase = {
  connectionString:
    "postgres://postgres:SUA_SENHA_TOP@localhost:5432/exercicio_join_encadeado_7a7ce1c6",
};

export const db = new Pool(configDatabase);


