import { LAYOUT_CHOICES } from "../constants.js";

export default (editor, { domc, defaultModel, defaultView }) => {
  const type = "amp-carousel";
  const droppable = ["amp-img"].map(tag => `[data-gjs-type=${tag}]`).join(", ");

  domc.addType(type, {
    model: defaultModel.extend(
      {
        // Extend default properties
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          droppable,
          // Traits (Settings)
          traits: [
            "id",
            "alt",
            "title",
            {
              type: "select",
              label: "Layout",
              name: "layout",
              options: LAYOUT_CHOICES
            },
            {
              type: "select",
              label: "Type",
              name: "type",
              options: [
                { value: "carousel", name: "Carousel" },
                { value: "slides", name: "Slides" }
              ]
            }
          ]
        })
      },
      {
        isComponent(el) {
          if (el.tagName == type.toUpperCase()) {
            return { type };
          }
        }
      }
    ),
    view: defaultView
  });
};
