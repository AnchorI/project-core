import BaseService from '@root/api/service.base'
import { PaginationProps, ListResponse } from '@interfaces/api'
import { FindAndCountOptions } from 'sequelize'
import { findWithPaginate, removeObjectFields } from '@helpers/database'
import type { StoreResponse } from '@root/api/admin/components/store/store.interface'

class StoreService extends BaseService {
    public async getList(
        pagination: PaginationProps
    ): Promise<ListResponse<StoreResponse>> {
        const options: FindAndCountOptions = {
            ...pagination,
            ...this.getFindOptions(),
        }
        const response = await findWithPaginate(
            this.models.Store.scope('list'),
            options
        )

        return {
            ...response,
            items: removeObjectFields(
                ['brand', 'model', 'generation', 'equipment'],
                response.items
            ),
        }
    }

    public async get(storeId: number): Promise<StoreResponse> {
        return await this.models.Store.scope('list').findOne({
            where: { id: storeId },
            ...this.getFindOptions(),
        })
    }

    private getFindOptions(): FindAndCountOptions {
        return {
            include: [
                {
                    model: this.models.VehiclePhoto,
                    as: 'vehicle_images',
                    attributes: ['id', 'image'],
                },
                {
                    model: this.models.Brand,
                    as: 'brand_store',
                    attributes: ['id', 'name'],
                },
                {
                    model: this.models.CarModel,
                    as: 'model_store',
                    attributes: ['id', 'name', 'description'],
                },
                {
                    model: this.models.Generation,
                    as: 'generation_store',
                    attributes: [
                        'id',
                        'name',
                        'year_start',
                        'year_end',
                        'height',
                        'width',
                        'length',
                        'description',
                    ],
                },
                {
                    model: this.models.Equipment,
                    as: 'equipment_store',
                    attributes: [
                        'id',
                        'description',
                        'start_price',
                        'top_speed',
                        'acceleration_0_100',
                        'range',
                        'transmission',
                    ],
                },
            ],
            order: [['id', 'ASC']],
        }
    }
}

export default StoreService
