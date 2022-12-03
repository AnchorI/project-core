import BaseService from "@root/api/service.base";
import {PaginationProps, ListResponse} from "@interfaces/api";
import {StoreAttributes} from "@interfaces/models/strore.interface";
import {FindAndCountOptions} from "sequelize";
import {findWithPaginate, removeObjectFields} from "@helpers/database";

class StoreService extends BaseService {
    public async getList(pagination: PaginationProps): Promise<ListResponse<StoreAttributes>> {
        const options: FindAndCountOptions = {
            ...pagination,
            include: [
                {
                    model: this.models.VehiclePhoto,
                    as: "vehicle_images",
                    attributes: ["id", "image"]
                },
                {
                    model: this.models.Brand,
                    as: "brand_store",
                    attributes: ["id", "name"]
                },
                {
                    model: this.models.CarModel,
                    as: "model_store",
                    attributes: ["id", "name", "description"]
                },
                {
                    model: this.models.Generation,
                    as: "generation_store",
                    attributes: ["id", "name", "year_start", "year_end", "height", "width", "length", "description"]
                },
                {
                    model: this.models.Equipment,
                    as: "equipment_store",
                    attributes: ["id", "description", "start_price", "top_speed", "acceleration_0_100", "range", "transmission"]
                }
            ],
            order: [["id", "ASC"]]
        }
        const response = await findWithPaginate(this.models.Store.scope("list"), options)

        return {
            ...response,
            items: removeObjectFields(['brand', 'model', 'generation', 'equipment'], response.items)
        }
    }
}

export default StoreService