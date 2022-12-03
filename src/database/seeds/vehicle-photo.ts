import {VehiclePhotoCreationAttributes} from "@interfaces/models/vehicle-photo.interface";
import vehiclePhotoFactory from "@database/factories/vehicle-photo.factory";

export const vehiclePhoto: Array<VehiclePhotoCreationAttributes> = [
    vehiclePhotoFactory.build({ image: "Vehicle photo", vehicle_id: 1 })
]

export default {
    model: "VehiclePhoto",
    data: vehiclePhoto
}