import Testiments from "@/lib/Testimonials";
import { InfiniteMovingCards } from "./infinite-moving-cards";

export default function Testimonials() {
  return (
    <>
      <InfiniteMovingCards items={Testiments} direction="left" />
    </>
  );
}
