import dotenv from "dotenv"
import Joi from "joi"

import { Env } from "@interfaces/env"

dotenv.config()

type Config = {
    env: Env
    port: number
    apiVersion: string
    jwtSecret: string
    postgresHost: string
    postgresDatabase: string
    postgresUser: string
    postgresPassword: string
    testPostgresHost: string
    testPostgresDatabase: string
    testPostgresUser: string
    testPostgresPassword: string
    sslCertificate: string
    sslCertificateKey: string
}

const envVarSchema = Joi.object({
    NODE_ENV: Joi.string().valid(Env.Test, Env.Production, Env.Development).default(Env.Development),
    PORT: Joi.number().default(7777).description("App Port"),

    API_VERSION: Joi.string().default("1.0").description("Api Version"),
    JWT_SECRET: Joi.string().required().description("JWT Secret"),

    POSTGRES_HOST: Joi.string().default("localhost").description("Database Host"),
    POSTGRES_DATABASE: Joi.string().default("database").description("Database Name"),
    POSTGRES_USER: Joi.string().default("root").description("Database User"),
    POSTGRES_PASSWORD: Joi.string().default("").description("Database Password"),

    TEST_POSTGRES_HOST: Joi.string().default("localhost").description("Database Host"),
    TEST_POSTGRES_DATABASE: Joi.string().default("database").description("Database Name"),
    TEST_POSTGRES_USER: Joi.string().default("root").description("Database User"),
    TEST_POSTGRES_PASSWORD: Joi.string().default("").description("Database Password"),

    SSL_CERTIFICATE: Joi.string().allow("").default("").description("SSL certificate file"),
    SSL_CERTIFICATE_KEY: Joi.string().allow("").default("").description("SSL certificate key file"),
})
    .unknown()
    .required()

const { error, value: envVars } = envVarSchema.validate(process.env)

if (error) throw new Error(`Config validation error: ${error.message}`)

const config: Config = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    apiVersion: envVars.API_VERSION,
    jwtSecret: envVars.JWT_SECRET,
    postgresHost: envVars.POSTGRES_HOST,
    postgresDatabase: envVars.POSTGRES_DATABASE,
    postgresUser: envVars.POSTGRES_USER,
    postgresPassword: envVars.POSTGRES_PASSWORD,
    testPostgresHost: envVars.TEST_POSTGRES_HOST,
    testPostgresDatabase: envVars.TEST_POSTGRES_DATABASE,
    testPostgresUser: envVars.TEST_POSTGRES_USER,
    testPostgresPassword: envVars.TEST_POSTGRES_PASSWORD,
    sslCertificate: envVars.SSL_CERTIFICATE,
    sslCertificateKey: envVars.SSL_CERTIFICATE_KEY
}

export default config