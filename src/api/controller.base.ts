import httpStatus from 'http-status'

import config from '@root/config'
import { createJWT, decrypt, encrypt } from '@root/helpers/jwt'

import { SortingType } from '@interfaces/api'

import type {
    DateFilterProps,
    PaginationProps,
    SortingProps,
    IError,
    IJWT,
} from '@interfaces/api'
import type express from 'express'
import type { Request } from 'express'
import type core from 'express-serve-static-core'

abstract class BaseController {
    protected jwt: IJWT = {
        decrypt,
        encrypt,
        create: createJWT,
    }

    protected httpError = (
        res: express.Response,
        message: string,
        code = httpStatus.NOT_FOUND,
        error: IError | null = null
    ) => {
        return res
            .status(code)
            .json({ success: false, message, ...(error && { error }) })
    }
    protected getSorting = (
        req: ControllerRequest,
        defaultField = 'id',
        defaultType = SortingType.Desc
    ): SortingProps => {
        return {
            field: req.query.sorting_field?.toString() || defaultField,
            type:
                req.query.sorting_type === SortingType.Desc ||
                req.query.sorting_type === SortingType.Asc
                    ? req.query.sorting_type
                    : defaultType,
        }
    }

    protected getDateFilter = (req: Request<any>): DateFilterProps => ({
        from: req.query.from?.toString() || '',
        to: req.query.to?.toString() || '',
    })

    protected getPagination = (req: Request<any>): PaginationProps => ({
        page: Number(req.query.page) || 1,
        limit: Number(req.query?.limit) || config.listLimitMin,
    })

    protected getBoolean = (
        value?: core.Query['key'],
        defaultValue = undefined
    ): boolean | typeof defaultValue => {
        if (!value) return defaultValue
        return Boolean(JSON.parse(value.toString()))
    }
}

export default BaseController
