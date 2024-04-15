import {FC} from "react";
import styles from './MainTitle.module.scss';
import {Container} from "@/shared/ui/container";

interface MainTitleProps {
    titleText:string

}

export const MainTitle: FC<MainTitleProps> = (props) => {
    return (
        <Container>
            <div
                className={styles.MainTitle}
            >
                <h1>
                    {props.titleText}
                </h1>
            </div>
        </Container>
    )
}   