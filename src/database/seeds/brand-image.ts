import {BrandImageCreationAttributes} from "@interfaces/models/brand-image.interface";
import brandImageFactory from "@database/factories/brand-image.factory";

export const brandImage: Array<BrandImageCreationAttributes> = [
    brandImageFactory.build({ brand_id: 1, image: "Tesla Image"} ),
    brandImageFactory.build({ brand_id: 2, image: "Mers Image"}),
    brandImageFactory.build({ brand_id: 3, image: "BYD Image"})
]

export default {
    model: "BrandImage",
    data: brandImage
}