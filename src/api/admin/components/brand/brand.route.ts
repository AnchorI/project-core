import type { Routes } from '@interfaces/routes'
import { Router } from 'express'
import BrandController from '@root/api/admin/components/brand/brand.controller'

class BrandRoute implements Routes {
    public router = Router()
    private brandController = new BrandController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get('/', this.brandController.getList)
        this.router.get('/:brandId', this.brandController.get)
    }
}

export default new BrandRoute().router
