import BaseController from "@root/api/controller.base";
import EquipmentImageService from "@root/api/admin/components/equipment-image/equipment-image.service"
import type { Request, Response } from "express"


class EquipmentImageController extends BaseController {
    private equipmentImage = new EquipmentImageService()

    public getList = async (req: Request, res: Response) => {
        const pagination = this.getPagination(req)

        const response = await this.equipmentImage.getList(pagination)
        if (!response) return this.httpError(res, "Equipment images not found")

        return res.json(response)
    }
}

export default EquipmentImageController