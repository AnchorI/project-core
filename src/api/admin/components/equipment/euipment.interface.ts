import {EquipmentAttributes} from "@interfaces/models/equipment.interface";

export interface GetListRequest {
    query: PaginationQuery
}

export type ListResponse = ControllerListResponse<EquipmentAttributes>