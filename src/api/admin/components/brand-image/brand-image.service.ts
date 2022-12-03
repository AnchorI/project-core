import BaseService from '@root/api/service.base'
import { ListResponse, PaginationProps } from '@interfaces/api'
import { BrandImageAttributes } from '@interfaces/models/brand-image.interface'
import { FindAndCountOptions } from 'sequelize'
import { findWithPaginate } from '@helpers/database'

class BrandImageService extends BaseService {
    public async getList(
        pagination: PaginationProps
    ): Promise<ListResponse<BrandImageAttributes>> {
        const options: FindAndCountOptions = {
            ...pagination,
            order: [['id', 'ASC']],
        }

        return await findWithPaginate(
            this.models.BrandImage.scope('list'),
            options
        )
    }
}

export default BrandImageService
