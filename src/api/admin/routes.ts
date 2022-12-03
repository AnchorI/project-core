import { Routes } from "@interfaces/routes"
import { Router } from "express"
import brand from "./components/brand/brand.route"

class AdminRoute implements Routes {
    public router = Router()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.use('/brand', brand)
    }
}

export default new AdminRoute().router