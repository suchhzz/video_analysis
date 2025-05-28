import { Dialect, Sequelize } from 'sequelize';
import configJson from './config/config.json';

interface DbConfig {
    username: string;
    password: string | null;
    database: string;
    host: string;
    dialect: Dialect;
}

interface Config {
    development: DbConfig;
    test: DbConfig;
    production: DbConfig;
}

const env = (process.env.NODE_ENV ?? 'development') as keyof Config;
const config: DbConfig = configJson[env] as DbConfig;

const sequelize = new Sequelize(config.database, config.username, config.password ?? '', {
    host: config.host,
    dialect: config.dialect,
});

export default sequelize;
