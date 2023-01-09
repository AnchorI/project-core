import { GenerationAttributes } from '@interfaces/models/generation.interface'

export interface GetListRequest {
    query: PaginationQuery
}

export interface GenerationRequest {
    params: {
        generationId: string
    }
}

export type ListResponse = ControllerListResponse<GenerationAttributes>
export type ItemResponse = ControllerItemResponse<{
    generation: GenerationAttributes
}>
