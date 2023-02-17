import type { BrandModel } from '@interfaces/models/brand.interface'

import type {
    Sequelize,
    QueryOptions,
    QueryOptionsWithType,
    QueryTypes,
} from 'sequelize'

export interface Models {
    Brand: BrandModel
}

export interface Db {
    sequelize: Sequelize
    models: Models
}

export type Sql = string | { query: string; values: Array<unknown> }

export type SqlOptions =
    | QueryOptions
    | QueryOptionsWithType<QueryTypes.RAW>
    | undefined

export type DBResponse<T> = Promise<T | null>
