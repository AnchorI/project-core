import type { BrandInstance, BrandModel } from "@interfaces/models/brand.interface"
import type Sequelize from "sequelize"

export const Brand = (
    sequelize: Sequelize.Sequelize,
    DataTypes: typeof Sequelize.DataTypes
): BrandModel => {
    const model: Sequelize.ModelStatic<BrandInstance> = sequelize.define<BrandInstance>(
        "brand",
        {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false

            }
        },
        {
            createdAt: "created_at",
            updatedAt: "updated_at",
            scopes: {
                attributes: ["id", "name"]
                    }
                },

            ]
        }
    )

    return model
}
