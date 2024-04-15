import {ApiInstance} from "./ApiInstance";

export interface GetProductsRequestProps {
    page: number,
    page_size: number
}

export interface GetProductsRequestResponseBodyItem {
    id: number,
    image_url: string,
    title: string,
    description: string,
    price: number
}

export interface GetProductsRequestResponseBody {
    page: number,
    amount: number,
    total: number,
    items: GetProductsRequestResponseBodyItem[]
}

export const getProductsRequest = async (props:GetProductsRequestProps) =>
    ApiInstance.get<GetProductsRequestResponseBody>('/products', {
    params: {
        page: props.page,
        page_size: props.page_size
    }
})
