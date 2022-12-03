import type {
    VehiclePhotoInstance,
    VehiclePhotoModel,
} from '@interfaces/models/vehicle-photo.interface'
import type Sequelize from 'sequelize'

export const VehiclePhoto = (
    sequelize: Sequelize.Sequelize,
    DataTypes: typeof Sequelize.DataTypes
): VehiclePhotoModel => {
    const model: Sequelize.ModelStatic<VehiclePhotoInstance> =
        sequelize.define<VehiclePhotoInstance>(
            'vehicle_photo',
            {
                id: {
                    primaryKey: true,
                    autoIncrement: true,
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                vehicle_id: {
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
                        attributes: ['id', 'vehicle_id', 'image'],
                    },
                },
            }
        )

    return model
}
