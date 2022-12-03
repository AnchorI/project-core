import brandFactory from "@database/factories/brand.factory";

export const brand = [
    brandFactory.build({
        name: "Mitch Pidor"
    })
]

export default {
    model: "Brand",
    data: brand
}