import BaseService from '@root/api/service.base'
import { ListResponse, PaginationProps } from '@interfaces/api'
import { BrandAttributes } from '@interfaces/models/brand.interface'
import { FindAndCountOptions } from 'sequelize'
import { findWithPaginate } from '@helpers/database'
import { Op } from 'sequelize'

interface FilterProps {
    name?: string
}

class BrandService extends BaseService {
    public async getList(
        pagination: PaginationProps,
        filters: FilterProps
    ): Promise<ListResponse<BrandAttributes>> {
        const { name } = filters
        const options: FindAndCountOptions = {
            ...pagination,
            where: {
                ...(name && { name: { [Op.iLike]: `%${name}%` } }),
            },
            order: [['id', 'ASC']],
        }

        return await findWithPaginate(this.models.Brand.scope('list'), options)
    }

    public async get(brandId: number): Promise<BrandAttributes> {
        return await this.models.Brand.scope('list').findOne({
            where: { id: brandId },
        })
    }
}

export default BrandService
