import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { widthBreakPoint } from "./constants";

const getSlidesPerView = (innerWidth) => (innerWidth > widthBreakPoint ? 2 : 1);

const getModules = (innerWidth) => {
  return innerWidth > widthBreakPoint
    ? [Autoplay, EffectCoverflow, Pagination]
    : [Autoplay, Pagination];
};

const getSpaceBetween = (innerWidth) => {
  return innerWidth > widthBreakPoint ? 0 : 40;
};

export { getSlidesPerView, getModules, getSpaceBetween };
