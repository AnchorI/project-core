import type {
    BrandInstance,
    BrandModel,
} from '@interfaces/models/brand.interface'
import type Sequelize from 'sequelize'
import { Models } from '@interfaces/db'

export const Brand = (
    sequelize: Sequelize.Sequelize,
    DataTypes: typeof Sequelize.DataTypes
): BrandModel => {
    const model: Sequelize.ModelStatic<BrandInstance> =
        sequelize.define<BrandInstance>(
            'brand',
            {
                id: {
                    primaryKey: true,
                    autoIncrement: true,
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            {
                createdAt: 'created_at',
                updatedAt: 'updated_at',
                scopes: {
                    list: {
                        attributes: ['id', 'name'],
                    },
                },
            }
        )

    model.associate = (models: Models) => {
        model.hasMany(models.BrandImage, {
            sourceKey: 'id',
            foreignKey: 'brand_id',
            as: 'brand_images',
        })
        model.hasMany(models.CarModel, {
            sourceKey: 'id',
            foreignKey: 'brand_id',
            as: 'brand_car',
        })
        model.hasMany(models.Store, {
            sourceKey: 'id',
            foreignKey: 'brand',
            as: 'brand_store',
        })
    }

    return model
}
