import {MainTitle} from "@/widgets/titles/MainTitle";
import {Reviews} from "@/entity/reviews";

export default function Home() {
  return (
    <main>
      <MainTitle titleText={'тестовое задание'}/>
      <Reviews/>
    </main>
  );
}
