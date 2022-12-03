import { Factory } from 'fishery'
import { VehiclePhotoCreationAttributes } from '@interfaces/models/vehicle-photo.interface'

const vehiclePhotoFactory = Factory.define<VehiclePhotoCreationAttributes>(
    () => ({
        image: 'image-url',
        vehicle_id: 1,
    })
)

export default vehiclePhotoFactory
