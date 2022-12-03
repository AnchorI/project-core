import {GenerationCreationAttributes} from "@interfaces/models/generation.interface";
import generationFactory from "@database/factories/generation.factory";

export const generation: Array<GenerationCreationAttributes> = [
    generationFactory.build({
        id: 1,
        name: 'First Generation Model S',
        car_model_id: 1,
        year_start: 2000,
        year_end: 3000,
        height: 100,
        width: 200,
        length: 300,
        description: 'Description',
    }),
    generationFactory.build({
        id: 2,
        name: 'First Generation Model 3',
        car_model_id: 2,
        year_start: 2000,
        year_end: 3000,
        height: 100,
        width: 200,
        length: 300,
        description: 'Description',
    }),
    generationFactory.build({
        id: 3,
        name: 'First Generation Model x',
        car_model_id: 3,
        year_start: 2000,
        year_end: 3000,
        height: 100,
        width: 200,
        length: 300,
        description: 'Description',
    }),
    generationFactory.build({
        id: 4,
        name: 'First Generation Model Y',
        car_model_id: 4,
        year_start: 2000,
        year_end: 3000,
        height: 100,
        width: 200,
        length: 300,
        description: 'Description',
    }),
    generationFactory.build({
        id: 5,
        name: 'First Generation MB EQS',
        car_model_id: 5,
        year_start: 2000,
        year_end: 3000,
        height: 100,
        width: 200,
        length: 300,
        description: 'Description',
    }),
    generationFactory.build({
        id: 6,
        name: 'First Generation Qin Plus',
        car_model_id: 6,
        year_start: 2000,
        year_end: 3000,
        height: 100,
        width: 200,
        length: 300,
        description: 'Description',
    }),

]

export default {
    model: "Generation",
    data: generation
}