import type { BaseAttributes } from "@interfaces/models/base.interface"
import type { Model, ModelStatic, Optional } from "sequelize"


export interface BrandImageAttributes extends BaseAttributes {
    image: string
    brand_id: number
}

export type BrandImageCreationAttributes = Optional<BrandImageAttributes, "id" | "created_at" | "updated_at">

export interface BrandImageInstance
    extends Model<BrandImageAttributes, BrandImageCreationAttributes>,
        BrandImageAttributes {}

export type BrandImageModel = ModelStatic<BrandImageInstance>