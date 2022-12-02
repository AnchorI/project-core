import type { BaseAttributes } from "@interfaces/models/base.interface"
import type { Model, ModelStatic, Optional } from "sequelize"


export interface EquipmentAttributes extends BaseAttributes {
    name: string
    generation_id: number
    description: string
    start_price: number
    top_speed: number
    acceleration_0_100: number
    range: number
    transmission: string
}

export type EquipmentCreationAttributes = Optional<EquipmentAttributes, "id" | "created_at" | "updated_at">

export interface EquipmentInstance
    extends Model<EquipmentAttributes, EquipmentCreationAttributes>,
        EquipmentAttributes {}

export type EquipmentModel = ModelStatic<EquipmentInstance>