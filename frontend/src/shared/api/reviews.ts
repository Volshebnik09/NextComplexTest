import {ApiInstance} from "./ApiInstance";

export interface GetReviewsRequestResponseBody {
    id: number,
    text: string
}

export const getReviewsRequest = async () => ApiInstance.get<GetReviewsRequestResponseBody>('/reviews')
