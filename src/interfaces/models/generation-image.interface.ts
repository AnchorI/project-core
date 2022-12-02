import type { BaseAttributes } from "@interfaces/models/base.interface"
import type { Model, ModelStatic, Optional } from "sequelize"


export interface GenerationImageAttributes extends BaseAttributes {
    name: string

}

export interface GenerationImageCreationAttributes
    extends Optional<GenerationImageAttributes, "id" | "created_at" | "updated_at"> {}

export interface GenerationImageInstance
    extends Model<GenerationImageAttributes, GenerationImageCreationAttributes>,
        GenerationImageAttributes {}

export interface GenerationImageModel extends ModelStatic<GenerationImageInstance> {}