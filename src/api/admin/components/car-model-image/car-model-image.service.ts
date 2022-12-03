import BaseService from "@root/api/service.base";
import {ListResponse, PaginationProps} from "@interfaces/api";
import {BrandImageAttributes} from "@interfaces/models/brand-image.interface";
import {FindAndCountOptions} from "sequelize";
import {findWithPaginate} from "@helpers/database";
import CarModelImageController from "@root/api/admin/components/car-model-image/car-model-image.controller";
import {CarModelImageAttributes} from "@interfaces/models/car-model-image.interface";

class CarModelImageService extends BaseService {
    public async getList(pagination: PaginationProps): Promise<ListResponse<CarModelImageAttributes>> {
        const  options: FindAndCountOptions = {
            ...pagination,
            order: [["id", "ASC"]]
        }

        const response = await findWithPaginate(this.models.CarModel.scope("list"), options)
        return response
    }
}

export default CarModelImageService