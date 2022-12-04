import path from 'path'

type OpenApiDoc = {
    name: string
    inputPath: string
    outputPath: string
    route: string
}

export const openApiDocs: Array<OpenApiDoc> = [
    {
        name: 'admin',
        inputPath: path.resolve(__dirname, '../', 'api/admin/index.yaml'),
        outputPath: path.resolve(__dirname, '../../', 'apidocs/admin.yaml'),
        route: '/admin-docs',
    },
]
