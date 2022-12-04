import BaseService from '@root/api/service.base'
import { ListResponse, Pagination, PaginationProps } from '@interfaces/api'
import { FindAndCountOptions } from 'sequelize'
import { findWithPaginate } from '@helpers/database'
import { CarModelAttributes } from '@interfaces/models/car-model.interface'

class CarModelService extends BaseService {
    public async getList(
        pagination: PaginationProps
    ): Promise<ListResponse<CarModelAttributes>> {
        const options: FindAndCountOptions = {
            ...pagination,
            include: [
                {
                    model: this.models.CarModelImage,
                    as: 'model_images',
                    attributes: ['id', 'image'],
                },
            ],
            order: [['id', 'ASC']],
        }

        return await findWithPaginate(
            this.models.CarModel.scope('list'),
            options
        )
    }

    public async get(carModelId: number): Promise<CarModelAttributes> {
        return await this.models.CarModel.scope('list').findOne({
            where: { id: carModelId },
            include: [
                {
                    model: this.models.CarModelImage,
                    as: 'model_images',
                    attributes: ['id', 'image'],
                },
            ],
        })
    }
}

export default CarModelService
