import BaseService from '@root/api/service.base'
import { ListResponse, PaginationProps } from '@interfaces/api'
import { FindAndCountOptions } from 'sequelize'
import { findWithPaginate } from '@helpers/database'
import { EquipmentImageAttributes } from '@interfaces/models/equipment-image.interface'

class EquipmentImageService extends BaseService {
    public async getList(
        pagination: PaginationProps
    ): Promise<ListResponse<EquipmentImageAttributes>> {
        const options: FindAndCountOptions = {
            ...pagination,
            order: [['id', 'ASC']],
        }

        return await findWithPaginate(
            this.models.EquipmentImage.scope('list'),
            options
        )
    }
}

export default EquipmentImageService
