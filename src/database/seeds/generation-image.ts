import { GenerationImageCreationAttributes } from '@interfaces/models/generation-image.interface'
import generationImageFactory from '@database/factories/generation-image.factory'

export const generationImage: Array<GenerationImageCreationAttributes> = [
    generationImageFactory.build({ image: 'Model S image', generation_id: 1 }),
    generationImageFactory.build({ image: 'Model 3 image', generation_id: 2 }),
    generationImageFactory.build({ image: 'Model X image', generation_id: 3 }),
    generationImageFactory.build({ image: 'Model Y image', generation_id: 4 }),
    generationImageFactory.build({
        image: 'Model EQS image',
        generation_id: 5,
    }),
    generationImageFactory.build({
        image: 'Model Qin Plus image',
        generation_id: 6,
    }),
]

export default {
    model: 'GenerationImage',
    data: generationImage,
}
