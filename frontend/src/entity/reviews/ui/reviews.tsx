import {FC} from "react";
import styles from './reviews.module.scss';
import {Container} from "@/shared/ui/container";

interface reviewsProps {

}

export const reviews: FC<reviewsProps> = (props) => {
    return (
        <Container>
            <div className={styles.reviews}>

            </div>
        </Container>
    )
}
