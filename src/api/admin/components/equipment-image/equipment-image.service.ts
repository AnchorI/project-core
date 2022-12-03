import BaseService from "@root/api/service.base";
import {ListResponse, PaginationProps} from "@interfaces/api";
import {EquipmentAttributes} from "@interfaces/models/equipment.interface";
import {FindAndCountOptions} from "sequelize";
import {findWithPaginate} from "@helpers/database";
import {response} from "express";

class EquipmentImageService extends BaseService {
    public async getList(pagination: PaginationProps): Promise<ListResponse<EquipmentAttributes>> {
        const options: FindAndCountOptions = {
            ...pagination,
            order: [["id", "ASC"]]
        }

        return await findWithPaginate(this.models.EquipmentImage.scope("list"), options)
    }
}

export default EquipmentImageService