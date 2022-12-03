import Sequelize, { Sequelize as SequelizeLogger } from 'sequelize'

import logger from '@helpers/logger'

import { database } from '@config/database'
import config from '@config/index'

import { Env } from '@interfaces/env'

import type { Db, Sql, SqlOptions } from '@interfaces/db'

import * as Models from './models'

const sequelize = new Sequelize.Sequelize(
    database[config.env]?.database || database.default.database,
    database[config.env]?.username || database.default.username,
    database[config.env]?.password || database.default.password,
    {
        host: database[config.env]?.host || database.default.host,
        dialect: database[config.env]?.dialect || database.default.dialect,
        pool: {
            max: 30,
            min: 0,
            acquire: 60000,
            idle: 5000,
        },
        define: {
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
            underscored: true,
            freezeTableName: true,
        },
        logQueryParameters: config.env === Env.Development,
        logging: () => {
            return null
        },
        benchmark: true,
    }
)

if (config.env !== Env.Test) {
    sequelize
        .sync({ alter: false })
        .then(() => {
            logger.info(
                `The database is connected. ${
                    database[config.env]?.host || database.default.host
                }`
            )
        })
        .catch((error: Error) => {
            logger.error(`Unable to connect to the database: ${error}.`)
        })

    // @ts-ignore
    sequelize.query = function (sql: Sql, options?: SqlOptions) {
        return SequelizeLogger.prototype.query
            .apply(this, [sql, options])
            .catch((error) => {
                if (config.env === Env.Production) {
                    // sentry.handleError(`Sequelize Error: ${error.message}. Raw query: ${sql}`)
                }

                logger.error(
                    `Sequelize Error: ${error.message}. Raw query: ${sql}`
                )
            })
    }
}

const DB: Db = {
    sequelize, // connection instance (RAW queries)
    models: {
        Brand: Models.Brand(sequelize, Sequelize.DataTypes),
        BrandImage: Models.BrandImage(sequelize, Sequelize.DataTypes),
        CarModel: Models.CarModel(sequelize, Sequelize.DataTypes),
        CarModelImage: Models.CarModelImage(sequelize, Sequelize.DataTypes),
        Equipment: Models.Equipment(sequelize, Sequelize.DataTypes),
        EquipmentImage: Models.EquipmentImage(sequelize, Sequelize.DataTypes),
        Generation: Models.Generation(sequelize, Sequelize.DataTypes),
        GenerationImage: Models.GenerationImage(sequelize, Sequelize.DataTypes),
        Store: Models.Store(sequelize, Sequelize.DataTypes),
        User: Models.User(sequelize, Sequelize.DataTypes),
        VehiclePhoto: Models.VehiclePhoto(sequelize, Sequelize.DataTypes),
    },
}

Object.keys(DB.models).forEach((item) => {
    // @ts-ignore
    if (DB.models[item].associate) {
        // @ts-ignore
        DB.models[item].associate(DB.models)
    }
})

export default DB
