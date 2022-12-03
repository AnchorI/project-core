import BaseController from "@root/api/controller.base";
import EquipmentService from "@root/api/admin/components/equipment/euipment.service"
import type { Request, Response } from "express"
import type {GetListRequest, ListResponse} from "@root/api/admin/components/equipment/euipment.interface";


class EuipmentController extends BaseController {
    private equipment = new EquipmentService()

    public getList = async (req: Request<GetListRequest>, res: Response<ListResponse>) => {
        const pagination = this.getPagination(req)

        const response = await this.equipment.getList(pagination)
        if (!response) return this.httpError(res, "Equipment not found")

        return  res.json(response)
    }
}

export default EuipmentController
