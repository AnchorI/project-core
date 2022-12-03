import BaseController from '@root/api/controller.base'
import BrandImageService from '@root/api/admin/components/brand-image/brand-image.service'
import type { Request, Response } from 'express'
import {
    GetListRequest,
    ListResponse,
} from '@root/api/admin/components/brand-image/brand-image.interface'

class BrandImageController extends BaseController {
    private brandImage = new BrandImageService()

    public getList = async (
        req: Request<GetListRequest>,
        res: Response<ListResponse>
    ) => {
        const pagination = this.getPagination(req)

        const response = await this.brandImage.getList(pagination)
        if (!response) return this.httpError(res, 'Brand images not found')

        return res.json(response)
    }
}

export default BrandImageController
