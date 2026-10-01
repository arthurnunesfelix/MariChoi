import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const databaseUrl = process.env.DATABASE_URL;

const globalForDb = globalThis as typeof globalThis & {
  __mariChoiPool?: Pool;
};

function getPool(): Pool | null {
  if (!databaseUrl) return null;
  if (!globalForDb.__mariChoiPool) {
    globalForDb.__mariChoiPool = new Pool({ connectionString: databaseUrl });
  }
  return globalForDb.__mariChoiPool;
}

export const pool = getPool();

/**
 * Banco de dados opcional: em ambientes sem DATABASE_URL (ex.: primeiro deploy
 * na Vercel), `db` fica nulo e a aplicação continua funcionando normalmente.
 */
export const db = pool ? drizzle(pool) : null;
