import type { Routes } from "@interfaces/routes";
import {Router} from "express";
import CarModelController from "@root/api/admin/components/car-model/car-model.controller";

class CarModelRoute implements Routes {
    public router = Router()
    private carModelController = new CarModelController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get('/', this.carModelController.getList)
    }
}

export default new CarModelRoute().router