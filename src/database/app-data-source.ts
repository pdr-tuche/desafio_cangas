import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import { MainSeeder } from "../seeds/MainSeeder";

const options: DataSourceOptions & SeederOptions = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [`${__dirname}/../**/entities/*.{ts,js}`],
    migrations: [`${__dirname}/../**/migrations/*.{ts,js}`],
    seeds: [MainSeeder],
};
export const PostgresDataSource = new DataSource(options);

PostgresDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });
