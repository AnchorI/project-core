import type { BaseAttributes } from "@interfaces/models/base.interface"
import type { Model, ModelStatic, Optional } from "sequelize"


export interface GenerationAttributes extends BaseAttributes {
    name: string
    car_model_id: number
    year_start: number
    year_end: number
    height: number
    width: number
    length: number
    description: string
}

export type GenerationCreationAttributes = Optional<GenerationAttributes, "id" | "created_at" | "updated_at">

export interface GenerationInstance
    extends Model<GenerationAttributes, GenerationCreationAttributes>,
        GenerationAttributes {}

export type GenerationModel = ModelStatic<GenerationInstance>