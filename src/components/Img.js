import { LAYOUT_CHOICES } from "../constants.js";

export default (editor, { domc, imageModel, imageView }) => {
  const type = "amp-img";

  domc.addType(type, {
    model: imageModel.extend(
      {
        // Extend default properties
        defaults: Object.assign({}, imageModel.prototype.defaults, {
          "custom-name": "AMP Image",
          resizable: false,
          // Can't drop other elements inside it
          droppable: false,
          // Traits (Settings)
          stylable: ["width", "height"],
          traits: [
            "alt",
            "title",
            {
              type: "select",
              label: "Layout",
              name: "layout",
              options: LAYOUT_CHOICES
            }
          ],
          void: true
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
    view: imageView
  });
};
