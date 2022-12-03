import type { BaseAttributes } from '@interfaces/models/base.interface'
import type { Model, ModelStatic, Optional } from 'sequelize'

export enum Role {
    Admin = 'admin',
    Customer = 'customer',
}

export interface UserShort {
    id: number
    email: string
}

export interface UserResponse {
    id: number
    role: Role
    created_at: Date
    email: string
    is_active: boolean | null
    is_admin: boolean | null
    is_blocked: boolean | null
}

export interface UserAttributes extends BaseAttributes {
    id: number
    email: string
    salt: string
    crypted_password: string
    is_active: boolean
    is_blocked: boolean
    is_admin: boolean
    first_name: string
    last_name: string
    api_token: string
    phone: string
    created_at: Date
    role?: Role
}

export interface UserCreationSeedAttributes
    extends Optional<UserAttributes, 'id'> {}

export interface UserCreationAttributes extends Partial<UserAttributes> {
    email: string
    password?: string
}

export interface UserInstance
    extends Model<UserAttributes, UserCreationSeedAttributes>,
        UserAttributes {}

export interface UserModel extends ModelStatic<UserInstance> {}
