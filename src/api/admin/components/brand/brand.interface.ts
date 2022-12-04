import { BrandAttributes } from '@interfaces/models/brand.interface'

export interface GetListRequest {
    query: {
        name?: string
    } & PaginationQuery
}

export interface BrandRequest {
    params: {
        brandId: string
    }
}

export type ListResponse = ControllerListResponse<BrandAttributes>
export type ItemResponse = ControllerItemResponse<{ brand: BrandAttributes }>
