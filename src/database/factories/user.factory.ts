import dayjs from 'dayjs'
import { Factory } from 'fishery'

import { faker } from '@faker-js/faker'

import type {
    UserCreationSeedAttributes,
    UserAttributes,
} from '@interfaces/models/user.interface'

export const basicUser: UserAttributes = {
    id: 1,
    email: '1@wavix.com',
    crypted_password: '7295e561255197d800cb1f573b943d477f83d3c0',
    is_active: true,
    is_blocked: false,
    first_name: 'John',
    last_name: 'Smith',
    api_token:
        '800cdff7c40f547d0f03eeb2d801d8057fcc45dff3f822b6d313c5e73c31f11',
    is_admin: false,
    salt: 'test',

    phone: '12345678911',

    created_at: dayjs().toDate(),
}

const userFactory = Factory.define<UserCreationSeedAttributes>(() => ({
    ...basicUser,
    phone: faker.phone.number(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
}))

export default userFactory
