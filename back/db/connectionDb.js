import pg from 'pg';
import { config } from 'dotenv';
config();

const pool = new pg.Pool({
  user: process.env.VAR_USER,
  host: process.env.VAR_HOST,
  database: process.env.VAR_DATABASE,
  password: process.env.VAR_PASS,
  port: process.env.VAR_PORT,
  allowExitOnIdle: true
});

pool.connect((err) => {
  if (err) {
    console.error('Connection error', err.stack);
  } else {
    console.log('Connected to the database');
  }
});

export default pool;