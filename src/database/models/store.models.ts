import type {
    StoreInstance,
    StoreModel,
} from '@interfaces/models/store.interface'
import type Sequelize from 'sequelize'
import { Models } from '@interfaces/db'

export const Store = (
    sequelize: Sequelize.Sequelize,
    DataTypes: typeof Sequelize.DataTypes
): StoreModel => {
    const model: Sequelize.ModelStatic<StoreInstance> =
        sequelize.define<StoreInstance>(
            'store',
            {
                id: {
                    primaryKey: true,
                    autoIncrement: true,
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                brand: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                model: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                generation: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                },
                equipment: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                },
                price: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                },
                mileage: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                },
                release_year: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                stock_category: {
                    type: DataTypes.STRING,
                    defaultValue: '0',
                    allowNull: false,
                },
                color_code: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                discount: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                quantity: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                description: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                text: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            {
                createdAt: 'created_at',
                updatedAt: 'updated_at',
                scopes: {
                    list: {
                        attributes: [
                            'brand',
                            'model',
                            'generation',
                            'equipment',
                            'mileage',
                            'price',
                            'release_year',
                            'stock_category',
                            'color_code',
                            'discount',
                            'quantity',
                            'description',
                            'text',
                        ],
                    },
                },
            }
        )

    model.associate = (models: Models) => {
        model.hasMany(models.VehiclePhoto, {
            sourceKey: 'id',
            foreignKey: 'vehicle_id',
            as: 'vehicle_images',
        })
        model.belongsTo(models.Brand, {
            foreignKey: 'brand',
            as: 'brand_store',
        })
        model.belongsTo(models.CarModel, {
            foreignKey: 'model',
            as: 'model_store',
        })
        model.belongsTo(models.Generation, {
            foreignKey: 'generation',
            as: 'generation_store',
        })
        model.belongsTo(models.Equipment, {
            foreignKey: 'equipment',
            as: 'equipment_store',
        })
    }

    return model
}
