import { Routes } from "@interfaces/routes"
import { Router } from "express"
import brand from "./components/brand/brand.route"
import brandImage from  "./components/brand-image/brand-image.route"
import carModel from "./components/car-model/car-model.route"
import equipment from "./components/equipment/euipment.route"
import equipmentImage from "./components/equipment-image/equipment-image.route"
import generation from "./components/generation/generation.route"
import generationImage from  "./components/generation-image/generation-image.route"
import store from "./components/store/store.route"

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
        this.router.use('/generation', generation),
        this.router.use('/store', store),
        this.router.use('/generation-image', generationImage)
    }
}

export default new AdminRoute().router