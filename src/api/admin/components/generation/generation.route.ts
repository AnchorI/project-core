import type { Routes } from '@interfaces/routes'
import { Router } from 'express'
import GenerationController from '@root/api/admin/components/generation/generation.controller'

class GenerationRoute implements Routes {
    public router = Router()
    private generationController = new GenerationController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get('/', this.generationController.getList)
        this.router.get('/:generationId', this.generationController.get)
    }
}

export default new GenerationRoute().router
