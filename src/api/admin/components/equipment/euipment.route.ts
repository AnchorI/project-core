import type { Routes } from '@interfaces/routes'
import { Router } from 'express'
import EquipmentController from '@root/api/admin/components/equipment/euipment.controller'

class EquipmentRoute implements Routes {
    public router = Router()
    private equipmentController = new EquipmentController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get('/', this.equipmentController.getList)
    }
}

export default new EquipmentRoute().router
