import type { EquipmentImageInstance, EquipmentImageModel } from "@interfaces/models/equipment-image.interface"
import type Sequelize from "sequelize"

export const EquipmentImage = (
    sequelize: Sequelize.Sequelize,
    DataTypes: typeof Sequelize.DataTypes
): EquipmentImageModel => {
    const model: Sequelize.ModelStatic<EquipmentImageInstance> = sequelize.define<EquipmentImageInstance>(
        "equipment_image",
        {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },
            equipment_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            createdAt: "created_at",
            updatedAt: "updated_at",
            scopes: {
                list: {
                    attributes: ["id","equipment_id", "image"]
                }
    )

    return model
}
