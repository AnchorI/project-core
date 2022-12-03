import {Factory} from "fishery";
import {BrandImageCreationAttributes} from "@interfaces/models/brand-image.interface";

const brandImageFactory = Factory.define<BrandImageCreationAttributes>(() => ({
    image: 'image-url',
    brand_id: 1
}))

export default brandImageFactory