import { VehiclePhotoAttributes } from '@interfaces/models/vehicle-photo.interface'

export interface GetListRequest {
    query: PaginationQuery
}
export type ListResponse = ControllerListResponse<VehiclePhotoAttributes>
