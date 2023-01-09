import { EquipmentAttributes } from '@interfaces/models/equipment.interface'

export interface GetListRequest {
    query: PaginationQuery
}

export interface EquipmentRequest {
    params: {
        equipmentId: string
    }
}

export type ListResponse = ControllerListResponse<EquipmentAttributes>
export type ItemResponse = ControllerItemResponse<{
    equipment: EquipmentAttributes
}>
