import {Role, StoreCreationAttributes} from "@interfaces/models/store.interface";
import storeFactory from "@database/factories/store.factory";

export const store: Array<StoreCreationAttributes> = [
    storeFactory.build({
        brand: 1,
        model: 1,
        generation: 1,
        equipment: 1,
        mileage: 666,
        price: 777,
        release_year: 2000,
        stock_category: Role.in_stock,
        color_code: "Color Code",
        discount: 0,
        quantity: 1,
        description: "Description",
        text: "Text"
    })
]

export default {
    model: "Store",
    data: store
}