import BaseController from '@root/api/controller.base'
import StoreService from '@root/api/admin/components/store/store.service'
import type { Request, Response } from 'express'
import type { GetListRequest } from '@root/api/admin/components/store/store.interface'

class StoreController extends BaseController {
    private store = new StoreService()

    public getList = async (req: Request<GetListRequest>, res: Response) => {
        const pagination = this.getPagination(req)

        const response = await this.store.getList(pagination)
        if (!response) return this.httpError(res, 'Store not founds')

        return res.json(response)
    }
}

export default StoreController
