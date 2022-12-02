import type { BaseAttributes } from "@interfaces/models/base.interface"
import type { Model, ModelStatic, Optional } from "sequelize"


export interface EquipmentImageAttributes extends BaseAttributes {
    image: string
    equipment_id: number

}

export type EquipmentImageCreationAttributes = Optional<EquipmentImageAttributes, "id" | "created_at" | "updated_at">

export interface EquipmentImageInstance
    extends Model<EquipmentImageAttributes, EquipmentImageCreationAttributes>,
        EquipmentImageAttributes {}

export type EquipmentImageModel = ModelStatic<EquipmentImageInstance>