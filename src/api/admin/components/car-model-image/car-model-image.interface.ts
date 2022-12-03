import type {CarModelImageAttributes} from "@interfaces/models/car-model-image.interface";

export interface GetListRequest {
    query: PaginationQuery
}
export type  ListResponse = ControllerListResponse<CarModelImageAttributes>