import type { GenerationInstance, GenerationModel } from "@interfaces/models/generation.interface"
import type Sequelize from "sequelize"

export const Generation = (
    sequelize: Sequelize.Sequelize,
    DataTypes: typeof Sequelize.DataTypes
): GenerationModel => {
    const model: Sequelize.ModelStatic<GenerationInstance> = sequelize.define<GenerationInstance>(
        "generation",
        {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },
            car_model_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false

            },
            year_start: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            year_end: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            height: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            width: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            length: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            createdAt: "created_at",
            updatedAt: "updated_at",
            scopes: {
                list: {
                    attributes: ["id", "car_model_id", "name", "year_start", "year_end", "height", "widht", "lenght", "description"]
                }
            }
        }


    )

    return model
}
