import BaseController from "@root/api/controller.base";
import CarModelImageService from "@root/api/admin/components/car-model-image/car-model-image.service"
import type { Request, Response} from "express"


class CarModelImageController extends BaseController {
    private carModelImage = new CarModelImageService()

    public getList = async (req: Request, res: Response) => {
        const pagiation = this.getPagination(req)

        const response = await this.carModelImage.getList(pagiation)
        if (!response) return this.httpError(res, "Car models images not found")

        return res.json(response)
    }
}

export default CarModelImageController