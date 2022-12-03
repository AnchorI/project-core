interface VehicleImages {
    id: number
    image: string
}

interface BrandStore {
    id: number
    name: string
}

interface ModelStore {
    id: number
    name: string
    description: string
}

interface GenerationStore {
    id: number
    name: string
    year_start: number
    year_end: number
    height: number
    width: number
    length: number
    description: string
}

interface EquipmentStore {
    id: number
    description: string
    start_price: number
    top_speed: number
    acceleration_0_100: number
    range: number
    transmission: string
}

export interface StoreResponse {
    mileage: number
    price: number
    release_year: number
    stock_category: number
    color_code: string
    discount: number
    quantity: number
    description: string
    text: string
    vehicle_images: VehicleImages
    brand_store: BrandStore
    model_store: ModelStore
    generation_store: GenerationStore
    equipment_store: EquipmentStore
}

export interface GetListRequest {
    query: PaginationQuery
}}

export type ListResponse = ControllerListResponse<StoreResponse>