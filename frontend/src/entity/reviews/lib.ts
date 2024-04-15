import {useQuery} from "@tanstack/react-query";
import {getReviewsRequest} from "@/shared/api";
import {sanitize} from "dompurify";

export const useReviewsQuery = () => {

  const reviewsQuery = useQuery({
    queryKey: ['reviews'],
    queryFn: getReviewsRequest
  })

  const reviews = reviewsQuery.data;

  const sanitizedReviewsData = reviews?.data.map(review => {
    return {
      ...review,
      text: sanitize(review.text)
    }
  })

  return {
    sanitizedReviewsData,
    reviewsQuery
  } as const
}