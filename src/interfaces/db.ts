import type { AdminServerModel } from "@interfaces/models/admin-server.interface"
import type {BrandModel} from "@interfaces/models/brand.interface";
import {CarModelModel} from "@interfaces/models/car-model.interface";
import {BrandImageModel} from "@interfaces/models/brand-image.interface";
import {CarModelImageModel} from "@interfaces/models/car-model-image.interface";
import type { Sequelize, QueryOptions, QueryOptionsWithType, QueryTypes } from "sequelize"

export interface Models {
    AdminServer: AdminServerModel
    Brand: BrandModel
    BrandImage: BrandImageModel
    CarModel: CarModelModel
    CarModelIMage: CarModelImageModel
}

export interface Db {
    sequelize: Sequelize
    models: Models
}

export type Sql = string | { query: string; values: Array<unknown> }

export type SqlOptions = QueryOptions | QueryOptionsWithType<QueryTypes.RAW> | undefined

export type DBResponse<T> = Promise<T | null>
