import {Factory} from "fishery";
import {Role, StoreCreationAttributes} from "@interfaces/models/strore.interface";

const storeFactory = Factory.define<StoreCreationAttributes>(() => ({
    brand: 1,
    model: 1,
    generation: 1,
    equipment: 1,
    mileage: 1,
    price: 1,
    release_year: 1,
    stock_category: Role.in_stock,
    color_code: "Color Code",
    discount: 1,
    quantity: 1,
    description: "Description",
    text: 'Text',
    vehicle_id: 1
}))

export default storeFactory