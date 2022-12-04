import type { Routes } from '@interfaces/routes'
import { Router } from 'express'
import StoreController from '@root/api/admin/components/store/store.controller'

class StoreRoute implements Routes {
    public router = Router()
    private storeController = new StoreController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get('/', this.storeController.getList)
        this.router.get('/:storeId', this.storeController.get)
    }
}

export default new StoreRoute().router
