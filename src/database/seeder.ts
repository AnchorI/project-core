import "../aliases"
import path from "path"

import async from "async"

import DB from "@database/connect"
import { orderSeeds } from "@database/seeds"
import { printLine } from "@helpers/print"

import { database } from "@config/database"
import config from "@config/index"

import { Env } from "@interfaces/env"

interface Model {
    model: string
    data: Array<any>
    depends?: string
}

const getValidModelsPaths = (orderSeeds: Array<string>) =>
    orderSeeds.reduce((acc: Array<string>, seed: string) => {
        const seedsDir = path.normalize(`${__dirname}/seeds`)
        const seedFile = path.join(seedsDir, `${seed}.ts`)

        return [...acc, seedFile]
    }, [])

const main = () => {
    if (process.env.NODE_ENV !== Env.Test) return

    DB.sequelize
        .sync({ force: true })
        .then(() => {
            printLine(`DB ${JSON.stringify(database[config.env])}`)

            const validModels = getValidModelsPaths(orderSeeds)

            const modelList = validModels.map(
                async seedFile =>
                    new Promise((resolve, reject) => {
                        import(seedFile)
                            .then(item => {
                                if (item && item.default && item.default.model) {
                                    const { model, depends, data } = item.default
                                    resolve({ model, depends, data })
                                } else {
                                    resolve({})
                                }
                            })
                            .catch(error => {
                                printLine(`Error ${error}`)
                                reject()
                            })
                    })
            )

            Promise.all(modelList).then(models => {
                const modelsQueue = models as Array<Model>

                modelsQueue.forEach(seedModel => {
                    printLine(`- Seed model ${seedModel.model}`)
                })

                async.mapSeries(
                    modelsQueue,
                    async (item: Model) => {
                        try {
                            // @ts-ignore
                            await DB.models[item.model].bulkCreate(item.data)
                        } catch (error) {
                            printLine(`Error ${error}`)
                        }
                    },
                    () => {
                        DB.sequelize.close()
                    }
                )

                printLine(" ")
            })
        })
        .catch(error => printLine(`Error ${error}`))
}

main()
