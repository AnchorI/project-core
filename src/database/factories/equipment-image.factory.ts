import { Factory } from 'fishery'
import { EquipmentImageCreationAttributes } from '@interfaces/models/equipment-image.interface'

const equipmentImageFactory = Factory.define<EquipmentImageCreationAttributes>(
    () => ({
        image: 'image-url',
        equipment_id: 1,
    })
)

export default equipmentImageFactory
