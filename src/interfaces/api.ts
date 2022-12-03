import type { JWT } from "@interfaces/jwt"

export interface IJWT {
    decrypt: (token: string) => JWT | null
    encrypt: (payload: JWT) => string
    create: (userId: number, ttl?: number) => string
}

export interface IError {
    [key: string]: string | number | boolean | null
}

export interface ErrorResponse {
    success?: boolean
    message?: string
    error?: IError
}

export interface Pagination {
    limit: number
    total: number
    current_page: number
    total_pages: number
}

export interface PaginationProps {
    page: number
    limit: number
}

export interface ListResponse<T = any> {
    pagination: Pagination
    items: Array<T>
}

export interface MetricListResponse<T = any, B = any> extends ListResponse<T> {
    total: B
}

export interface DateFilterProps {
    from?: string
    to?: string
}

export enum SortingType {
    Asc = "ASC",
    Desc = "DESC"
}

export interface SortingProps {
    type: SortingType
    field: string
}

export interface UploadResponse {
    success: boolean
    message: string
    invalid: number
    created?: number
    updated?: number
    removed?: number
    file_name?: string
}
