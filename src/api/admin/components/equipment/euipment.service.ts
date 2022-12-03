import BaseService from "@root/api/service.base";
import {ListResponse, PaginationProps} from "@interfaces/api";
import {EquipmentAttributes} from "@interfaces/models/equipment.interface";
import {FindAndCountOptions} from "sequelize";
import {findWithPaginate} from "@helpers/database";

class EuipmentService extends BaseService {
    public async getList(pagination: PaginationProps): Promise<ListResponse<EquipmentAttributes>> {
        const options: FindAndCountOptions = {
            ...pagination,
            include: [
                {
                    model: this.models.EquipmentImage,
                    as: "equipment_images",
                    attributes: ["id", "image"]
                }
            ],
            order: [["id", "ASC"]]
        }

        const response = await findWithPaginate(this.models.Equipment.scope("list"), options)
        return  response
    }
}

export default EuipmentService