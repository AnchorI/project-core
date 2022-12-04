import BaseController from '@root/api/controller.base'
import CarModelService from '@root/api/admin/components/car-model/car-model.service'
import type { Request, Response } from 'express'
import type {
    GetListRequest,
    ListResponse,
    CarModelRequest,
    ItemResponse,
} from '@root/api/admin/components/car-model/car-model.interface'
import httpStatus from 'http-status'

class CarModelController extends BaseController {
    private carModel = new CarModelService()

    public getList = async (
        req: Request<GetListRequest>,
        res: Response<ListResponse>
    ) => {
        const pagination = this.getPagination(req)

        const response = await this.carModel.getList(pagination)
        if (!response) return this.httpError(res, 'Car Models not found')

        return res.json(response)
    }

    public get = async (
        req: Request<CarModelRequest>,
        res: Response<ItemResponse>
    ) => {
        const carModelId = Number(req.params.carModelId)
        if (!carModelId) return this.httpError(res, 'Car Model ID not found')

        const response = await this.carModel.get(carModelId)
        if (!response?.id)
            return this.httpError(
                res,
                'Car Model not found',
                httpStatus.NOT_FOUND
            )

        return res.json({ car_model: response })
    }
}

export default CarModelController
