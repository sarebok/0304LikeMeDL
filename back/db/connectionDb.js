import pg from 'pg';

const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'likeme',
  password: 'metallica',
  port: 5432,
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