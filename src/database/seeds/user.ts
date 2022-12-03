import userFactory from '@database/factories/user.factory'

import type { UserCreationSeedAttributes } from '@interfaces/models/user.interface'

import config from './config'

const getUserData = (userId: number): Partial<UserCreationSeedAttributes> => {
    switch (userId) {
        case 10: // Reseller user
        case 15:
        case 20:
        case 66: // Freshdesk TEST user
            return {
                email: 'egor@kiselev.space',
                crypted_password: '183525ff89cf32ed040da40c8e787f387b84e2a6',
                salt: '3fe8f9b322a9750bf4e5a71dca54ac90c04b2448',
                is_admin: true,
            }
        default:
            return {}
    }
}

const users: Array<UserCreationSeedAttributes> = Array(config.users)
    .fill(Number)
    .map((_, index: number) => {
        const userId = index + 1
        const userData = getUserData(userId)

        const user = userFactory.build({
            id: userId,
            is_admin: userId <= 5,
            email: `${userId}@kiselev.space`,
            api_token: `800cdff7c40f547d0f03eeb2d801d8057fcc45dff3f822b6d313c5e73c31f1${userId}`,
        })

        return { ...user, ...userData }
    })

export default {
    model: 'User',
    data: users,
}
