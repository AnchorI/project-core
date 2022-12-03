import BaseController from '@root/api/controller.base'
import VehiclePhotoService from '@root/api/admin/components/vehicle-photo/vehicle-photo.service'
import type { Request, Response } from 'express'
import type {
    GetListRequest,
    ListResponse,
} from '@root/api/admin/components/vehicle-photo/vehicle-photo.interface'

class VehiclePhotoController extends BaseController {
    private vehiclePhoto = new VehiclePhotoService()

    public getList = async (
        req: Request<GetListRequest>,
        res: Response<ListResponse>
    ) => {
        const pagination = this.getPagination(req)

        const response = await this.vehiclePhoto.getList(pagination)
        if (!response) return this.httpError(res, 'Vehicle photos not found')

        return res.json(response)
    }
}

export default VehiclePhotoController
