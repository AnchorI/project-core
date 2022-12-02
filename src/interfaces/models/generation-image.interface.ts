import type { BaseAttributes } from "@interfaces/models/base.interface"
import type { Model, ModelStatic, Optional } from "sequelize"


export interface GenerationImageAttributes extends BaseAttributes {
    image: string
    generation_id: number

}

export type GenerationImageCreationAttributes = Optional<GenerationImageAttributes, "id" | "created_at" | "updated_at">

export interface GenerationImageInstance
    extends Model<GenerationImageAttributes, GenerationImageCreationAttributes>,
        GenerationImageAttributes {}

export type GenerationImageModel = ModelStatic<GenerationImageInstance>