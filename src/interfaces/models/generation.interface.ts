import type { BaseAttributes } from "@interfaces/models/base.interface"
import type { Model, ModelStatic, Optional } from "sequelize"


export interface GenerationAttributes extends BaseAttributes {
    name: string
    car_model_id: number
    year_start: number
    year_end: number
    height: number
    widht: number
    lenght: number
    description: string
}

export interface GenerationCreationAttributes
    extends Optional<GenerationAttributes, "id" | "created_at" | "updated_at"> {}

export interface GenerationInstance
    extends Model<GenerationAttributes, GenerationCreationAttributes>,
        GenerationAttributes {}

export interface GenerationModel extends ModelStatic<GenerationInstance> {}