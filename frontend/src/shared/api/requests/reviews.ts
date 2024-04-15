import {ApiInstance} from "../ApiInstance";

export interface GetReviewsRequestResponseBodyItem {
    id: number,
    text: string
}

export type GetReviewsRequestResponseBody = GetReviewsRequestResponseBodyItem[]

export const getReviewsRequest = async () => ApiInstance.get<GetReviewsRequestResponseBody>('/reviews')
