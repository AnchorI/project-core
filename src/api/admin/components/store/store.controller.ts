import BaseController from '@root/api/controller.base'
import StoreService from '@root/api/admin/components/store/store.service'
import type { Request, Response } from 'express'
import type {
    GetListRequest,
    StoreRequest,
    ItemResponse,
    ListResponse,
} from '@root/api/admin/components/store/store.interface'
import {} from '@root/api/admin/components/store/store.interface'
import httpStatus from 'http-status'

class StoreController extends BaseController {
    private store = new StoreService()

    public getList = async (
        req: Request<GetListRequest>,
        res: Response<ListResponse>
    ) => {
        const pagination = this.getPagination(req)

        const response = await this.store.getList(pagination)
        if (!response) return this.httpError(res, 'Store not founds')

        return res.json(response)
    }

    public get = async (
        req: Request<StoreRequest>,
        res: Response<ItemResponse>
    ) => {
        const storeId = Number(req.params.storeId)
        if (!storeId) return this.httpError(res, 'Store ID not found')

        const response = await this.store.get(storeId)
        if (!response?.id)
            return this.httpError(res, 'Store not found', httpStatus.NOT_FOUND)

        return res.json({ store: response })
    }
}

export default StoreController
