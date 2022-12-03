import {EquipmentImageCreationAttributes} from "@interfaces/models/equipment-image.interface";
import equipmentImageFactory from "@database/factories/equipment-image.factory";

export const equipmentImage: Array<EquipmentImageCreationAttributes> = [
    equipmentImageFactory.build({ image: "Equipment 1 image", equipment_id: 1 })
]

export default {
    model: "EquipmentImage",
    data: equipmentImage
}