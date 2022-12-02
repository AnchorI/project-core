import type { BaseAttributes } from "@interfaces/models/base.interface"
import type { Model, ModelStatic, Optional } from "sequelize"

export enum Role {
    Media = "media",
    Proxy = "proxy",
    Cr = "cr",
    Rtpengine = "rtpengine"
}

export interface AdminServerAttributes extends BaseAttributes {
    name: string
    port: number | null
    host: string | null
    is_media: boolean | null
    disabled: boolean
    role: Role
    ip: string
    resolve_error: boolean | null
    api_key: string
}

export interface AdminServerCreationAttributes
    extends Optional<AdminServerAttributes, "id" | "created_at" | "updated_at"> {}

export interface AdminServerInstance
    extends Model<AdminServerAttributes, AdminServerCreationAttributes>,
        AdminServerAttributes {}

export interface AdminServerModel extends ModelStatic<AdminServerInstance> {}