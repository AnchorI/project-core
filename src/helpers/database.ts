import cloneDeep from "clone-deep"

import config from "@config/index"

import type { ModelCtor, FindAndCountOptions, FindOptions } from "sequelize"

export const findWithPaginate = async <T = any>(model: ModelCtor<any>, options: FindAndCountOptions) => {
    const page = options.page ? Number(options.page) : 1
    const limit = options.limit ? Math.min(options.limit, config.listLimitMax) : config.listLimitMin

    const findOptions = {
        ...options,
        limit,
        offset: (page - 1) * limit
    }

    const response = await model.findAndCountAll(findOptions)
    const total = typeof response.count === "number" ? response.count : (response.count as Array<any>).length

    return {
        pagination: {
            limit,
            total,
            current_page: page,
            total_pages: Math.floor((total + (limit - 1)) / limit)
        },
        items: response.rows.map(item => item.toJSON() as T)
    }
}

export const findWithoutPaginate = async (model: ModelCtor<any>, options: FindOptions) => {
    const response = await model.findAll({ ...options })

    if (response) {
        return response.map(item => item)
    }

    return null
}

export const removeObjectFields = (fields: Array<string> | string, items: Array<any>) => {
    const fieldsList = typeof fields === "string" ? [fields] : fields

    return items.reduce((acc: Array<any>, item) => {
        const newItem = cloneDeep(item)

        fieldsList.forEach(field => {
            if (field in newItem) {
                delete newItem[field]
            }
        })

        return [...acc, newItem]
    }, [])
}

