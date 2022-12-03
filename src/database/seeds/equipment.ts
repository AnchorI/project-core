import {EquipmentCreationAttributes} from "@interfaces/models/equipment.interface";
import equipmentFactory from "@database/factories/equipment.factory";

export const equipment: Array<EquipmentCreationAttributes> = [
    equipmentFactory.build({
        name: 'First Equipment',
        generation_id: 1,
        description: 'First Equipment description',
        start_price: 666,
        top_speed: 777,
        acceleration_0_100: 3,
        range: 123123123,
        transmission: '$WD transmission'
    })

]

export default {
    model: "Equipment",
    data: equipment
}