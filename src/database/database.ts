import pg from "pg";

const { Pool } = pg;
const {
    POSTGRES_USERNAME,
    POSTGRES_PASSWORD,
    POSTGRES_HOST,
    POSTGRES_PORT,
    POSTGRES_DATABASE,
} = process.env;

const configDatabase = new Pool ({
 host: POSTGRES_HOST || "localhost",
 port: parseInt(POSTGRES_PORT) || 5432,
 user: POSTGRES_USERNAME || "postgres",
 password: POSTGRES_PASSWORD || "desenho1",
 database: POSTGRES_DATABASE || "random-people"
});

export default configDatabase;


