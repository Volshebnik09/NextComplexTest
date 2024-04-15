import {ApiInstance} from "./ApiInstance";

export interface CreateOrderRequestPropsCartItem {
    id: number,
    quantity: number
}

export interface CreateOrderRequestProps {
    phone: string,
    cart: CreateOrderRequestPropsCartItem[]
}

export interface CreateOrderRequestResponseBody {
    success: 1
}

export interface CreateOrderRequestErrorResponseBody {
    success: 0,
    error: string
}

export const createOrderRequest = async (props: CreateOrderRequestProps) =>
    ApiInstance.post<CreateOrderRequestResponseBody>('/order', props)