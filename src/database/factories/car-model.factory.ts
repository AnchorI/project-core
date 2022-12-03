import { Factory } from 'fishery'
import { CarModelCreationAttributes } from '@interfaces/models/car-model.interface'

const carModelFactory = Factory.define<CarModelCreationAttributes>(() => ({
    name: 'Name',
    brand_id: 1,
    description: 'Description',
}))

export default carModelFactory
