import brandFactory from '@database/factories/brand.factory'
import { BrandCreationAttributes } from '@interfaces/models/brand.interface'

export const brand: Array<BrandCreationAttributes> = [
    brandFactory.build({ id: 1, name: 'Tesla' }),
    brandFactory.build({ id: 2, name: 'Mercedes-Benz' }),
    brandFactory.build({ id: 3, name: 'BYD' }),
]

export default {
    model: 'Brand',
    data: brand,
}
