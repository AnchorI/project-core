import type {BrandImageAttributes} from "@interfaces/models/brand-image.interface";

export interface GetListRequest {
    query: PaginationQuery
}
export type ListResponse = ControllerListResponse<BrandImageAttributes>