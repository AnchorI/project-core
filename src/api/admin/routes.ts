import { Routes } from "@interfaces/routes"
import { Router } from "express"
import brand from "./components/brand/brand.route"
import brandImage from  "./components/brand-image/brand-image.route"

class AdminRoute implements Routes {
    public router = Router()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.use('/brand', brand)
        this.router.use('/brand_image', brandImage)
    }
}

export default new AdminRoute().router