import { CarModelAttributes } from '@interfaces/models/car-model.interface'

export interface GetListRequest {
    query: PaginationQuery
}

export interface CarModelRequest {
    params: {
        carModelId: string
    }
}

export type ListResponse = ControllerListResponse<CarModelAttributes>
export type ItemResponse = ControllerItemResponse<{
    car_model: CarModelAttributes
}>
