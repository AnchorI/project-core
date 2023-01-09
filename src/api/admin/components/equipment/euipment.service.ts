import BaseService from '@root/api/service.base'
import { ListResponse, PaginationProps } from '@interfaces/api'
import { EquipmentAttributes } from '@interfaces/models/equipment.interface'
import { FindAndCountOptions } from 'sequelize'
import { findWithPaginate } from '@helpers/database'

class EuipmentService extends BaseService {
    public async getList(
        pagination: PaginationProps
    ): Promise<ListResponse<EquipmentAttributes>> {
        const options: FindAndCountOptions = {
            ...pagination,
            include: [
                {
                    model: this.models.EquipmentImage,
                    as: 'equipment_images',
                    attributes: ['id', 'image'],
                },
            ],
            order: [['id', 'ASC']],
        }

        return await findWithPaginate(
            this.models.Equipment.scope('list'),
            options
        )
    }

    public async get(equipmentId: number): Promise<EquipmentAttributes> {
        return await this.models.Equipment.scope('list').findOne({
            where: { id: equipmentId },
            include: [
                {
                    model: this.models.EquipmentImage,
                    as: 'equipment_images',
                    attributes: ['id', 'image'],
                },
            ],
        })
    }
}

export default EuipmentService