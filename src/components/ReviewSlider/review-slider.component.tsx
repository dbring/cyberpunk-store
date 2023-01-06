import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import reviews from "../../assets/review-data";
import {
  ActiveSlide,
  LastSlide,
  NextArrow,
  NextSlide,
  PrevArrow,
  SectionCenter,
  Text,
  Title,
} from "./review-slider.styles";

export const ReviewSlider = () => {
  const [index, setIndex] = useState(0);
  const [reviewData, setReviewData] = useState(reviews);

  useEffect(() => {
    const slider = setInterval(handleForwardArrowClick, 7500);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  const handleBackArrowClick = () => {
    setIndex((curIndex) => {
      if (curIndex === 0) {
        return reviewData.length - 1;
      }
      return curIndex - 1;
    });
  };

  const handleForwardArrowClick = () => {
    setIndex((curIndex) => {
      if (curIndex === reviewData.length - 1) {
        return 0;
      }
      return curIndex + 1;
    });
  };

  return (
    <section>
      <Title>
        <h2>
          <span>/</span>reviews
        </h2>
      </Title>
      <SectionCenter>
        {reviewData.map((person, i) =>
          i === index ? (
            <ActiveSlide>
              <h4>{person.name}</h4>
              <Text>{person.quote}</Text>
            </ActiveSlide>
          ) : i === index - 1 ||
            (index === 0 && i === reviewData.length - 1) ? (
            <LastSlide>
              <h4>{person.name}</h4>
              <Text>{person.quote}</Text>
            </LastSlide>
          ) : (
            <NextSlide>
              <h4>{person.name}</h4>
              <Text>{person.quote}</Text>
            </NextSlide>
          )
        )}
        <PrevArrow onClick={handleBackArrowClick}>
          <FiChevronLeft />
        </PrevArrow>
        <NextArrow>
          <FiChevronRight onClick={handleForwardArrowClick} />
        </NextArrow>
      </SectionCenter>
    </section>
  );
};
