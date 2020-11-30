import {tns} from "../../node_modules/tiny-slider/src/tiny-slider";

const intro = document.querySelector('.intro');
const sliderList = intro && intro.querySelector('.intro__list');
const controlList = intro && intro.querySelector('.intro__control-wrapper');

const createSlider = () => {
  if (!sliderList) return false;

  tns({
    container: sliderList,
    items: 1,
    slideBy: 'page',
    controls: false,
    navContainer: controlList,
    center: true,
    loop: false,
  });
};

createSlider();

