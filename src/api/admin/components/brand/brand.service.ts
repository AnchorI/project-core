import BaseService from "@root/api/service.base";
import {ListResponse, PaginationProps} from "@interfaces/api";
import {BrandAttributes} from "@interfaces/models/brand.interface";
import {FindAndCountOptions} from "sequelize";
import {findWithPaginate} from "@helpers/database";

class BrandService extends BaseService {
    public async getList(pagination: PaginationProps): Promise<ListResponse<BrandAttributes>> {
        const options: FindAndCountOptions = {
            ...pagination,
            order: [["id", "ASC"]]
        }

        const response = await findWithPaginate(this.models.Brand.scope("list"), options)
        console.log('res', response)
        return response
    }
}

export default BrandService