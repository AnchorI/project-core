import { CarModelImageCreationAttributes } from '@interfaces/models/car-model-image.interface'
import carModelImageFactory from '@database/factories/car-model-image.factory'

export const carModelImage: Array<CarModelImageCreationAttributes> = [
    carModelImageFactory.build({ image: 'Model S image', car_model_id: 1 }),
    carModelImageFactory.build({ image: 'Model 3 image', car_model_id: 2 }),
    carModelImageFactory.build({ image: 'Model X image', car_model_id: 3 }),
    carModelImageFactory.build({ image: 'Model Y image', car_model_id: 4 }),
    carModelImageFactory.build({ image: 'EQS image', car_model_id: 5 }),
    carModelImageFactory.build({ image: 'Qin Plus image', car_model_id: 6 }),
]

export default {
    model: 'CarModelImage',
    data: carModelImage,
}
