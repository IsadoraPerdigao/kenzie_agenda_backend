import "dotenv/config";
import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";

const nodeEnv = process.env.NODE_ENV
const dbUrl = process.env.DATABASE_URL!

const DataSourceConfig = (): DataSourceOptions => {
  const entitiesPath = path.join(__dirname, "entities/**.{js,ts}");
  const migrationsPath = path.join(__dirname, "migrations/**.{js,ts}");

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory",
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  if (!dbUrl) {
    throw new Error("Env var DABATASE_URL does not exists");
  }

  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};

const AppDataSource: DataSource = new DataSource(DataSourceConfig());

export { AppDataSource };
