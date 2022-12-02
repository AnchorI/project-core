import type { BaseAttributes } from "@interfaces/models/base.interface"
import type { Model, ModelStatic, Optional } from "sequelize"


export interface BrandAttributes extends BaseAttributes {
    name: string

}

export interface BrandCreationAttributes
    extends Optional<BrandAttributes, "id" | "created_at" | "updated_at"> {}

export interface BrandInstance
    extends Model<BrandAttributes, BrandCreationAttributes>,
        BrandAttributes {}

export interface BrandModel extends ModelStatic<BrandInstance> {}