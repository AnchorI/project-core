import type {EquipmentImageAttributes} from "@interfaces/models/equipment-image.interface";

export interface GetListRequest {
    query: PaginationQuery
}
export type ListResponse = ControllerListResponse<EquipmentImageAttributes>