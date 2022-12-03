import type { Routes } from '@interfaces/routes'
import { Router } from 'express'
import GenerationImageController from '@root/api/admin/components/generation-image/generation-image.controllers'

class GenerationImageRoute implements Routes {
    public router = Router()
    private generationImageController = new GenerationImageController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get('/', this.generationImageController.getList)
    }
}

export default new GenerationImageRoute().router
