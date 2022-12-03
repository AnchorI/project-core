import BaseController from "@root/api/controller.base";
import EquipmentImageService from "@root/api/admin/components/equipment-image/equipment-image.service"
import type { Request, Response } from "express"
import type {GetListRequest, ListResponse} from "@root/api/admin/components/equipment-image/equipment-image.interface";


class EquipmentImageController extends BaseController {
    private equipmentImage = new EquipmentImageService()

    public getList = async (req: Request<GetListRequest>, res: Response<ListResponse>) => {
        const pagination = this.getPagination(req)

        const response = await this.equipmentImage.getList(pagination)
        if (!response) return this.httpError(res, "Equipment images not found")

        return res.json(response)
    }
}

export default EquipmentImageController