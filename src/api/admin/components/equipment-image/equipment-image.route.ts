import type { Routes } from "@interfaces/routes"
import {Router} from "express";
import EquipmentImageController from "@root/api/admin/components/equipment-image/equipment-image.controller";

class EquipmentImageRoute implements Routes {
    public router = Router()
    private equipmentImageController = new EquipmentImageController()

    constructor() {
        this.initializeRoutes()
    }

    private  initializeRoutes() {
        this.router.get('/', this.equipmentImageController.getList)
    }
}

export default new EquipmentImageRoute().router