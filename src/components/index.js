import loadImg from "./Img";
import loadCarousel from "./Carousel";

export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  const defaultType = domc.getType("default");
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  const imageType = domc.getType("image");
  const imageModel = imageType.model;
  const imageView = imageType.view;

  const compOpts = {
    domc,
    defaultType,
    defaultModel,
    defaultView,
    imageType,
    imageModel,
    imageView
  };
  loadImg(editor, compOpts);
  loadCarousel(editor, compOpts);
};
