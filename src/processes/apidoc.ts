import '../aliases'
import path from 'path'

import SwaggerParser from '@apidevtools/swagger-parser'
import express from 'express'
import swaggerUi from 'swagger-ui-express'

import { printLine } from '@helpers/print'

import { openApiDocs } from '@config/apidoc'
import config from '@config/index'

import { Env } from '@interfaces/env'

const PORT = 8050

const app = express()

app.get('/', (req, res) => {
    const items = openApiDocs
        .map((apiDoc) => {
            const url = `${req.protocol}://${req.get('host')}${apiDoc.route}`
            const label =
                apiDoc.name !== 'site'
                    ? `/api/${apiDoc.name}`
                    : `/api/${apiDoc.name}/v1.1`

            return `<li><a href="${url}" target="_blank">${label}</a></li>`
        })
        .join('')

    res.send(`<ul>${items}</ul>`)
})

openApiDocs.forEach((apiDoc) => {
    SwaggerParser.bundle(apiDoc.inputPath).then((document) => {
        app.use(
            apiDoc.route,
            swaggerUi.serveFiles(document),
            swaggerUi.setup(document)
        )
    })
    app.use(`${apiDoc.route}.yaml`, (_, res) => {
        res.sendFile(path.resolve(__dirname, apiDoc.outputPath), {
            headers: {
                'Content-Type': 'application/yaml',
            },
        })
    })
})

if (config.env !== Env.Production) {
    app.listen(PORT, () => {
        printLine(`ApiDoc UI server port: ${PORT}`)
    })
}
