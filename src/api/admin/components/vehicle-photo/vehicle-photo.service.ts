import BaseService from '@root/api/service.base'
import { ListResponse, PaginationProps } from '@interfaces/api'
import { VehiclePhotoAttributes } from '@interfaces/models/vehicle-photo.interface'
import { FindAndCountOptions } from 'sequelize'
import { findWithPaginate } from '@helpers/database'

class VehiclePhotoService extends BaseService {
    public async getList(
        pagination: PaginationProps
    ): Promise<ListResponse<VehiclePhotoAttributes>> {
        const options: FindAndCountOptions = {
            ...pagination,
            order: [['id', 'ASC']],
        }

        return await findWithPaginate(
            this.models.VehiclePhoto.scope('list'),
            options
        )
    }
}

export default VehiclePhotoService
