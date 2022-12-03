import { CarModelCreationAttributes } from '@interfaces/models/car-model.interface'
import carModelFactory from '@database/factories/car-model.factory'

export const carModel: Array<CarModelCreationAttributes> = [
    carModelFactory.build({
        id: 1,
        name: 'Model S',
        brand_id: 1,
        description: 'Description',
    }),
    carModelFactory.build({
        id: 2,
        name: 'Model 3',
        brand_id: 1,
        description: 'Description',
    }),
    carModelFactory.build({
        id: 3,
        name: 'Model X',
        brand_id: 1,
        description: 'Description',
    }),
    carModelFactory.build({
        id: 4,
        name: 'Model Y',
        brand_id: 1,
        description: 'Description',
    }),
    carModelFactory.build({
        id: 5,
        name: 'EQS',
        brand_id: 2,
        description: 'Description',
    }),
    carModelFactory.build({
        id: 6,
        name: 'Qin Plus',
        brand_id: 3,
        description: 'Description',
    }),
]

export default {
    model: 'CarModel',
    data: carModel,
}
