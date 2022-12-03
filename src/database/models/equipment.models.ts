import type { EquipmentInstance, EquipmentModel } from "@interfaces/models/equipment.interface"
import type Sequelize from "sequelize"
import {Models} from "@interfaces/db";

export const Equipment = (
    sequelize: Sequelize.Sequelize,
    DataTypes: typeof Sequelize.DataTypes
): EquipmentModel => {
    const model: Sequelize.ModelStatic<EquipmentInstance> = sequelize.define<EquipmentInstance>(
        "equipment",
        {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },
            generation_id: {
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
            },
            start_price: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            top_speed: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            acceleration_0_100: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            range: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            transmission: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            createdAt: "created_at",
            updatedAt: "updated_at",
            scopes: {
                list: {
                    attributes: ["id", "generation_id", "description", "start_price", "top_speed", "acceleration_0_100", "range", "transmission"]
                }
            }
        }
    )

    model.associate = (models: Models) => {
        model.hasMany(models.EquipmentImage, {
            sourceKey: "id",
            foreignKey: "equipment_id",
            as: "equipment_images"
        })
        model.hasMany(models.Store, {
            sourceKey: "id",
            foreignKey: "equipment",
            as: "equipment_store"
        })

    }

    return model
}
