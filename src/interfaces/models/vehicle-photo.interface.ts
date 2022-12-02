import type { BaseAttributes } from "@interfaces/models/base.interface"
import type { Model, ModelStatic, Optional } from "sequelize"


export interface VehiclePhotoAttributes extends BaseAttributes {
    image: string
    vehicle_id: number

}

export interface VehiclePhotoCreationAttributes
    extends Optional<VehiclePhotoAttributes, "id" | "created_at" | "updated_at"> {}

export interface VehiclePhotoInstance
    extends Model<VehiclePhotoAttributes, VehiclePhotoCreationAttributes>,
        VehiclePhotoAttributes {}

export interface VehiclePhotoModel extends ModelStatic<VehiclePhotoInstance> {}