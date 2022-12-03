import BaseController from "@root/api/controller.base";
import GenerationImageService from "@root/api/admin/components/generation-image/generation-image.service";
import type { Request, Response} from "express";


class GenerationImageController extends BaseController {
    private generationImage = new GenerationImageService()

    public getList = async (req: Request, res: Response) => {
        const pagination = this.getPagination(req)

        const response = await this.generationImage.getList(pagination)
        if (!response) return this.httpError(res, "Generation images not found")

        return res.json(response)
    }
}

export default GenerationImageController