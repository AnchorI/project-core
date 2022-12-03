import type {
    BrandImageInstance,
    BrandImageModel,
} from '@interfaces/models/brand-image.interface'
import type Sequelize from 'sequelize'

export const BrandImage = (
    sequelize: Sequelize.Sequelize,
    DataTypes: typeof Sequelize.DataTypes
): BrandImageModel => {
    const model: Sequelize.ModelStatic<BrandImageInstance> =
        sequelize.define<BrandImageInstance>(
            'brand_image',
            {
                id: {
                    primaryKey: true,
                    autoIncrement: true,
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                brand_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                image: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            {
                createdAt: 'created_at',
                updatedAt: 'updated_at',
                scopes: {
                    list: {
                        attributes: ['id', 'brand_id', 'image'],
                    },
                },
            }
        )

    return model
}
