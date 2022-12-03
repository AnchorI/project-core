import {GenerationImageAttributes} from "@interfaces/models/generation-image.interface";

export interface GetListRequest {
    query: PaginationQuery
}
export type ListResponse = ControllerListResponse<GenerationImageAttributes>