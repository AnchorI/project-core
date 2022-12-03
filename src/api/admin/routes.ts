import { Routes } from "@interfaces/routes"
import { Router } from "express"
import brand from "./components/brand/brand.route"
import brandImage from  "./components/brand-image/brand-image.route"
import carModel from "@root/api/admin/components/car-model/car-model.route"
import equipment from "@root/api/admin/components/equipment/euipment.route"
import equipmentImage from "@root/api/admin/components/equipment-image/equipment-image.route"

class AdminRoute implements Routes {
    public router = Router()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.use('/brand', brand)
        this.router.use('/brand-image', brandImage)
        this.router.use('/car-model', carModel)
        this.router.use('/equipment', equipment)
        this.router.use('/equipment-image', equipmentImage)
    }
}

export default new AdminRoute().router