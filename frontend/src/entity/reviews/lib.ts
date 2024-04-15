import {useQuery} from "@tanstack/react-query";
import {getReviewsRequest} from "@/shared/api";

export const useReviewsQuery = () => {

  return useQuery({
    queryKey: ['reviews'],
    queryFn: getReviewsRequest
  })
}