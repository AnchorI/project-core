import BaseService from '@root/api/service.base'
import { ListResponse, PaginationProps } from '@interfaces/api'
import { GenerationImageAttributes } from '@interfaces/models/generation-image.interface'
import { FindAndCountOptions } from 'sequelize'
import { findWithPaginate } from '@helpers/database'

class GenerationImageService extends BaseService {
    public async getList(
        pagination: PaginationProps
    ): Promise<ListResponse<GenerationImageAttributes>> {
        const options: FindAndCountOptions = {
            ...pagination,
            order: [['id', 'ASC']],
        }

        return await findWithPaginate(
            this.models.GenerationImage.scope('list'),
            options
        )
    }
}

export default GenerationImageService
