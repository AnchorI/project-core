import type { Acl } from "@interfaces/acl"
import type { Models } from "@interfaces/db"
import type { AdminServersAttributes } from "@interfaces/models/admin-servers.interface"
import type { PartnerAttributes } from "@interfaces/models/partner.interface"
import type { UserAttributes } from "@interfaces/models/user.interface"
import type express from "express"
import type Sequelize from "sequelize"
import type { Model } from "sequelize"

declare global {
    interface PaginationQuery {
        page?: string
        limit?: string
    }
    interface DateQuery {
        from?: string
        to?: string
    }
    interface SortingQuery {
        sorting_type?: string
        sorting_field?: string
    }
}

declare global {
    interface PartnerRequest<P> extends Omit<express.Request<P>, "user" | "acl" | "server"> {
        partner?: PartnerAttributes
    }
}

declare module "express" {
    export interface Response extends express.Response {}

    export interface NextFunction extends express.NextFunction {}

    interface Request<P> {
        user?: UserAttributes
        acl?: Acl
        server?: AdminServersAttributes
        logger?: {
            requested_at: string
            response?: any
        }

        query: Partial<BasicQuery> & P["query"]
        body: P["body"]
        params: P["params"]
    }
}

declare module "json2yaml"

declare module "sequelize" {
    export type ModelStatic<M extends Model> = NonConstructor<typeof Model> & { new (): M } & {
        associate?: (reg: Models) => void
    } & { decrement?: any }

    export interface FindAndCountOptions extends Sequelize.FindAndCountOptions {
        page?: number
    }
}
