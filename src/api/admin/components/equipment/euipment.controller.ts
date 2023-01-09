import BaseController from '@root/api/controller.base'
import EquipmentService from '@root/api/admin/components/equipment/euipment.service'
import type { Request, Response } from 'express'
import type {
    GetListRequest,
    ListResponse,
    EquipmentRequest,
    ItemResponse,
} from '@root/api/admin/components/equipment/euipment.interface'
import httpStatus from 'http-status'

class EuipmentController extends BaseController {
    private equipment = new EquipmentService()

    public getList = async (
        req: Request<GetListRequest>,
        res: Response<ListResponse>
    ) => {
        const pagination = this.getPagination(req)

        const response = await this.equipment.getList(pagination)
        if (!response) return this.httpError(res, 'Equipment not found')

        return res.json(response)
    }

    public get = async (
        req: Request<EquipmentRequest>,
        res: Response<ItemResponse>
    ) => {
        const equipmentId = Number(req.params.equipmentId)
        if (!equipmentId) return this.httpError(res, 'Equipment ID not found')

        const response = await this.equipment.get(equipmentId)
        if (!response?.id)
            return this.httpError(
                res,
                'Equipment not found',
                httpStatus.NOT_FOUND
            )

        return res.json({ equipment: response })
    }
}

export default EuipmentController
