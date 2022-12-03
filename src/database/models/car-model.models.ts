import type { CarModelInstance, CarModelModel } from "@interfaces/models/car-model.interface"
import type Sequelize from "sequelize"

export const CarModel = (
    sequelize: Sequelize.Sequelize,
    DataTypes: typeof Sequelize.DataTypes
): CarModelModel => {
    const model: Sequelize.ModelStatic<CarModelInstance> = sequelize.define<CarModelInstance>(
        "car_model",
        {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },
            brand_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            createdAt: "created_at",
            updatedAt: "updated_at",
            scopes: {
                list: {
                    attributes: ["id", "brand_id", "name", "descripton"]
                }
            }
        }
    )

    return model
}
