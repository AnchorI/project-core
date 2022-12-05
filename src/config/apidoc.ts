import path from 'path'

type OpenApiDoc = {
    name: string
    inputPath: string
    outputPath: string
    route: string
}

export const openApiDocs: Array<OpenApiDoc> = [
    {
        name: 'slave',
        inputPath: path.resolve(__dirname, '../', 'api/admin/index.yaml'),
        outputPath: path.resolve(__dirname, '../../', 'apidocs/slave.yaml'),
        route: '/slave-docs',
    },
]
