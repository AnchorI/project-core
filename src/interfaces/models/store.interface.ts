import type { BaseAttributes } from '@interfaces/models/base.interface'
import type { Model, ModelStatic, Optional } from 'sequelize'

export enum Role {
    in_stock = '0',
    on_the_way = '1',
    order_only = '2',
}

export interface StoreAttributes extends BaseAttributes {
    brand: number
    model: number
    generation: number
    equipment: number
    mileage: number
    price: number
    release_year: number
    stock_category: Role
    color_code: string
    discount: number
    quantity: number
    description: string
    text: string
}

export type StoreCreationAttributes = Optional<
    StoreAttributes,
    'id' | 'created_at' | 'updated_at'
>

export interface StoreInstance
    extends Model<StoreAttributes, StoreCreationAttributes>,
        StoreAttributes {}

export type StoreModel = ModelStatic<StoreInstance>
