import type { AdminServerModel } from "@interfaces/models/admin-server.interface"
import type { Sequelize, QueryOptions, QueryOptionsWithType, QueryTypes } from "sequelize"
import {BrandModel} from "@interfaces/models/brand.interface";

export interface Models {
    AdminServer: AdminServerModel
}

export interface Brand {
    Brand: BrandModel
}

export interface Db {
    sequelize: Sequelize
    models: Models
}

export type Sql = string | { query: string; values: Array<unknown> }

export type SqlOptions = QueryOptions | QueryOptionsWithType<QueryTypes.RAW> | undefined

export type DBResponse<T> = Promise<T | null>
