import { BrandAttributes } from '@interfaces/models/brand.interface'

export interface GetListRequest {
    query: PaginationQuery
}

export interface BrandRequest {
    params: {
        brandId: string
    }
}

export type ListResponse = ControllerListResponse<BrandAttributes>
export type ItemResponse = ControllerItemResponse<{ brand: BrandAttributes }>
