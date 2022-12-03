import type {
    ListResponse,
    ErrorResponse,
    MetricListResponse,
    UploadResponse,
} from '@interfaces/api'

declare global {
    type ControllerListResponse<T> = ListResponse<T>
    type ControllerMetricListResponse<T, B> = MetricListResponse<T, B>
    type ControllerItemResponse<T> = ErrorResponse | T
    type ControllerDeleteResponse = ErrorResponse | { success: boolean }
    type ControllerDownloadResponse = ErrorResponse | string
    type ControllerUploadResponse = ErrorResponse | UploadResponse
}
