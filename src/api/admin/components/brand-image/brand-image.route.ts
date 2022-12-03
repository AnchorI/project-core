import type { Routes } from "@interfaces/routes"
import {Router} from "express";
import BrandImageController from "@root/api/admin/components/brand-image/brand-image.controller";

class BrandImageRoute implements Routes {
    public router = Router()
    private brandImageController = new BrandImageController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get('/', this.brandImageController.getList)
    }
}

export default new BrandImageRoute().router