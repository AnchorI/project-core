import type { Routes } from "@interfaces/routes"
import {Router} from "express";
import VehiclePhotoController from "@root/api/admin/components/vehicle-photo/vehicle-photo.controller";
import {TableHints} from "sequelize";

class VehiclePhotoRoute implements Routes {
    public router = Router()
    private vehiclePhotoController = new VehiclePhotoController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get('/', this.vehiclePhotoController.getList)
    }
}

export default new VehiclePhotoRoute().router