import dayjs from "dayjs"
import pino from "pino"

import config from "@root/config"

import { Env } from "@interfaces/env"
import { Level } from "@interfaces/helpers/logger.interface"

const getLevelByEnv = (env: Env): Level => {
    switch (env) {
        case Env.Production:
            return Level.Error
        case Env.Development:
            return Level.Debug
        case Env.Test:
            return Level.Error
        default:
            return Level.Trace
    }
}

const timestamp = () => {
    return config.env === Env.Production ? `,"time":"${dayjs().format("DD.MM.YYYY HH:mm:ss")}"` : ""
}

const formatters = {
    level(label: string) {
        return { level: label }
    },
    bindings() {
        return { env: config.env }
    }
}

const logger = pino({
    level: getLevelByEnv(config.env),
    timestamp,
    formatters
})

export default logger
