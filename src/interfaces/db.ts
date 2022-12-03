import type {BrandModel} from "@interfaces/models/brand.interface";
import type {CarModelModel} from "@interfaces/models/car-model.interface";
import type {BrandImageModel} from "@interfaces/models/brand-image.interface";
import type {CarModelImageModel} from "@interfaces/models/car-model-image.interface";
import type {GenerationModel} from "@interfaces/models/generation.interface";
import type {GenerationImageModel} from "@interfaces/models/generation-image.interface";
import type { Sequelize, QueryOptions, QueryOptionsWithType, QueryTypes } from "sequelize"
import {EquipmentModel} from "@interfaces/models/equipment.interface";
import {EquipmentImageModel} from "@interfaces/models/equipment-image.interface";
import {VehiclePhotoModel} from "@interfaces/models/vehicle-photo.interface";
import {StoreModel} from "@interfaces/models/strore.interface";

export interface Models {
    Brand: BrandModel
    BrandImage: BrandImageModel
    CarModel: CarModelModel
    CarModelImage: CarModelImageModel
    Generation: GenerationModel
    GenerationImage: GenerationImageModel
    Equipment: EquipmentModel
    EquipmentImage: EquipmentImageModel
    VehiclePhoto: VehiclePhotoModel
    Store: StoreModel
}

export interface Db {
    sequelize: Sequelize
    models: Models
}

export type Sql = string | { query: string; values: Array<unknown> }

export type SqlOptions = QueryOptions | QueryOptionsWithType<QueryTypes.RAW> | undefined

export type DBResponse<T> = Promise<T | null>
