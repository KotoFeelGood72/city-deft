import { Fancybox } from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export default () => {
  Fancybox.bind("[data-fancybox]", {
    // Опции FancyBox
  });
};
