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
                list: {
                    attributes: ["id", "name", "host", "ip", "disabled", "role", "api_key"]
                },
                edit: {
                    attributes: ["id", "name", "host", "disabled", "role", "api_key"]
                },
                short: {
                    attributes: ["id", "name"]
                }
            },
            indexes: [
                {
                    fields: ["api_key"],
                    name: "index_admin_servers_on_api_key",
                    using: "BTREE"
                },
                {
                    fields: ["host"],
                    name: "index_admin_servers_on_host",
                    using: "BTREE"
                },
                {
                    fields: ["name"],
                    name: "index_admin_servers_on_name",
                    using: "BTREE"
                },
                {
                    fields: ["role"],
                    name: "index_admin_servers_on_role",
                    using: "BTREE"
                }
            ]
        }
    )

    return model
}
