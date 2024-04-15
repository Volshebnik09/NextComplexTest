'use client'
import {FC} from "react";
import {Container} from "@/shared/ui/container";
import {useReviewsQuery} from "../lib";
import { sanitize } from 'dompurify';
interface ReviewsProps {

}

export const Reviews: FC<ReviewsProps> = (props) => {
  const reviewsQuery = useReviewsQuery();

  const reviews = reviewsQuery.data;

  const sanitizedReviewsData = reviews?.data.map(review => {
    return {
      ...review,
      text: sanitize(review.text)
    }
  })

  return (
    <Container>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent:'center',
          alignItems:'stretch',
          gap: 34,
          marginTop: 105
        }}
      >
        {sanitizedReviewsData?.map((review, index) => (
          <div
            // id поломан со стороны backend присылаются два одинаковых id, поэтому использован index
            key={index}
            style={{
              maxWidth: 468,
              background: '#D9D9D9',
              flexGrow: 1,
              borderRadius:15,
              padding: "20px 27px"
            }}
            dangerouslySetInnerHTML={{__html: review.text}}
          >
          </div>
        ))}
      </div>
    </Container>
  )
}
