import type { BaseAttributes } from '@interfaces/models/base.interface'
import type { Model, ModelStatic, Optional } from 'sequelize'

export interface VehiclePhotoAttributes extends BaseAttributes {
    image: string
    vehicle_id: number
}

export type VehiclePhotoCreationAttributes = Optional<
    VehiclePhotoAttributes,
    'id' | 'created_at' | 'updated_at'
>

export interface VehiclePhotoInstance
    extends Model<VehiclePhotoAttributes, VehiclePhotoCreationAttributes>,
        VehiclePhotoAttributes {}

export type VehiclePhotoModel = ModelStatic<VehiclePhotoInstance>
