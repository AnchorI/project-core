import type { CarModelInstance, CarModelModel } from "@interfaces/models/car-model.interface"
import type Sequelize from "sequelize"
import {Models} from "@interfaces/db";

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
                    attributes: ["id", "brand_id", "name", "description"]
                }
            }
        }
    )

    model.associate = (models: Models) => {
        model.hasMany(models.CarModelImage, {
            sourceKey: "id",
            foreignKey: "car_model_id",
            as: "model_images"
        })
        model.hasMany(models.Store, {
            sourceKey: "id",
            foreignKey: "model",
            as: "model_store"
        })
        model.hasMany(models.Generation, {
            sourceKey: "id",
            foreignKey: "car_model_id",
            as: "model_generation"
        })

    }

    return model
}
