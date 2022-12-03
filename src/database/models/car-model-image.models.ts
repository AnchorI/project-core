import type {
    CarModelImageInstance,
    CarModelImageModel,
} from '@interfaces/models/car-model-image.interface'
import type Sequelize from 'sequelize'

export const CarModelImage = (
    sequelize: Sequelize.Sequelize,
    DataTypes: typeof Sequelize.DataTypes
): CarModelImageModel => {
    const model: Sequelize.ModelStatic<CarModelImageInstance> =
        sequelize.define<CarModelImageInstance>(
            'car_model_image',
            {
                id: {
                    primaryKey: true,
                    autoIncrement: true,
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                car_model_id: {
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
                        attributes: ['id', 'car_model_id', 'image'],
                    },
                },
            }
        )

    return model
}
