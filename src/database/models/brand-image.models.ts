import type { BrandImageInstance, BrandImageModel } from "@interfaces/models/admin-server.interface"
import type Sequelize from "sequelize"

export const BrandImage = (
    sequelize: Sequelize.Sequelize,
    DataTypes: typeof Sequelize.DataTypes
): BrandImageModel => {
    const model: Sequelize.ModelStatic<BrandImageInstance> = sequelize.define<BrandImageInstance>(
        "brand_image",
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
            },
            port: {
                type: DataTypes.INTEGER,
                defaultValue: 5080,
                allowNull: true
            },
            host: {
                type: DataTypes.STRING,
                allowNull: true
            },
            is_media: {
                type: DataTypes.BOOLEAN,
                allowNull: true
            },
            disabled: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            role: {
                type: DataTypes.STRING,
                defaultValue: "media",
                allowNull: false
            },
            ip: {
                type: DataTypes.STRING,
                allowNull: true
            },
            resolve_error: {
                type: DataTypes.BOOLEAN,
                allowNull: true
            },
            api_key: {
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
