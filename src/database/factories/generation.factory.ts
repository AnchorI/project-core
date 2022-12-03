import { Factory } from 'fishery'
import { GenerationCreationAttributes } from '@interfaces/models/generation.interface'

const generationFactory = Factory.define<GenerationCreationAttributes>(() => ({
    name: 'Name',
    car_model_id: 1,
    year_start: 2000,
    year_end: 3000,
    height: 123,
    width: 321,
    length: 666,
    description: 'Description',
}))

export default generationFactory
