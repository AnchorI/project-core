import type { BaseAttributes } from '@interfaces/models/base.interface'
import type { Model, ModelStatic, Optional } from 'sequelize'

export interface CarModelAttributes extends BaseAttributes {
    name: string
    brand_id: number
    description: string
}

export type CarModelCreationAttributes = Optional<
    CarModelAttributes,
    'id' | 'created_at' | 'updated_at'
>

export interface CarModelInstance
    extends Model<CarModelAttributes, CarModelCreationAttributes>,
        CarModelAttributes {}

export type CarModelModel = ModelStatic<CarModelInstance>
