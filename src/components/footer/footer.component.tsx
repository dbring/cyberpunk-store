import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../Categories/categories.component";
import { ReviewSlider } from "../ReviewSlider/review-slider.component";
import {
  BottomFooter,
  CategoryLinks,
  FooterContainer,
  ImportantInformation,
  StyledLogo,
} from "./footer.styles";

export const Footer = () => {
  return (
    <>
      <ReviewSlider />
      <FooterContainer>
        <ImportantInformation>
          <div className="support">
            <StyledLogo />
          </div>
          <CategoryLinks>
            <ul>
              {categories.map((category) => (
                <li>
                  <Link to={`shop/${category.title.toLowerCase()}`}>
                    {category.title} ⇀
                  </Link>
                </li>
              ))}
            </ul>
          </CategoryLinks>
        </ImportantInformation>
        <BottomFooter>
          Terms | Privacy | © 2019 Tyrell Corp. | Los Angeles, CA
        </BottomFooter>
      </FooterContainer>
    </>
  );
};
