import type { BaseAttributes } from "@interfaces/models/base.interface"
import type { Model, ModelStatic, Optional } from "sequelize"


export interface BrandImageAttributes extends BaseAttributes {
    name: string

}

export interface BrandImageCreationAttributes
    extends Optional<BrandImageAttributes, "id" | "created_at" | "updated_at"> {}

export interface BrandImageInstance
    extends Model<BrandImageAttributes, BrandImageCreationAttributes>,
        BrandImageAttributes {}

export interface BrandImageModel extends ModelStatic<BrandImageInstance> {}