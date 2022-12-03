import BaseController from "@root/api/controller.base"
import BrandService from "@root/api/admin/components/brand/brand.service"
import type { Request, Response } from "express"


class BrandController extends BaseController {
    private brand = new BrandService()

    public getList = async (req: Request, res: Response) => {
        const pagination = this.getPagination(req)

        const response = await this.brand.getList(pagination)
        console.log('resc', response)
        if (!response) return this.httpError(res, "Brands not found")

        return res.json(response)
    }
}

export default BrandController