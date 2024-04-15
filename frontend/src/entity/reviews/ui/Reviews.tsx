'use client'
import {FC} from "react";
import {Container} from "@/shared/ui/container";
import {useReviewsQuery} from "../lib";
import styles from './Reviews.module.scss'
interface ReviewsProps {

}

export const Reviews: FC<ReviewsProps> = (props) => {
  const {sanitizedReviewsData} = useReviewsQuery();

  return (
    <Container>
      <div
        className={styles.Reviews}
      >
        {sanitizedReviewsData?.map((review, index) => (
          <div
            className={styles.Reviews__item}
            // id поломан со стороны backend присылаются два одинаковых id, поэтому использован index
            key={index}
            dangerouslySetInnerHTML={{__html: review.text}}
          />
        ))}
      </div>
    </Container>
  )
}
