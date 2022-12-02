import type { BaseAttributes } from "@interfaces/models/base.interface"
import type { Model, ModelStatic, Optional } from "sequelize"


export interface CarModelImageAttributes extends BaseAttributes {
    image: string
    car_model_id: number
}

export interface CarModelImageCreationAttributes
    extends Optional<CarModelImageAttributes, "id" | "created_at" | "updated_at"> {}

export interface CarModelImageInstance
    extends Model<CarModelImageAttributes, CarModelImageCreationAttributes>,
        CarModelImageAttributes {}

export interface CarModelImageModel extends ModelStatic<CarModelImageInstance> {}