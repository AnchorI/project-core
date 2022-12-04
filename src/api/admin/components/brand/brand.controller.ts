import httpStatus from 'http-status'

import BaseController from '@root/api/controller.base'
import BrandService from '@root/api/admin/components/brand/brand.service'
import type { Request, Response } from 'express'
import type {
    GetListRequest,
    ListResponse,
    BrandRequest,
} from '@root/api/admin/components/brand/brand.interface'
import { ItemResponse } from '@root/api/admin/components/brand/brand.interface'

class BrandController extends BaseController {
    private brand = new BrandService()

    public getList = async (
        req: Request<GetListRequest>,
        res: Response<ListResponse>
    ) => {
        const pagination = this.getPagination(req)
        const response = await this.brand.getList(pagination)
        if (!response) return this.httpError(res, 'Brands not found')

        return res.json(response)
    }

    public get = async (
        req: Request<BrandRequest>,
        res: Response<ItemResponse>
    ) => {
        const brandId = Number(req.params.brandId)
        if (!brandId) return this.httpError(res, 'Brand ID not found')

        const response = await this.brand.get(brandId)
        if (!response?.id)
            return this.httpError(res, 'Brand not found', httpStatus.NOT_FOUND)

        return res.json({ brand: response })
    }
}

export default BrandController
