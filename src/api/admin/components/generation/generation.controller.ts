import BaseController from "@root/api/controller.base"
import GenerationService from "@root/api/admin/components/generation/generation.service"
import type { Request, Response } from "express"


class GenerationController extends BaseController {
    private generation = new GenerationService()

    public getList = async (req: Request, res: Response) => {
        const pagination = this.getPagination(req)

        const response = await this.generation.getList(pagination)
        if (!response) return this.httpError(res, "Generations not found")

        return res.json(response)
    }
}

export default GenerationController