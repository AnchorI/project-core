import Sequelize from 'sequelize'

import { Role } from '@interfaces/models/user.interface'

import type { UserModel, UserInstance } from '@interfaces/models/user.interface'

export const User = (
    sequelize: Sequelize.Sequelize,
    DataTypes: typeof Sequelize.DataTypes
): UserModel => {
    const model: Sequelize.ModelStatic<UserInstance> =
        sequelize.define<UserInstance>(
            'users',
            {
                id: {
                    primaryKey: true,
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    autoIncrement: true,
                },
                email: {
                    type: DataTypes.STRING,
                    field: 'email',
                    allowNull: false,
                },
                salt: {
                    type: DataTypes.STRING,
                    field: 'salt',
                    allowNull: false,
                },
                crypted_password: {
                    type: DataTypes.STRING,
                    field: 'crypted_password',
                    allowNull: false,
                },
                is_admin: {
                    type: DataTypes.BOOLEAN,
                    field: 'is_admin',
                    defaultValue: false,
                },
                is_active: {
                    type: DataTypes.BOOLEAN,
                    field: 'is_active',
                    allowNull: false,
                },
                is_blocked: {
                    type: DataTypes.BOOLEAN,
                    field: 'is_blocked',
                    allowNull: false,
                },
                first_name: {
                    type: DataTypes.STRING,
                    field: 'first_name',
                },
                last_name: {
                    type: DataTypes.STRING,
                    field: 'last_name',
                },
                api_token: {
                    type: DataTypes.STRING,
                    field: 'api_token',
                    allowNull: false,
                },
                phone: {
                    type: Sequelize.STRING,
                },
                role: {
                    type: DataTypes.VIRTUAL(DataTypes.STRING, ['is_admin']),
                    get() {
                        const isAdmin = this.getDataValue('is_admin')
                        if (isAdmin) return Role.Admin

                        return Role.Customer
                    },
                },
                created_at: {
                    type: DataTypes.DATE,
                    field: 'created_at',
                    allowNull: true,
                },
            },
            {
                scopes: {
                    list: {
                        attributes: [
                            'id',
                            'email',
                            'is_blocked',
                            'is_active',
                            'created_at',
                            'role',
                        ],
                    },
                },
                timestamps: false,
            }
        )

    return model
}
