import {BrandAttributes} from "@interfaces/models/brand.interface";

export interface GetListRequest {
    query: PaginationQuery
}
export type ListResponse = ControllerListResponse<BrandAttributes>