import BaseController from "@root/api/controller.base"
import BrandImageService from "@root/api/admin/components/brand-image/brand-image.service"
import type { Request, Response } from "express"


class BrandImageController extends BaseController {
    private brand_image = new BrandImageService()

    public getList = async (req: Request, res: Response) => {
        const pagination = this.getPagination(req)

        const response = await this.brand_image.getList(pagination)
        if (!response) return this.httpError(res, "Brand images not found")

        return res.json(response)
    }
}

export default BrandImageController