import { Factory } from 'fishery'
import { CarModelImageCreationAttributes } from '@interfaces/models/car-model-image.interface'

const carModelImageFactory = Factory.define<CarModelImageCreationAttributes>(
    () => ({
        image: 'image-url',
        car_model_id: 1,
    })
)

export default carModelImageFactory
