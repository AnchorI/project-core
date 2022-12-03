import type { Dialect } from 'sequelize'

import config from './index'

type DatabaseCredentials = {
    host: string
    database: string
    username: string
    password: string
    dialect: Dialect
}

type EnvDatabaseCredentials = {
    [key: string]: DatabaseCredentials
}

export const database: EnvDatabaseCredentials = {
    default: {
        host: config.postgresHost,
        database: config.postgresDatabase,
        username: config.postgresUser,
        password: config.postgresPassword,
        dialect: 'postgres',
    },
    test: {
        host: config.testPostgresHost,
        database: config.testPostgresDatabase,
        username: config.testPostgresUser,
        password: config.testPostgresPassword,
        dialect: 'postgres',
    },
}
