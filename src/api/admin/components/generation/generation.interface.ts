import { GenerationAttributes } from '@interfaces/models/generation.interface'

export interface GetListRequest {
    query: PaginationQuery
}

export type ListResponse = ControllerListResponse<GenerationAttributes>
