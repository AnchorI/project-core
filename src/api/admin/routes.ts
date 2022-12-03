import { Routes } from "@interfaces/routes"
import { Router } from "express"
import brand from "./components/brand/brand.route"
import brandImage from  "./components/brand-image/brand-image.route"
import carModel from "@root/api/admin/components/car-model/car-model.route";

class AdminRoute implements Routes {
    public router = Router()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.use('/brand', brand)
        this.router.use('/brand_image', brandImage)
        this.router.use('/car_model', carModel)
    }
}

export default new AdminRoute().router