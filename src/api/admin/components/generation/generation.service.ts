import BaseService from "@root/api/service.base";
import {ListResponse, PaginationProps} from "@interfaces/api";
import {GenerationAttributes} from "@interfaces/models/generation.interface";
import {FindAndCountOptions} from "sequelize";
import {findWithPaginate} from "@helpers/database";

class GenerationService extends BaseService {
    public async getList(pagination: PaginationProps): Promise<ListResponse<GenerationAttributes>> {
        const options: FindAndCountOptions = {
            ...pagination,
            include: [
                {
                    model: this.models.GenerationImage,
                    as: "generation_images",
                    attributes: ["id", "image"]
                }
            ],
            order: [["id", "ASC"]]
        }

        const response = await findWithPaginate(this.models.Generation.scope("list"), options)
        return response
    }
}

export default GenerationService