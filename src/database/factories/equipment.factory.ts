import {Factory} from "fishery";
import {EquipmentCreationAttributes} from "@interfaces/models/equipment.interface";

const equipmentFactory = Factory.define<EquipmentCreationAttributes>(() => ({
    name: "Name",
    generation_id: 1,
    description: "Description",
    start_price: 777,
    top_speed: 666,
    acceleration_0_100: 3,
    range: 66666,
    transmission: "4WD TRANSMISSION"
}))

export default equipmentFactory