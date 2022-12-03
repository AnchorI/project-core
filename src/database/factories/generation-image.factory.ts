import { Factory } from 'fishery'
import { GenerationImageCreationAttributes } from '@interfaces/models/generation-image.interface'

const generationImageFactory =
    Factory.define<GenerationImageCreationAttributes>(() => ({
        image: 'url-image',
        generation_id: 1,
    }))

export default generationImageFactory
