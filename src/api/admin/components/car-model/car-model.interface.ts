import { CarModelAttributes } from '@interfaces/models/car-model.interface'

export interface GetListRequest {
    query: PaginationQuery
}

export type ListResponse = ControllerListResponse<CarModelAttributes>
