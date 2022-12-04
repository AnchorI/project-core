import httpStatus from 'http-status'
import BaseController from '@root/api/controller.base'
import GenerationService from '@root/api/admin/components/generation/generation.service'
import type { Request, Response } from 'express'
import type {
    GetListRequest,
    ListResponse,
    GenerationRequest,
    ItemResponse,
} from '@root/api/admin/components/generation/generation.interface'

class GenerationController extends BaseController {
    private generation = new GenerationService()

    public getList = async (
        req: Request<GetListRequest>,
        res: Response<ListResponse>
    ) => {
        const pagination = this.getPagination(req)

        const response = await this.generation.getList(pagination)
        if (!response) return this.httpError(res, 'Generations not found')

        return res.json(response)
    }

    public get = async (
        req: Request<GenerationRequest>,
        res: Response<ItemResponse>
    ) => {
        const generationId = Number(req.params.generationId)
        if (!generationId) return this.httpError(res, 'Generation ID not found')

        const response = await this.generation.get(generationId)
        if (!response?.id)
            return this.httpError(
                res,
                'Generation not found',
                httpStatus.NOT_FOUND
            )

        return res.json({ generation: response })
    }
}

export default GenerationController
