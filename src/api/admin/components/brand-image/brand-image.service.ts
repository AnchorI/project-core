import BaseService from "@root/api/service.base";
import {ListResponse, PaginationProps} from "@interfaces/api";
import {BrandImageAttributes} from "@interfaces/models/brand-image.interface";
import {FindAndCountOptions} from "sequelize";
import {findWithPaginate} from "@helpers/database";

class BrandImageService extends BaseService {
    public async getList(pagination: PaginationProps): Promise<ListResponse<BrandImageAttributes>> {
        const options: FindAndCountOptions = {
            ...pagination,
            order: [["id", "ASC"]]
        }

        const response = await findWithPaginate(this.models.BrandImage.scope("list"), options)
        console.log('res', response)
        return response
    }
}

export default BrandImageService