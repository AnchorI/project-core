import { Factory } from 'fishery'
import { BrandCreationAttributes } from '@interfaces/models/brand.interface'

const brandFactory = Factory.define<BrandCreationAttributes>(() => ({
    name: 'TestName',
}))

export default brandFactory
