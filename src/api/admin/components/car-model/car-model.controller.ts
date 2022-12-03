import BaseController from "@root/api/controller.base"
import CarModelService from "@root/api/admin/components/car-model/car-model.service"
import type { Request, Response } from "express"


class CarModelController extends BaseController {
    private carModel = new CarModelService()

    public getList = async (req: Request, res: Response) => {
        const pagination = this.getPagination(req)

        const response = await this.carModel.getList(pagination)
        if (!response) return this.httpError(res, "Car Models not found")

        return res.json(response)
    }
}

export default CarModelController