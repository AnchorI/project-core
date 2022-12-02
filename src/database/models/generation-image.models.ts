import type { GenerationImageInstance, GenerationImageModel } from "@interfaces/models/generation-image.interface.interface"
import type Sequelize from "sequelize"

export const GenerationImage = (
    sequelize: Sequelize.Sequelize,
    DataTypes: typeof Sequelize.DataTypes
): GenerationImageModel => {
    const model: Sequelize.ModelStatic<GenerationImageInstance> = sequelize.define<GenerationImageInstance>(
        "generation_image",
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
        },
        {
            createdAt: "created_at",
            updatedAt: "updated_at",
            scopes: {
                list: {
                    attributes: ["id","generation_id", "name"]
                }
    )

    return model
}
