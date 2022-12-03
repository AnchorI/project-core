import type { RequestType } from '@interfaces/api'

declare global {
    type ControllerRequest<T = any, P = any> = RequestType<T, P>
    type ControllerQueryRequest<T> = RequestType<T>
    type ControllerBodyRequest<T> = RequestType<any, T>
}
